import { IStateItem } from '../interfaces/interfaces'
import { state } from '../stateHandler/stateHandler'

export const lettersContainer: HTMLDivElement | null =
    document.querySelector('#letters')
const answersContainer: HTMLDivElement | null =
    document.querySelector('#answer')
const currentQuestion: HTMLSpanElement | null =
    document.querySelector('#current_question')
const totalQuestions: HTMLSpanElement | null =
    document.querySelector('#total_questions')

export const renderAnswerContianer = (): void => {
    answersContainer!.style.width = `${
        state.stateItems[state.currentItemNumber].word.length * 55 + 10
    }px`
}
export const render = () => {
    lettersContainer!.innerHTML = ''
    answersContainer!.innerHTML = ''
    const currentItem: IStateItem = state.stateItems[state.currentItemNumber]
    const shuffledWord: string[] = currentItem.shuffledWord
    const slovedPart: string[] = currentItem.slovedPart
    const isSloved: undefined | boolean = currentItem.isSloved
    const currentItemNumber: number = state.currentItemNumber + 1
    const totalQuestionsCount: number = state.stateItems.length

    shuffledWord.forEach((item, i) => {
        lettersContainer!.innerHTML += `<button class="letters__item" data-letter="${item}" data-id="${i}">${item}</button>`
    })
    slovedPart.forEach((item, i) => {
        answersContainer!.innerHTML += `<button class="letters__item ${
            isSloved || isSloved === undefined ? 'success' : 'error'
        }" data-letter="${item}" data-id="${i}">${item}</button>`
    })

    currentQuestion!.innerHTML = String(currentItemNumber)
    totalQuestions!.innerHTML = String(totalQuestionsCount)
}

export const renderError = (id: number): void => {
    if (id < 0) return
    const errorButton: HTMLButtonElement | null =
        lettersContainer!.querySelector(`button[data-id="${id}"]`)
    errorButton?.classList.add('error')
}
