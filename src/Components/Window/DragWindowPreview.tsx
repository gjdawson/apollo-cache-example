import React, {useState} from "react";
import WindowPane from "./WindowPane";
import {useQuery} from "@apollo/client";
import {ONE_WINDOW} from "../../graphql/queries";

interface I {
  id: string
}

const DragWindowPreview: React.FC<I> = ({id}) => {

  // return <WindowPane title={title} id={id} />
  return <></>
}

export default DragWindowPreview
