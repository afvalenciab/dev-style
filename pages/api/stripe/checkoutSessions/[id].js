import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    const { id } = req.query;

    const session = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
