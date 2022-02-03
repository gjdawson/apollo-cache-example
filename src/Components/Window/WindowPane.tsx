import React, {ForwardedRef} from "react";

interface I extends React.PropsWithChildren<any>{
  title: string
  id: string
  text: string
}

const WindowPane = ({id, title, text, ...props}: I, ref: ForwardedRef<any>) => {
  return <div
    className={"window"}
  >
    <div className={"toolbar"} ref={ref}>
      <h3 className={"title"}>{title}</h3>
    </div>
    <div className={"content"}>
      {props.children}
    </div>
  </div>
}

export default React.forwardRef<HTMLElement, React.PropsWithChildren<I>>(WindowPane)
