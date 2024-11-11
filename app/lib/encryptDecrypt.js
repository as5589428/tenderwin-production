import crypto from 'crypto-browserify';

// Encryption settings
const ivLength = 16; // AES requires an IV length of 16 bytes
const encryptionKey = 'B374A26A71490437AA024E4FADD5B497FDFF1A8EA6FF12F6'; // 48-byte key to be hashed

// Encrypt function
export function encrypt_id_fn(id) {
  try {
    const { Buffer } = require('buffer');

    // Hash the encryption key to ensure it's 32 bytes (256 bits) for AES-256
    const hashedKey = crypto.createHash('sha256').update(encryptionKey).digest();

    const iv = crypto.randomBytes(ivLength); // Generate a random IV (Initialization Vector)
    const cipher = crypto.createCipheriv('aes-256-cbc', hashedKey, iv);

    let encrypted = cipher.update(id.toString(), 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Return the IV and encrypted text, then replace characters to make it URL-safe
    const encrypted_id = `${iv.toString('hex')}${encrypted}`;
    return encrypted_id.replace(/\+/g, '.').replace(/=/g, '-').replace(/\//g, '~');
  } catch (err) {
    console.error('Encryption failed:', err);
    return '';
  }
}

// Decrypt function
export function decrypt_id_fn(encryptedID) {
  try {
    const { Buffer } = require('buffer');

    // Convert back from URL-safe format
    encryptedID = encryptedID.replace(/\./g, '+').replace(/-/g, '=').replace(/~/g, '/');

    // Extract IV and encrypted text from the combined string
    const ivHex = encryptedID.slice(0, 32); // First 16 bytes (32 hex characters) are the IV
    const encryptedText = encryptedID.slice(32);

    const iv = Buffer.from(ivHex, 'hex');
    const hashedKey = crypto.createHash('sha256').update(encryptionKey).digest(); // Ensure AES-256

    const decipher = crypto.createDecipheriv('aes-256-cbc', hashedKey, iv);

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  } catch (err) {
    console.error('Decryption failed:', err);
    return '';
  }
}
