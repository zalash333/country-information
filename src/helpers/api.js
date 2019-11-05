/* eslint-disable no-plusplus */
import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://restcountries.eu/rest/v2/all',
    });
    this.apiImg = axios.create({
      baseURL: 'https://pixabay.com/api/?key=14176089-86798348caaf01e53a2691735&q=london&image_type=photo',
    });
  }
}

export default Api;
