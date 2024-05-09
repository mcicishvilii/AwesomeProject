// usecases/FetchYesNoData.js

import { YesNoData } from "../data/YesNoData";
import { YesNoRepository } from "../data/YesNoRepository";

export class FetchYesNoData {
  constructor(private yesNoRepository: YesNoRepository) {}

  async execute(): Promise<YesNoData> {
    return await this.yesNoRepository.getYesNoData();
  }
}