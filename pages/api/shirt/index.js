import { getAll } from 'database/db';

const allShirts = (req, res) => {
  const { data } = getAll();

  res.status(200).json({ data, length: data.length, message: 'Shirts retrieved' });
};

export default allShirts;
