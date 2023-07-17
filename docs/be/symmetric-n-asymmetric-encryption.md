# Symmetric vs. Asymmetric Encryption

### Symmetric Encryption

Symmetric Encryption is the simplest kind of encryption that involves only one secret key to cipher and decipher information. Symmetric encryption is an old and best-known technique.

Pros
- Faster: Since it’s using a single key for encryption and decryption, it’s faster to execute.
- Identity verification: It uses password authentication as a security purpose to prove the receiver’s identity.
- Easy to execute & manage: Users have only one key for encryption and decryption so it’s easy to execute and manage.
Cons
- The chances of sharing encryption keys securely are less; it is difficult and challenging to share keys in Symmetric Encryption.
- Symmetric is not that scalable, as it’s not suitable for various users.


### Asymmetric Encryption

Asymmetric encryption is also known as public key cryptography, which is a relatively new method, compared to symmetric encryption. Asymmetric encryption uses two keys to encrypt a plain text. Secret keys are exchanged over the Internet or a large network. 

A message that is encrypted using a public key can only be decrypted using a private key, while also, a message encrypted using a private key can be decrypted using a public key.


Pros
- Asymmetric Encryption has two keys, one public and one private, so there’s no problem with distributing keys.
- Again, with a pair of keys, it is not difficult to communicate with multiple parties and that’s how it is more scalable in large networks.
Cons
- Performance: Asymmetric Encryption is slower in performance compared to Symmetric Encryption.
- Hard to understand and execute: Asymmetric Encryption is not that easy to implement and manage due to its large key sizes.


### Digital Signature

The sender uses the private key to create the message's signature and the receiver uses the public key to verify the signature.

If the signature is verified, then we can say that the message we have received is accurate and has not been altered or hampered in between.