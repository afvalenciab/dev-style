import { withSentry } from '@sentry/nextjs';
import * as Sentry from '@sentry/nextjs';
import { getById } from 'database/db';

const handler = (req, res) => {
  try {
    const { id } = req.query;

    res.status(200).json({ item: getById(id), message: 'Shirt retrieved' });
  } catch (error) {
    Sentry.captureException(error);
  }
};

export default withSentry(handler);
