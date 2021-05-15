import allData from './data.json';

export const getAll = () => allData;

export const getById = id => {
  const { data } = allData;

  return data.find(item => item.id === id);
};
