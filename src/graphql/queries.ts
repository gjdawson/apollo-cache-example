import {gql} from "@apollo/client";

export const WINDOW_POSITION_FRAGMENT = gql`
  fragment WindowPosition on Window {
    position @client {
      x y
    }
  }
`

export const WINDOWS = gql`
  ${WINDOW_POSITION_FRAGMENT}
  query windows {
      windowStack @client
      windows {
          id
          title
          ...WindowPosition
      }
  }
`

export const ONE_WINDOW = gql`
  ${WINDOW_POSITION_FRAGMENT}
  query window($id: String) {
    windows(id: $id) {
      id
      title
      ...WindowPosition
    }
  }
`

export const UPDATE_WINDOW_TEXT = gql`
  fragment UpdateWindowText on Window {
    text
  }
`
