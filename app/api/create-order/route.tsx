import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { amount, currency, receipt } = await request.json();

  // Ensure that the environment variables are defined
  const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
  const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!razorpayKeyId || !razorpayKeySecret) {
    // If either key is missing, return an error response
    return NextResponse.json(
      { error: 'Missing Razorpay API credentials' },
      { status: 500 }
    );
  }

  try {
    const razorpay = new Razorpay({
      key_id: razorpayKeyId,  // Your Razorpay Key ID
      key_secret: razorpayKeySecret,  // Your Razorpay Key Secret
    });

    const options = {
      amount: amount * 100,  // Convert to paise (Razorpay uses paise, not rupees)
      currency: currency,
      receipt: receipt,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ id: order.id });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json({ error: 'Error creating Razorpay order' }, { status: 500 });
  }
}
