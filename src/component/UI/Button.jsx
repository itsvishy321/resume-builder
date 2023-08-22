import React from 'react'

export const Button = (props) => {
  return (
    <button class="my-btn" onClick={props.onClick}>{props.text}</button>
  )
}
