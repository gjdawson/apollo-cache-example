import {ApolloServer, gql} from "apollo-server";
import {Resolvers} from "@apollo/client";

interface Window {
  id: string
  title: string
  text?: string
}

const windows: Window[] = [
  {id: "dcb6d024-1366-4c44-a7c2-292ccadea238", title: "A Smart Window", text: "I already have text"},
  {id: "d3916cb5-7f37-4a89-84cd-0643cc18528f", title: "Second Window"},
  {id: "e7abf80c-07a7-4ce0-af8b-de3bb2e8799a", title: "Another Window"},
  {id: "6dbc8556-af65-4356-947b-b800246bcf17", title: "Long Cat"},
]

const typeDefs = gql`
  type Window {
      id: ID
      title: String
      text: String
  }

  type Query {
      windows(id: String): [Window]
  }
`
const resolvers: Resolvers = {
  Query: {
    windows: (parent, args, context, info): any[] => {
      console.log(args)
      if(!!args.id) {
        const win = windows.find((w) => w.id === args.id)
        if(!!win) {
          return [{text: "", ...win}]
        }
        return []
      } else {
        return windows
      }
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
  .then(({url}) => {
    console.log("STARTED", url)
  })
