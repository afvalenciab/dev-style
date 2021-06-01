import { getById } from 'database/db';

const handler = (req, res) => {
  const { id } = req.query;

  res.status(200).json({ item: getById(id), message: 'Shirt retrieved' });
};

export default handler;
