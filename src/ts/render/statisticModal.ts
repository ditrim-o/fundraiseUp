import { IStatistics } from '../interfaces/interfaces'

export const statisticsModal: HTMLDivElement | null =
    document.querySelector('#statistics-modal')
export const retryBtnSM: HTMLButtonElement | null =
    statisticsModal!.querySelector('#retry-button')

export const renderStatisticsModal = (statistics: IStatistics) => {
    const withoutErrors: HTMLSpanElement | null =
        statisticsModal!.querySelector('#without-errors')
    const countOfErrors: HTMLSpanElement | null =
        statisticsModal!.querySelector('#count-of-errors')
    const wordWithMostErrors: HTMLSpanElement | null =
        statisticsModal!.querySelector('#most-errors-word')

    statisticsModal!.classList.add('show')
    withoutErrors!.innerHTML = String(statistics.withoutErrors)
    countOfErrors!.innerHTML = String(statistics.countOfErrors)
    wordWithMostErrors!.innerHTML = String(
        statistics.wordsWithMostErrors.map((item) => ' ' + item)
    )
}
