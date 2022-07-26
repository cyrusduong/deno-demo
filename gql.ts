// Ok show me something more serious - How about something with middleware.
import { Server } from "https://deno.land/std@0.148.0/http/server.ts";
import { makeExecutableSchema } from "https://deno.land/x/graphql_tools@0.0.2/mod.ts";
import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

// Arweave - permaweb - long live the web
import { GraphQLHTTP } from "https://x.nest.land/gql@1.1.2/mod.ts";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = { Query: { hello: () => `Hello World!` } };

const s = new Server({
  handler: async (req) => {
    const { pathname } = new URL(req.url);

    return pathname === "/graphql"
      ? await GraphQLHTTP<Request>({
        schema: makeExecutableSchema({ resolvers, typeDefs }),
        graphiql: true,
      })(req)
      : new Response("Not Found", { status: 404 });
  },
  port: 3000,
});

s.listenAndServe();
