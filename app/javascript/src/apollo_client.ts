// export default new ApolloClient({
//   uri: 'http://localhost:3000/graphql',
// });

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';
// import { withClientState } from 'apollo-link-state';


const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   // const token = localStorage.getItem('token');


//   // to login
//   // mutation {
//   //   signinUser(
//   //     email: {
//   //       email: "jstoebel@gmail.com"	
//   // 			password: "abc123"
//   //     }
//   //   ) {
//   //     token
//   //   }
//   // }

//   // CHANGE ME!
//   const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NDA1ODUzNTksImlzcyI6Imlzc3Vlcl9uYW1lIiwiYXVkIjoiY2xpZW50In0.nkmLC8Irteb2cBQ3pwtkz5Zo4tW3EHvI42Np96DdEgU'
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// const clientState = withClientState({ resolvers, defaults })

export default new ApolloClient({
  // to add other links do something like:
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache(),
});
