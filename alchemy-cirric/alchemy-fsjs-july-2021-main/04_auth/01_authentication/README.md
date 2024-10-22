# Authentication

> Authentication is the act of proving an assertion, such as the identity of a computer system user.

## Storing Credentials

Generally, the data that we've been storing in our databases up until now hasn't been particularly sensitive.
However, when we're storing sensitive information like passwords, we want to make sure they're not visible
to anyone that may have access to our database — including us!

There are a different ways to obscure sensitive data. Two primary ways are through **encryption** and **hashing**

### Encryption

Encryption is the process of taking a piece of data (like a text message) and scrambling it into something unreadable (called a "ciphertext"). As such, encryption maintains security & confidentiality when sending messages between a sender and a receiver.
In order for the receiver to decrypt the message, they have to have the "secret key" that was used to encrypt the message.
A secret key is a series of characters & numbers that's used in the encryption/decryption process.

Encryption is **reversible**.

![Encryption visualized](https://images.ctfassets.net/slt3lc6tev37/4zLJngHjth92rb9VUrclZr/ec5b406b06e1fbee7dc0d5950789ce76/encryption-example.svg)
[Source](https://www.cloudflare.com/learning/ssl/what-is-encryption/)

### Hashing

Like encryption, hashing takes a piece of data (like a password) and scrambles it into something unreadable. However, the result is always the same length of characters, regardless of the size of the input data.
The result cannot be "un-hashed", meaning that hashing is a one-way operation. We use hashing when working with passwords as it ensures privacy and security.
Generally, when we hash passwords, we also add a string of characters to the passwords before we run them through our hashing function. That string is called a "salt".
We use salting to add an additional layer of security to the process, which can help mitigate brute force attacks. A brute force attack is when someone (using their computer or a botnet of computers) attempts to guess a password using every combination of characters when they have access to a hash value.

Hashing is **irreversible**.

## JSON Web Tokens (JWT)

JSON Web Token is a way to transmit data between two parties. It contains a header, payload, and signature. In terms of authentication & authorization, we can use a JWT as a way to tell our server that a user's identity has been verified by us. That's because the signature can only be generated using a secret key that the server has access to. And since the signature requires both the header and payload to be generated, this means that the contents of the payload can't be modified without invalidating the signature.

You can think of a JWT like a key card that we've provided the user so they can get access to protected/private areas.

[Introduction to JSON Web Tokens](https://jwt.io/introduction)

## Authenticating

When we build a username & password authentication system for our applications, what we're essentially doing is building the following:

- Users can be created in our database (e.g. through a registration form)
  - Their passwords are salted & hashed before being stored
- Users can log in to our service by submitting a username and password
  - Our app then sees if a user exists with the given username, and if so:
    - Takes the password they submitted, hashes it, then compares it against the hashed password we have in the database
  - If the username & hashed password match, then we store a cookie in the form of a JSON Web Token (JWT) on the server that has their user ID
  - We send that JWT back to the user in the login response, which they can use on subsequent requests to prove that their identity has already been validated.
