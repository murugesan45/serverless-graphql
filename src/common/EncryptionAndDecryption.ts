

import * as crypto from "crypto-browserify";

export class EncryptionAndDecryption
{
 algorithm = 'aes-256-cbc';
 key = crypto.randomBytes(32);
 iv = "TheEncryptionKey";
 
 encrypt(text) {
 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(this.key), this.iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return encrypted.toString('hex');
}

 decrypt(text) {
 let encryptedText = Buffer.from(text, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(this.key), this.iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}
}
