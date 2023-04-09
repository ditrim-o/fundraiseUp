export interface IStateItem {
    word: string[],
    shuffledWord: string[],
    slovedPart: string[],
    sloved: undefined | boolean,
    errorsCount: number
}

export interface IState<IStateItem> {
    currentItemNumber: number,
    letterNumber: number,
    stateItems: Array<IStateItem>
}

export interface IStatistics {
    withoutErrors: number,
    countOfErrors: number,
    wordsWithMostErrors: string[]
}