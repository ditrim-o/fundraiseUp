import { WORDS } from '../data/data'
import {
    shuffle,
    calcStatistics,
    saveStateToLS,
    checkNewLetter,
} from '../commonFunctions/commonFunctions'
import { IState } from '../interfaces/interfaces'
import { render, renderAnswerContianer, renderError } from '../render/trainer'
import { renderContinueModal } from '../render/continueModal'
import { renderStatisticsModal } from '../render/statisticModal'
import {
    addModalButtonsListeners,
    addTrainingListeners,
    removeTrainerListeners,
} from '../listeners/listeners'

const initialState: IState = {
    currentItemNumber: 0,
    iterator: 0,
    stateItems: [],
}

export const state: IState = new Proxy(
    {
        currentItemNumber: 0,
        iterator: 0,
        stateItems: [],
    },
    {
        set(target: IState, prop: keyof IState, val) {
            target[prop] = val
            if (target.stateItems.length === 0) return true
            if (prop === 'iterator') {
                render()
            } else {
                setTimeout(() => {
                    renderAnswerContianer()
                    render()
                }, 500)
            }

            return true
        },
    }
)

export const init = () => {
    if (localStorage.getItem('state')) {
        renderContinueModal()
    } else {
        Object.assign(state, initialState)
        state.stateItems = []
        const shuffled = [...shuffle(WORDS)]
        shuffled.forEach((item, i) => {
            if (i < 6) {
                state.stateItems.push({
                    word: item.split(''),
                    shuffledWord: shuffle(item.split('')),
                    slovedPart: [],
                    isSloved: undefined,
                    errorsCount: 0,
                    letterNubmer: 0,
                })
            }
        })
        render()
        renderAnswerContianer()
        addTrainingListeners()
    }
    addModalButtonsListeners()
}

export const initFromLS = (): void => {
    const stateLS = JSON.parse(localStorage.getItem('state') || '') as IState
    Object.assign(state, stateLS)
    render()
    renderAnswerContianer()
    addTrainingListeners()
}

export const lettersChecker = (letter: string, id?: number): void => {
    const {
        isLetterCorrect,
        isThirdError,
        isNotThirdError,
        isWordFinishCorrect,
        isTrainingFinish,
        isNextWord,
    } = checkNewLetter(state, letter)
    let {
        word,
        shuffledWord,
        slovedPart,
        letterNubmer,
        isSloved,
        errorsCount,
    } = state.stateItems[state.currentItemNumber]
    const letterIndex: number = id ?? shuffledWord.indexOf(letter)
    let error: boolean = false

    if (isThirdError) {
        slovedPart = [...word]
        shuffledWord = []
        isSloved = false
        letterNubmer = word.length - 1
        errorsCount++
    }

    if (isNotThirdError) {
        errorsCount++
        error = true
        renderError(letterIndex)
    }

    if (isWordFinishCorrect) {
        slovedPart = [...word]
        shuffledWord = []
        isSloved = true
        letterNubmer = word.length - 1
    } else if (isLetterCorrect) {
        shuffledWord.splice(letterIndex, 1)
        slovedPart.push(letter)
        letterNubmer++
    }

    state.stateItems[state.currentItemNumber] = {
        word: word,
        shuffledWord: shuffledWord,
        slovedPart: slovedPart,
        isSloved: isSloved,
        errorsCount: errorsCount,
        letterNubmer: letterNubmer,
    }

    if (!error) state.iterator++

    if (isNextWord) {
        state.currentItemNumber++
    }
    saveStateToLS(state)
    if (isTrainingFinish) {
        renderStatisticsModal(calcStatistics(state))
        localStorage.removeItem('state')
        removeTrainerListeners()
    }
}

export const switchState = (key: 'ArrowLeft' | 'ArrowRight'): void => {
    const canGoToNext: boolean =
        state.currentItemNumber + 1 < state.stateItems.length &&
        state.stateItems[state.currentItemNumber].isSloved !== undefined
    const canGoToPrev: boolean = state.currentItemNumber > 0
    if (key === 'ArrowRight' && canGoToNext) {
        state.currentItemNumber++
    } else if (key === 'ArrowLeft' && canGoToPrev) {
        state.currentItemNumber--
    }
}
