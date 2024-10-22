# OAuth

OAuth is a standard that provides a way for other services to authenticate our users.
You may have seen this before with websites that allow you to "Sign in with GitHub/Apple/Google".
In this way, our server doesn't have to handle passwords or authentication.

In fact, when we use OAuth, we never actually get access to the user's password.

So how do we know they're legit? Let's take a look at the authentication flow to find out.

## Authentication Flow

Let's say we have an app that allows users to sign in using their GitHub account. First, we setup our app to support [authorization with GitHub](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps).

When a user clicks "Sign In with GitHub", the following takes place:

1. Our application will send an authorization request to GitHub.
1. GitHub will then ask the user if they wish to authorize our app to access their username (and any other permissions we might've requested).
1. If the user grants access, the GitHub will redirect them back to our app to a specific route that we provided when we setup the OAuth integration. This URL is commonly called the "Callback URL".
   - The URL will also contain an authorization code provided by GitHub as a query parameter.
1. Our app will then take that authorization code and send it to GitHub in exchange for an access token.
1. GitHub will respond with that access token, which we can then use to access additional information about the user from GitHub's APIs.
