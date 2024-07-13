import { RootState } from './store';
import { DataEntry } from '../types';

export const selectData = (state: RootState): DataEntry[] => state.data;
export const selectStock = (state: RootState): string => state.stock;