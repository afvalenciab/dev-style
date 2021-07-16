import allData from './data.json';

export const getAll = () => allData;

export const getById = id => {
  const { items } = allData;

  return items.find(item => item.id === id);
};
