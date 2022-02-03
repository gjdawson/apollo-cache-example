import {History, createMemoryHistory, createBrowserHistory} from "history";

export default (url: string = '/'): History => {
  return createBrowserHistory()
}
