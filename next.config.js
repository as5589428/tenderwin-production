/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://13.233.223.205:5000/api',
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID || 'rzp_test_L8m42RzjwBXoft',
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || 'bqSPsCEajwuwWtP9i7N99M85',
    ENCRYPTION_KEY: 'b71fa3946ac5ab82b3e6a57be70cd504f3829e02fe4180a56f86cbf531f07e97',
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID || 'uoxFs4U4BgL7ZubtN/oFMggXgmz2W0YwNHBCfhxZ+hSB96Hkd3QN7KEl8J7YAW5hZQFeLA6tnT',
    NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY || '8FZ6C1dunN66sAhZwpbgwRZFpbFnIq4Y1aEcCuGPhJhWc10bTpR91i+pT68IGZpr2ylbL1z5CoRlZy',
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  },
  output: 'export', // Add this line to enable static export
};

module.exports = nextConfig;
