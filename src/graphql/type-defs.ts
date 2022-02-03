import {gql} from "@apollo/client";

export const typeDefs = gql`
  type WindowPosition {
      x: Float
      y: Float
  }

  extend type Window {
      position: WindowPosition
  }

  extend type Query {
      windowStack: [String]
  }
`
