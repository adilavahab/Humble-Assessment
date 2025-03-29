import { Button } from "@/components/ui/button"
import { WorkFlow } from "@/types/WorkflowDescriptorModel";
import { useState } from "react";

function PreviewPage() {
    const [textParagraph, setTextParagraph] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isRefreshEnabled, setIsRefreshEnabled] = useState(false);
    const [isCloseWindowEnabled, setCloseWindowEnabled] = useState(false);
    const onExecuteClick = () => {
        const workflowConfig = localStorage.getItem("workflowConfig");
        if(!workflowConfig) {
            console.log("No workflow config found");
            return;
        }
        const parsedWorkflowConfig = JSON.parse(workflowConfig) as WorkFlow[];
        parsedWorkflowConfig.forEach((workflow) => {
            executeWorkflow(workflow);
        });
    }

    const executeWorkflow = (workflow: WorkFlow) => {
        console.log('Executing workflow', workflow);
        switch (workflow.workFlowId) {
            case "1": // for alert
                alert(workflow.content);
                break;
            case "2": // for showing text
                setTextParagraph(workflow.content??"");
                break;
            case "3": // for showing image
                setImageUrl(workflow.imageUrl??"");
                break;
            case "4": // for refreshing page
                if(workflow.refreshPage) {
                    setIsRefreshEnabled(true);
                }
                break;
            case "5": // for setting local storage
                if(workflow.setLocalStorage) {
                    if(!workflow.localStorageKey || !workflow.localStorageValue) {
                        console.log("No local storage key or value found");
                        break;
                    }
                    localStorage.setItem(workflow.localStorageKey, workflow.localStorageValue);
                }
                break;
            case "6": // for getting local storage
                if(workflow.getLocalStorage) {
                    if(!workflow.localStorageKey) {
                        console.log("No local storage key found");
                        break;
                    }
                    const value = localStorage.getItem(workflow.localStorageKey);
                    if(value) {
                        setTextParagraph(value);
                    }
                }
                break;
            case "7": // for increasing button size
                if(workflow.increaseButtonSize) {
                    const button = document.getElementById("executeFlowButton") as HTMLButtonElement;
                    button.style.fontSize = "50px";

                }
                break;
            case "8": // for closing window
                if(workflow.closeWindow) {
                    setCloseWindowEnabled(true);
                    
                }
                break;
            case "9": // for prompt
                if(workflow.prompt) {
                    const message = workflow.promptMessage??"";
                    const result = prompt(message);
                    setTextParagraph(result??"");
                }
                break;
            case "10": // for changing color
                if(workflow.changeColor) {
                    const color = workflow.changeColorValue??"";
                    const button = document.getElementById("executeFlowButton") as HTMLButtonElement;
                    button.style.backgroundColor = color;
                }
                break;
            case "11": // for disabling button
                if(workflow.disableButton) {
                    const button = document.getElementById("executeFlowButton") as HTMLButtonElement;
                    button.disabled = true;

                }
                break;
            default:
                console.log("Invalid workflow id");
                break;
            
        }
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
    <Button onClick={onExecuteClick} id="executeFlowButton" className="w-fit">
        Execute Workflow
    </Button>
    
    {textParagraph && 
        <p className="text-center max-w-lg">{textParagraph}</p>
    }
    
    {imageUrl && 
        <img 
            src={imageUrl} 
            alt="Image" 
            className="max-w-md w-full h-auto object-contain rounded-lg"
        />
    }
    
    {isRefreshEnabled && 
        <div className="flex flex-col items-center gap-2">
            <Button onClick={() => window.location.reload()}>
                Refresh
            </Button>
            <p className="text-sm text-gray-600 italic">
                * This workflow allows you to refresh page with this button
            </p>
        </div>
    }
    
    {isCloseWindowEnabled && 
        <div className="flex flex-col items-center gap-2">
            <Button onClick={() => window.close()}>
                Close
            </Button>
            <p className="text-sm text-gray-600 italic">
                * This workflow allows you to close window with this button
            </p>
        </div>
    }
</div>

  )
}

export default PreviewPage