/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    LookupField: ComponentFramework.PropertyTypes.LookupProperty;
    ConfigJSON: ComponentFramework.PropertyTypes.StringProperty;
    ConfigFileName: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    LookupField?: ComponentFramework.LookupValue[];
}
