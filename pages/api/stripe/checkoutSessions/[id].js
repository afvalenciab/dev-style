import { withSentry } from '@sentry/nextjs';
import * as Sentry from '@sentry/nextjs';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function handler(req, res) {
  try {
    const { id } = req.query;

    const session = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json(session);
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}

export default withSentry(handler);
