import axios from 'axios';
import { YesNoData } from './YesNoData';
import { YesNoApiClient } from './YesNoApiClient';

const API_URL = 'https://yesno.wtf/api';

export class YesNoApiClientImpl implements YesNoApiClient {
  async fetchYesNoData(): Promise<YesNoData> {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data from API');
    }
  }
}