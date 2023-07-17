# HTTP vs HTTPS

HTTPS is HTTP with encryption and verification. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses, and to digitally sign those requests and responses. 

### What is HTTP?

HTTP stands for Hypertext Transfer Protocol, and it is a protocol – or a prescribed order and syntax for presenting information – used for transferring data over a network. Most information that is sent over the Internet, including website content and API calls, uses the HTTP protocol. There are two main kinds of HTTP messages: requests and responses.

In the OSI model (see What is the OSI model?), HTTP is a layer 7 protocol.

### What is HTTPS?

The S in HTTPS stands for "secure." HTTPS uses TLS (or SSL) to encrypt HTTP requests and responses, so in the example above, instead of the text, an attacker would see a bunch of seemingly random characters.



### In HTTPS, how does TLS/SSL encrypt HTTP requests and responses?

TLS uses a technology called public key cryptography: there are two keys, a public key and a private key, and the public key is shared with client devices via the server's SSL certificate. When a client opens a connection with a server, the two devices use the public and private key to agree on new keys, called session keys, to encrypt further communications between them.

All HTTP requests and responses are then encrypted with these session keys, so that anyone who intercepts communications can only see a random string of characters, not the plaintext.


### Where Can I Get an SSL Certificate?

SSL certificates are verified and issued by a Certificate Authority (CA). You apply by generating a CSR with a key pair on your server that would, ideally, hold the SSL certificate. The CSR contains crucial organization details which the CA verifies.

1. Generate a CSR and key pair locally on your server. The key pair consists of a public and private key.
2. Send the CSR and public key to a CA who will verify your legal identity and whether you own and control the domain submitted in the application. The Certificate Authority runs a check on your organization and validates if the organization is registered at the location provided in the CSR and whether the domain exists.
3. When verified, the organization receives a copy of their SSL certificate including business details as well as the public key. The organization can now install the certificate on their server.
4. When a CA issues the certificate, it binds to a certificate authority's "trusted root" certificate. Root certificates are embedded into each browser and connected to individually issued certificates to establish an HTTPS connection.