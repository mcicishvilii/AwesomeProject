import { YesNoApiClient } from "./YesNoApiClient";
import { YesNoData } from "./YesNoData";

export interface YesNoRepository {
    getYesNoData(): Promise<YesNoData>;
  }
  
  export class YesNoRepositoryImpl implements YesNoRepository {
    constructor(private apiClient: YesNoApiClient) {}
  
    async getYesNoData(): Promise<YesNoData> {
      return await this.apiClient.fetchYesNoData();
    }
  }