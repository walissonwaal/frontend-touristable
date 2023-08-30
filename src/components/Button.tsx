import { useState } from 'react';

interface ButtonProps {
  children: any
  disable?: boolean
  enable?: boolean
}

export default function Button(props: ButtonProps) {

  return (
    props.enable ? (
      <button className="button">{props.children}</button>
      ):(
        <button className="button-disable cursor-default">{props.children}</button>
    )
  );
}