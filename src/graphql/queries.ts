import {gql} from "@apollo/client";

export const WINDOWS = gql`
  query windows {
      windowStack @client
      windows {
          id
          title
          position @client {
            x y
          }
      }
  }
`

export const ONE_WINDOW = gql`
  query window($id: String) {
    windows(id: $id) {
      id
      title
      position @client {
        x y
      }

    }
  }
`

export const SET_WINDOW_POSITION_FRAGMENT = gql`
  fragment SetWindowPosition on Window {
    position @client {
      x y
    }
  }
`

export const UPDATE_WINDOW_TEXT = gql`
  fragment UpdateWindowText on Window {
    text
  }
`
