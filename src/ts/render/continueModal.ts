export const continueModal: HTMLDivElement | null =
    document.querySelector('#continue-modal')
export const continueBtnCM: HTMLButtonElement | null =
    continueModal!.querySelector('#continue-btn')
export const retryBtnCM: HTMLButtonElement | null =
    continueModal!.querySelector('#retry-btn')

export const renderContinueModal = () => {
    continueModal!.classList.add('show')
}
