import {
    isArrowKeyPressed,
    isLetterKeyPressed,
} from '../commonFunctions/commonFunctions'
import {
    continueModal,
    retryBtnCM,
    continueBtnCM,
} from '../render/continueModal'
import { retryBtnSM, statisticsModal } from '../render/statisticModal'
import { lettersContainer } from '../render/trainer'
import {
    init,
    initFromLS,
    lettersChecker,
    state,
    switchState,
} from '../stateHandler/stateHandler'

export const addTrainingListeners = (): void => {
    document.addEventListener('keydown', keybordPressHandler)
    lettersContainer?.addEventListener('click', lettersContainerClickHandler)
}
export const removeTrainerListeners = () => {
    document.removeEventListener('keydown', keybordPressHandler)
    lettersContainer?.removeEventListener('click', lettersContainerClickHandler)
}

export const addModalButtonsListeners = () => {
    retryBtnCM!.addEventListener('click', (event: Event) => {
        retryHandler(continueModal)
    })
    continueBtnCM!.addEventListener('click', (event: Event) => {
        continueHandler(continueModal)
    })
    retryBtnSM!.addEventListener('click', (event: Event) => {
        retryHandler(statisticsModal)
    })

    const buttons: NodeListOf<Element> =
        document.querySelectorAll('.btn-no-enter')
    buttons.forEach((btn) => {
        btn.addEventListener
    })
}

const keybordPressHandler = (event: KeyboardEvent): void => {
    if (isArrowKeyPressed(event.code)) {
        switchState(event.code as 'ArrowLeft' | 'ArrowRight')
    } else if (
        isLetterKeyPressed(event.code) &&
        state.stateItems[state.currentItemNumber].isSloved === undefined
    ) {
        lettersChecker(event.code[3].toLowerCase())
    } else if (event.code === 'Enter') {
        event.preventDefault()
    }
}

const lettersContainerClickHandler = (event: Event): void => {
    const target: HTMLElement = event.target as HTMLElement
    if (target.tagName === 'BUTTON') {
        lettersChecker(target.dataset.letter!, Number(target.dataset.id!))
    }
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
