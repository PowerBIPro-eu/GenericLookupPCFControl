import { IInputs } from '../generated/ManifestTypes';
export default interface iPropsInput {
  isReadOnly: boolean;
  context: ComponentFramework.Context<IInputs>;
  optionSets: any[];
  gridConfig: any;
  hygiene?: any;
  lookupText?: String;
  lookupId?: String;
}
