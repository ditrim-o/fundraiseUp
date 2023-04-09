import { IState, IStateItem, IStatistics } from "./interfaces";

export const isLetterKeyPressed = (code: string): boolean => {
    return code.length === 4 && code.includes('Key')
}

export const shuffle = <T>(array: Array<T>): Array<T> => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}

export const calcStatistics = (state: IState<IStateItem>): IStatistics => {
    const statistics: IStatistics = {
        withoutErrors: 0,
        wordsWithMostErrors: [],
        countOfErrors: 0
    }

    let mostErrorsCount = 0
    state.stateItems.forEach(item => {
        if (item.errorsCount === 0) {
            statistics.withoutErrors++
        } else {
            statistics.countOfErrors += item.errorsCount
        }

        if (item.errorsCount > mostErrorsCount) mostErrorsCount = item.errorsCount
    })
    state.stateItems.forEach(item => {
        if (mostErrorsCount > 0 && item.errorsCount === mostErrorsCount) statistics.wordsWithMostErrors.push(item.word.join(""))
    })

    return statistics
}