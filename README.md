# GraphQL-

##  recources
-  [graphQL intro](https://www.youtube.com/watch?v=eIQh02xuVw4)
-  [graphQL documentation](https://graphql.org/)

## What is GraphQL?
1. It's a way for apps to talk to a server and ask for exactly the data they need.
2. You get just the data you need, so the app runs faster.
3. The server gives you only what you asked for, no more, no less.
4. Single Endpoint: GraphQL has one endpoint for all requests, like /graphql unlike rest which uses different urls for different request like GET,POST,PUT,DELETE etc
5. GraphQL uses a schema that defines what data can be queried and how it's structured.
6. Request and Response:

- The client sends a query describing the exact data needed.
- Server responds with only that data.
Example:
Query (asking for user name and email):
  

```{
  user(id: 1) {
    name
    email
  }
}
```

Response:
```
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```


- REST: Multiple endpoints for different resources. Responses often contain unnecessary data.
- GraphQL: Single endpoint. The client specifies what it needs in a query, and the server sends exactly that.




# AEM and GraphQL
1. Install and set AEM cloud
2. Make content fragment
3. Use GraphQL to retrieve data from content fragment
4. Use this tutorial (https://youtu.be/l9AIjvL_n8A?feature=shared)

