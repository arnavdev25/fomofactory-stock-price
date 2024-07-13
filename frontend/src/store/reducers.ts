import { DataEntry } from '../types';

const initialState = {
  data: [] as DataEntry[],
  stock: 'BTC',
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_STOCK':
      return { ...state, stock: action.payload };
    default:
      return state;
  }
};

export default rootReducer;