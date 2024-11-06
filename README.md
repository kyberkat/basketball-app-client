# Basketball App NextJS Client


# Quick Start

1. Configure environmental variables.

NEXT_PUBLIC_TEST_ACCOUNT is set to true by default, clicking on login button gives access to protected pages. 

Set to false to toggle sessions and auth testing. Auth is set to STRAPI default auth endpoint.

API_token and NEXT_PUBLIC_API_TOKEN should be empty unless testing integration between api and client via an API token.

PORT set to 3001

2. Run

```sh
next dev
```

# App

An example of the client can be seen here:

# What's next?

UI/UX reponsive improvements such as enclosing elements in suspense tags

improve time til first byte

scaling considerations: load balancing