import React, {useEffect} from "react";
import {Position} from "../../types/window";
import {DragSourceMonitor, useDrag} from "react-dnd";
import {ItemTypes} from "../../types/drag";
import {getEmptyImage} from "react-dnd-html5-backend";
import WindowPane from "./WindowPane";

interface I {
  id: string
  text: string
  title: string
  position: Position
}

function getStyles(
  left: number,
  top: number,
  isDragging: boolean
): React.CSSProperties {
  let transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: "fixed",
    transform,
    WebkitTransform: transform,
    opacity: isDragging? 0 : 1,
    height: isDragging? 0 : "",
    top: 0,
    left: 0,
  }
}

const Window: React.FC<I> = ({position, id, title, text}) => {
  const [
    {isDragging},
    drag,
    preview

  ] = useDrag(() => ({
    type: ItemTypes.WINDOW,
    item: {
      position,
      id,
      title,
      text,
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  useEffect(() => {
    preview(getEmptyImage(), {captureDraggingState: true})
  }, [])
  return <div
    style={getStyles(position?.x, position?.y, isDragging)}
    role={"DraggableBox"}
  >
    <WindowPane key={`window-${id}`} id={id} title={title} ref={drag} />
    <span>pos: {JSON.stringify(position)}</span>
  </div>
}

export default Window
