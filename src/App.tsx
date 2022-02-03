import React from "react";
import {ApolloProvider} from "@apollo/client";
import "./index.scss"
import {client} from "./graphql/client";
import Container from "./Components/Container";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <DndProvider backend={HTML5Backend}>
      <Container />
      </DndProvider>
    </ApolloProvider>
  )
}
