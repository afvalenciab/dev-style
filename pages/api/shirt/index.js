import { withSentry } from '@sentry/nextjs';
import * as Sentry from '@sentry/nextjs';
import { getAll } from 'database/db';

const allShirts = (req, res) => {
  try {
    const { items } = getAll();

    res.status(200).json({ items, length: items.length, message: 'Shirts retrieved' });
  } catch (error) {
    Sentry.captureException(error);
  }
};

export default withSentry(allShirts);
