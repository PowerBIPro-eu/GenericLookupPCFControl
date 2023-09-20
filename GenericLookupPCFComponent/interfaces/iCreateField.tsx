import iCreateValidation from "./iCreateValidation";
import iExternalCall from "./iExternalCall";
import iLookupFieldDefinition from "./iLookupFieldDefinition";

type AdvancedFetchXmlFilterArray = {
  filterPlaceholder: string;
  filterByLookupField: string;
}[];

export default interface iCreateField {
  name?: string;
  displayText?: string;
  dataType?: string;
  validation?: iCreateValidation;
  lookUpCol?: iLookupFieldDefinition;
  exterCall?: iExternalCall;
  openSearchPanelOnKeyDown?: boolean;
  recordsThreshHoldLimit?: number;
  newRecordText?: string;
  focusControl?: string;
  entitySymbol?: string;
  entityCustomImage?: string;
  calloutTitle?: string;
  infoText?: string;
  virtualTable: boolean;
  advancedFetchXmlFilters: AdvancedFetchXmlFilterArray;
}
