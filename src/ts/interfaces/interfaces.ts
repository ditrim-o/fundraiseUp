export interface IStateItem {
    word: string[]
    shuffledWord: string[]
    slovedPart: string[]
    isSloved: undefined | boolean
    errorsCount: number
    letterNubmer: number
}

export interface IState {
    currentItemNumber: number
    iterator: number
    stateItems: Array<IStateItem>
}

export interface IStatistics {
    withoutErrors: number
    countOfErrors: number
    wordsWithMostErrors: string[]
}

export interface IStateMetrics {
    isLetterCorrect: boolean
    isThirdError: boolean
    isNotThirdError: boolean
    isWordFinishCorrect: boolean
    isTrainingFinish: boolean
    isNextWord: boolean
}
