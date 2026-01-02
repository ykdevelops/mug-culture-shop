const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { items } = req.body || {};
      if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: { message: 'No items provided.' } });
      }

      const origin = req.headers.origin;
      const line_items = items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: item.thumbnail ? [item.thumbnail] : undefined,
          },
          unit_amount: item.unit_amount,
        },
        quantity: item.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${origin}/?success=true`,
        cancel_url: `${origin}/cart`,
        automatic_tax: { enabled: true },
      });

      return res.status(200).json({ sessionId: session.id });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
