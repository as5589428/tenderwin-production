// utils/tokenHelper.js

let cachedToken = null;  
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

export const generateToken = async () => {
  if (cachedToken) {
    console.log('Using cached token');
    return cachedToken;   
  }

 
  try {
    const response = await fetch(`${apiUrl}/generate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ client_id: clientId , client_secret : secretKey }),  
    });

    if (!response.ok) {
      throw new Error('Failed to fetch token');
    }

    const responseData = await response.json(); 
    const data = responseData.data;  
    const cachedToken = data.token; 
    return cachedToken;
  } catch (error) {
    console.error('Error generating token:', error);
    throw error;  
  }
};
