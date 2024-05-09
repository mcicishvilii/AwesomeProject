import { useState } from 'react';
import { FetchYesNoData } from '../domain/FetchYesNoDataUseCase';

export class YesNoViewModel {
  constructor(private fetchYesNoUseCase: FetchYesNoData) {
    this.state = {
      data: null,
      isLoading: true, // Set initial loading state to true
      error: null,
    };
  }

  state = {
    data: null,
    isLoading: true, // Set initial loading state to true
    error: null,
  };

  setState = (newState) => {
    this.state = { ...this.state, ...newState };
  };

  async fetchData() {
    this.setState({ isLoading: true, error: null }); // Set loading state to true before fetching

    try {
      const data = await this.fetchYesNoUseCase.execute();
      this.setState({ data, isLoading: false }); // Set loading state to false after fetching
    } catch (error) {
      this.setState({ error: error.message, isLoading: false }); // Set loading state to false on error
    }
  }

  getData = () => this.state.data;
  getIsLoading = () => this.state.isLoading;
  getError = () => this.state.error;
}