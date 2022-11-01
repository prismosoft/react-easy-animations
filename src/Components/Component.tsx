import * as React from "react"
import {PropsWithChildren} from "react";
import Typer from "./Typer"
import Element from "./Element";
import {AllElementType} from "../types";

const AnimationComponent = ({children, type, ...props}: PropsWithChildren<AllElementType>) => {
  return (
      type === "typewriter"
    ? <Typer heading={props.heading} dataText={props.dataText} cursorColor={props.cursorColor} />
    : <Element type={type} {...props}>{children}</Element>
  )
}

export default AnimationComponent