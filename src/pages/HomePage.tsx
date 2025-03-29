import { Button } from "@/components/ui/button";
import {
  acceptedWorkflows,
  WorkFlowDescriptions,
} from "@/lib/generate-workflow-configs";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function HomePage() {
  const [jsonConfig, setJsonConfig] = useState("");
  const [workflow, setWorkflow] = useState<WorkFlowDescriptions[]>([]);
  const navigate = useNavigate();

  const saveAndPreview = () => {
    if(jsonConfig !== "") {
      localStorage.setItem("workflowConfig", jsonConfig);
      navigate("/preview");
      return;

    }
    else{
        let jsonConfigForPredefinedSet = [];
        for(let i = 0; i < workflow.length; i++) {
            jsonConfigForPredefinedSet.push(workflow[i].workflow);
        }
        const jsonConfig = JSON.stringify(jsonConfigForPredefinedSet);
        localStorage.setItem("workflowConfig", jsonConfig);
        console.log(localStorage.getItem("workflowConfig"));
        navigate("/preview");
    }
    
  };

  useEffect(() => {
    setWorkflow(acceptedWorkflows);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 w-screen p-3.5">
      <h1 className="text-2xl font-bold mb-6">Workflow Configurations</h1>
      <div className="flex flex-row w-full max-w-7xl gap-8 items-start">
        {/* Left section - Drag and Drop */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="font-semibold mb-4">Drag and re-order the below predefined config items</h3>
          <div className="w-full bg-slate-50 p-4 rounded-lg min-h-[24rem]"> 
            <Reorder.Group axis="y" values={workflow} onReorder={setWorkflow} className="space-y-2">
              {workflow.map((item) => (
                <Reorder.Item 
                  key={item.description} 
                  value={item} 
                  className="bg-white p-3 rounded shadow cursor-move hover:bg-slate-100"
                >
                  <div>{item.description}</div>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>

        {/* Center divider */}
        <div className="flex flex-col items-center">
          <div className="h-full flex items-center">
            <p className="text-slate-500 font-medium">OR</p>
          </div>
        </div>

        {/* Right section - JSON Config */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="font-semibold mb-4">Enter your own config</h3>
          <textarea
            placeholder="Enter your json config here"
            value={jsonConfig}
            onChange={(e) => setJsonConfig(e.target.value)}
            className="w-full h-96 p-4 rounded-lg border border-slate-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <p>
            Note: The above configurations will be saved in local storage and
            If config added the predefined reordered set will be ignored
      </p>
      <Button onClick={saveAndPreview} className="mt-8">
        Save and Preview
      </Button>
    </div>
  );
}

export default HomePage;


