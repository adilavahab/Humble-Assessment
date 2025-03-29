import { WorkFlow } from "@/types/WorkflowDescriptorModel";

export interface WorkFlowDescriptions {
    description: string;
    workflow?: WorkFlow;
}

export const acceptedWorkflows: WorkFlowDescriptions[] = [
    {
        description: "Show an alert with Hello World",
        workflow: {
            workFlowId: "1",
            content: "Hello World"
        }
    },
    {
        description: "Show google logo image",
        workflow: {
            workFlowId: "2",
            imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII="
        }
    },
    {
        description: "Refresh page",
        workflow: {
            workFlowId: "4",
            refreshPage: true
        }
    },
    {
        description: "Set local storage name : Adila",
        workflow: {
            workFlowId: "5",
            setLocalStorage: true,
            localStorageKey: "name",
            localStorageValue: "Adila"
        }
    },
    {
        description: "Get local storage key name",
        workflow: {
            workFlowId: "6",
            getLocalStorage: true,
            localStorageKey: "name"
        }
    },
    {
        description: "Increase button size",
        workflow: {
            workFlowId: "7",
            increaseButtonSize: true
        }
    },
    {
        description: "Show prompt",
        workflow: {
            workFlowId: "9",
            prompt: true,
            promptMessage: "Please enter your name"
        }
    },
    {
        description: "Change button color to red",
        workflow: {
            workFlowId: "10",
            changeColor: true,
            changeColorValue: "#FF0000"
        }
    },
    {
        description: "Close window",
        workflow: {
            workFlowId: "8",
            closeWindow: true
        }
    }
];
