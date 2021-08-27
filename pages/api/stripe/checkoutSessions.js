import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { product, selectedSize } = req.body;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: { allowed_countries: ['CO', 'MX'] },
        line_items: [
          {
            price_data: {
              currency: 'mxn',
              product_data: {
                name: `${product.category} ${product.name}`,
                description: `Talla ${selectedSize}`,
                images: [`https://dev-style.vercel.app${product.image}`],
              },
              unit_amount: product.price,
            },
            adjustable_quantity: {
              enabled: true,
              maximum: 10,
              minimum: 0,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        locale: 'es-419',
        success_url: `${req.headers.origin}/?success=true&sessionId={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/product/${product.id}`,
      });

      res.status(500).json(session);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status.end('Method Not Allowed');
  }
}
