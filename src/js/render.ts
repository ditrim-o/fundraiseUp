import { state } from './stateHandler.ts';
import { IStatistics } from './interfaces.ts';
import { init, initFromLS } from './stateHandler.ts';


export const lettersContainer: HTMLDivElement | null = document.querySelector('#letters')
const answersContainer: HTMLDivElement | null = document.querySelector('#answer')
const currentQuestion: HTMLSpanElement | null = document.querySelector('#current_question')
const totalQuestions: HTMLSpanElement | null = document.querySelector('#total_questions')

export const renderAnswerContianer = (): void => {
    answersContainer!.style.width = `${state.stateItems[state.currentItemNumber].word.length * 55 + 10}px`
}
export const render = () => {
    lettersContainer!.innerHTML = ""
    answersContainer!.innerHTML = ""
    const currentItem = state.stateItems[state.currentItemNumber]
    const shuffledWord: string[] = currentItem.shuffledWord
    const slovedPart: string[] = currentItem.slovedPart
    const isSloved: undefined | boolean = currentItem.sloved
    const currentItemNumber: number = state.currentItemNumber + 1
    const totalQuestionsCount: number = state.stateItems.length

    shuffledWord.forEach((item, i) => {
        lettersContainer!.innerHTML += `<button class="letters__item" data-letter="${item}" data-id="${i}">${item}</button>`
    })
    slovedPart.forEach((item, i) => {
        answersContainer!.innerHTML += `<button class="letters__item ${isSloved || isSloved === undefined ? "success" : "error"}" data-letter="${item}" data-id="${i}">${item}</button>`
    })

    currentQuestion!.innerHTML = String(currentItemNumber)
    totalQuestions!.innerHTML = String(totalQuestionsCount)
}

export const renderError = (id: number): void => {
    if (id < 0) return
    const errorButton: HTMLButtonElement | null = lettersContainer!.querySelector(`button[data-id="${id}"]`)
    errorButton?.classList.add('error')
}

export const renderStatisticsModal = (statistics: IStatistics) => {
    const modal: HTMLDivElement | null = document.querySelector('#statistics-modal')
    const withoutErrors: HTMLSpanElement | null = modal!.querySelector('#without-errors')
    const countOfErrors: HTMLSpanElement | null = modal!.querySelector('#count-of-errors')
    const wordWithMostErrors: HTMLSpanElement | null = modal!.querySelector('#most-errors-word')
    const button: HTMLButtonElement | null = modal!.querySelector('#retry-button')

    modal!.classList.add('show')
    withoutErrors!.innerHTML = String(statistics.withoutErrors)
    countOfErrors!.innerHTML = String(statistics.countOfErrors)
    wordWithMostErrors!.innerHTML = String(statistics.wordsWithMostErrors.map(item => ' ' + item))

    button!.addEventListener('click', () => { retryHandler(modal) })
}

export const renderContinueModal = () => {
    const modal: HTMLDivElement | null = document.querySelector('#continue-modal')
    const continueBtn: HTMLButtonElement | null = modal!.querySelector('#continue-btn')
    const retryBtn: HTMLButtonElement | null = modal!.querySelector('#retry-btn')

    modal!.classList.add('show')

    retryBtn!.addEventListener('click', () => { retryHandler(modal) })
    continueBtn!.addEventListener('click', () => { continueHandler(modal) })
}

const retryHandler = (modal: HTMLDivElement | null) => {
    localStorage.removeItem('state')
    modal!.classList.remove('show')
    init()
}

const continueHandler = (modal: HTMLDivElement | null) => {
    modal!.classList.remove('show')
    initFromLS()
}

