import React from "react";
import {useQuery} from "@apollo/client";
import {WINDOWS} from "../../graphql/queries";
import Window from "../Window";
import DragLayer from "../DragLayer";

const Container: React.FC = () => {
  const {data: {windows} = {windows: []}, refetch} = useQuery(
    WINDOWS,
    {
      returnPartialData: true,
    }
  )
  return <>
    <div>{JSON.stringify(windows)}</div>
    <div className={"content"}>
      {windows.map((window: any) => <Window key={`window-container-${window.id}`} {...window} />)}
    </div>
    <DragLayer refetch={refetch}/>
  </>
}

export default Container
