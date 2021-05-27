import { getAll } from 'database/db';

const allShirts = (req, res) => {
  const { items } = getAll();

  res.status(200).json({ items, length: items.length, message: 'Shirts retrieved' });
};

export default allShirts;
