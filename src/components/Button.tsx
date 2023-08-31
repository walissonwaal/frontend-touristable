import { useState } from "react";

interface ButtonProps {
  children: any;
}

export default function Button(props: ButtonProps) {
  return <button className="button btn">{props.children}</button>;
}
