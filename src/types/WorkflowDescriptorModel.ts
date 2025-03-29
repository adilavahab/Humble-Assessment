export interface WorkFlow {
    workFlowId: string;
    content?: string;
    imageUrl?: string;
    refreshPage?: boolean;
    localStorageKey?: string;
    localStorageValue?: string;
    setLocalStorage?: boolean;
    getLocalStorage?: boolean;
    increaseButtonSize?: boolean;
    closeWindow?: boolean;
    prompt?: boolean;
    promptMessage?: string;
    changeColor?: boolean;
    changeColorValue?: string;
    disableButton?: boolean;
}
