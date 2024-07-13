export const setData = (data: any[]) => ({
  type: 'SET_DATA',
  payload: data,
});

export const setStock = (stock: string) => ({
  type: 'SET_STOCK',
  payload: stock,
});