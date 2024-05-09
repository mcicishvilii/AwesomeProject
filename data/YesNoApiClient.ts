import { YesNoData } from "./YesNoData";

export interface YesNoApiClient {
    fetchYesNoData(): Promise<YesNoData>;
  }