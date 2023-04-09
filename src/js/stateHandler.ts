import { WORDS } from './data.ts'
import { shuffle, isLetterKeyPressed, calcStatistics } from './commonFunctions.ts';
import { lettersContainer, render, renderAnswerContianer, renderError, renderStatisticsModal, renderContinueModal } from './render.ts'
import { IState, IStateItem, IStatistics } from './interfaces.ts';

const initialState: IState<IStateItem> = {
    currentItemNumber: 0,
    letterNumber: 0,
    stateItems: []
}

export const state: IState<IStateItem> = new Proxy({
    currentItemNumber: 0,
    letterNumber: 0,
    stateItems: []
}, {
    set(target: IState<IStateItem>, prop: keyof IState<IStateItem>, val) {
        target[prop] = val

        if (target.stateItems.length === 0) return true

        if (prop === 'letterNumber') {
            render()
        } else {
            setTimeout(() => {
                renderAnswerContianer()
                render()
            }, 500)
        }
        return true
    }
})

export const init = () => {
    if (localStorage.getItem('state')) {
        console.log(Boolean(localStorage.getItem('state')));
        renderContinueModal()
    } else {
        Object.assign(state, initialState);
        state.stateItems = []
        const shuffled = [...shuffle(WORDS)]
        shuffled.forEach(item => {
            state.stateItems.push({
                word: item.split(""),
                shuffledWord: shuffle(item.split("")),
                slovedPart: [],
                sloved: undefined,
                errorsCount: 0
            })
        })
        render()
        renderAnswerContianer()
        addListeners()
    }

}

export const initFromLS = (): void => {
    const stateLS = JSON.parse(localStorage.getItem('state') || "") as IState<IStateItem>;
    Object.assign(state, stateLS);
    render()
    renderAnswerContianer()
    addListeners()
}

const addListeners = (): void => {
    window.addEventListener('keypress', keybordPressHandler)
    lettersContainer?.addEventListener('click', lettersContainerClickHandler)
}

const removeListeners = (): void => {
    window.removeEventListener('keypress', keybordPressHandler)
    lettersContainer?.removeEventListener('click', lettersContainerClickHandler)
}

const keybordPressHandler = (event: KeyboardEvent): void => {
    if (isLetterKeyPressed(event.code)) {
        lettersChecker(event.key.toLowerCase())
    }
}

const lettersContainerClickHandler = (event: Event): void => {
    const target: HTMLElement = event.target as HTMLElement
    if (target.tagName === "BUTTON") {
        lettersChecker(target.dataset.letter!, Number(target.dataset.id!))
    }
}

const lettersChecker = (letter: string, id?: number): void => {
    const { currentItemNumber, stateItems, letterNumber } = state
    const currentItem = state.stateItems[state.currentItemNumber]
    const { word, shuffledWord } = currentItem
    const currentLetter = word[letterNumber]
    let letterIndex: number = id ?? shuffledWord.indexOf(letter)
    if (currentLetter === letter) {
        currentItem.shuffledWord.splice(letterIndex, 1)
        currentItem.slovedPart.push(letter)
        state.letterNumber++
        saveStateToLS(state)
    } else if (currentItem.errorsCount < 2) {
        currentItem.errorsCount++
        renderError(letterIndex)
        saveStateToLS(state)
    } else if (currentItem.errorsCount = 2) {
        currentItem.slovedPart = [...currentItem.word]
        currentItem.shuffledWord = []
        currentItem.sloved = false
        state.letterNumber = word.length
        currentItem.errorsCount++
        saveStateToLS(state)
    }


    const finish: boolean = state.letterNumber === word.length && currentItemNumber + 1 === stateItems.length
    const wordIsEnd: boolean = state.letterNumber === word.length && currentItemNumber + 1 < stateItems.length


    if (finish) {
        renderStatisticsModal(calcStatistics(state))
        localStorage.removeItem('state')
        removeListeners()
    }
    else if (wordIsEnd) {
        state.letterNumber = 0
        state.currentItemNumber++
        saveStateToLS(state)
    }
}

const saveStateToLS = (state: IState<IStateItem>): void => {
    localStorage.setItem("state", JSON.stringify(state))
}