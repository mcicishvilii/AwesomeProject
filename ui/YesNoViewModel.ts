import { useState } from 'react';
import { FetchYesNoData } from '../domain/FetchYesNoDataUseCase';

export class YesNoViewModel {
  constructor(private fetchYesNoUseCase: FetchYesNoData) {
    this.state = {
      data: null,
      isLoading: true,
      error: null,
    };
    this.subscribers = [];
  }

  state = {
    data: null,
    isLoading: true,
    error: null,
  };

  subscribers = [];

  setState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.notifySubscribers();
  };

  subscribe = (callback) => {
    this.subscribers.push(callback);
  };

  unsubscribe = (callback) => {
    this.subscribers = this.subscribers.filter((sub) => sub !== callback);
  };

  notifySubscribers = () => {
    this.subscribers.forEach((callback) => callback(this.state));
  };

  async fetchData() {
    this.setState({ isLoading: true, error: null });

    try {
      const data = await this.fetchYesNoUseCase.execute();
      this.setState({ data, isLoading: false });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  }

  getData = () => this.state.data;
  getIsLoading = () => this.state.isLoading;
  getError = () => this.state.error;
}