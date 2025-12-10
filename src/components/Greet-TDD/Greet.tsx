import React from 'react'

type props = {
  name?: string
}

export const Greet = ({ name }: props) => {
  return <div>Greetings {name}</div>
}
