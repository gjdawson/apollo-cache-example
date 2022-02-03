import React, {useCallback, useEffect} from "react";
import {useDragLayer, XYCoord} from "react-dnd";
import {throttle} from "throttle-debounce";
import {Position} from "../../types/window";
import {windowService} from "../../service/window";
import WindowPane from "../Window/WindowPane";

const layerStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100000,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
}

const getItemStyles = (initialOffset: XYCoord | null, currentOffset: XYCoord | null): React.CSSProperties => {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    }
  }

  let {x, y} = currentOffset

  const transform = `translate(${x}px, ${y}px)`

  return {
    transform,
    WebkitTransform: transform,
  }
}

interface I {

}

const DragLayer: React.FC<I> = () => {

  const {
    itemType,
    isDragging,
    item,
    initialOffset,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }))

  const throttledWindowPosition = useCallback(
    throttle(150, (id: string, position: Position) => {
      console.log("DRAGGING", position)
      windowService.updateWindowPosition(id, position)
    }), [item])

  useEffect(() => {
    if(!!currentOffset) {
      if(!!item) {
        throttledWindowPosition(item.id, {...item.position, ...currentOffset})
      }
    }
  }, [currentOffset, item])

  if(!isDragging) {
    return null
  }

  return <div style={layerStyles}>
    <div style={getItemStyles(initialOffset, currentOffset)}>
      <WindowPane {...item} />
    </div>
  </div>}

export default DragLayer
