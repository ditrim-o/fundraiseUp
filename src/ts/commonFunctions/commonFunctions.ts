import { IState, IStateMetrics, IStatistics } from '../interfaces/interfaces'

export const isLetterKeyPressed = (code: string): boolean => {
    return code.length === 4 && code.includes('Key')
}

export const isArrowKeyPressed = (code: string): boolean => {
    return code === 'ArrowLeft' || code === 'ArrowRight'
}

export const shuffle = <T>(array: Array<T>): Array<T> => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }

    return array
}

export const calcStatistics = (state: IState): IStatistics => {
    const statistics: IStatistics = {
        withoutErrors: 0,
        wordsWithMostErrors: [],
        countOfErrors: 0,
    }

    let mostErrorsCount = 0
    state.stateItems.forEach((item) => {
        if (item.errorsCount === 0) {
            statistics.withoutErrors++
        } else {
            statistics.countOfErrors += item.errorsCount
        }

        if (item.errorsCount > mostErrorsCount)
            mostErrorsCount = item.errorsCount
    })
    state.stateItems.forEach((item) => {
        if (mostErrorsCount > 0 && item.errorsCount === mostErrorsCount)
            statistics.wordsWithMostErrors.push(item.word.join(''))
    })

    return statistics
}

export const saveStateToLS = (state: IState): void => {
    localStorage.setItem('state', JSON.stringify(state))
}

export const checkNewLetter = (
    state: IState,
    letter: string
): IStateMetrics => {
    const currentItem = state.stateItems[state.currentItemNumber]
    const { word, letterNubmer, errorsCount } = currentItem

    const isLetterCorrec = word[letterNubmer] === letter
    const isThirdError = !isLetterCorrec && errorsCount === 2
    const isNotThirdError = !isLetterCorrec && errorsCount < 2
    const isWordFinishCorrect =
        isLetterCorrec && letterNubmer + 1 === word.length
    const isTrainingFinish =
        (isWordFinishCorrect || isThirdError) &&
        state.currentItemNumber + 1 === state.stateItems.length
    const isNextWord =
        !isTrainingFinish && (isWordFinishCorrect || isThirdError)

    const stateMetrics: IStateMetrics = {
        isLetterCorrect: isLetterCorrec,
        isThirdError: isThirdError,
        isNotThirdError: isNotThirdError,
        isWordFinishCorrect: isWordFinishCorrect,
        isTrainingFinish: isTrainingFinish,
        isNextWord: isNextWord,
    }

    return stateMetrics
}
