import React from 'react'

export const Button = (props) => {
  return (
    <button class={`my-btn ${props.className}`} onClick={props.onClick}>{props.children}</button>
  )
}
