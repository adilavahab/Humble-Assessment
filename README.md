For custom workflow configuration ,please use the below samples.
```json
 [
        {
            "workFlowId": "1",
            "content": "This is a test alert message"
        },
        {
            "workFlowId": "2",
            "content": "This is a test alert message"
        },
        {
            "workFlowId": "3",
            "imageUrl": "https://placekitten.com/200/300"
        },
        {
            "workFlowId": "4",
            "refreshPage": true
        },
        {
            "workFlowId": "5",
            "localStorageKey": "name",
            "localStorageValue": "John Doe"
        },
        {
            "workFlowId": "6",
            "increaseButtonSize": true
        },
        {
            "workFlowId": "9",
            "prompt": true,
            "promptMessage": "This is a test prompt message"

        }
]
 #Workflow Configurations

## Workflow 1: Alert Message
- ID: 1
- Action: Display Alert
- Content: "This is a test alert message"

## Workflow 2: Alert Message
- ID: 2
- Action: Display Alert
- Content: "This is a test alert message"

## Workflow 3: Image Display
- ID: 3
- Action: Display Image
- Image URL: https://placekitten.com/200/300

## Workflow 4: Page Refresh
- ID: 4
- Action: Refresh Page
- Refresh Enabled: true

## Workflow 5: Local Storage
- ID: 5
- Action: Set Local Storage
- Key: "name"
- Value: "John Doe"

## Workflow 6: Button Resize
- ID: 6
- Action: Increase Button Size
- Increase Size: true

## Workflow 7: Prompt Dialog
- ID: 9
- Action: Show Prompt
- Prompt Message: "This is a test prompt message"

