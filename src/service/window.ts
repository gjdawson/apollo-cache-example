import {Position} from "../types/window";
import {client} from "../graphql/client";
import {UPDATE_WINDOW_TEXT, WINDOW_POSITION_FRAGMENT} from "../graphql/queries";

class WindowService {


  /**
   * Update a window position. Updating this will update the local fields in the Graph, and consequently
   * update every component relying on those fields in a query.
   * @param id
   * @param position
   */
  public updateWindowPosition(id: string, position: Position) {
    let {x,y} = position
    if(y < 0) y = 0
    if(x < 0) x = 0

    client.writeFragment({
      id: `Window:${id}`,
      fragment: WINDOW_POSITION_FRAGMENT,
      data: {
        // __typename: "Window",
        position: {
          x, y
        }
      }
    })
  }

  /**
   * Bring a window to the front by updating a reactive var.
   * @param id
   */
  public bringToFront(id: string) {

  }

  /**
   * Alters a remote field in the local cache. Ephemeral local updates of this nature
   * unify state management with the graph. The altered data can be extracted from
   * the local state and used to update the server.
   * This is one way of handling temporary state.
   * @param id
   * @param localText
   */

  public updateWindowText(id: string, localText: string) {
    client.writeFragment({
      id: `Window:${id}`,
      fragment: UPDATE_WINDOW_TEXT,
      data: {
        localText,
      }
    })
  }

}

const windowService = new WindowService()

export {windowService}
