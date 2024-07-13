import axios from 'axios';
import { DataEntry } from '../types';

const API_URL = 'http://localhost:8080/stock/prices';

export const fetchData = async (stock: string): Promise<DataEntry[]> => {
  const response = await axios.get(`${API_URL}?symbol=${stock}`);
  return response.data.result;
};