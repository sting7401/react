import React from 'react'

interface WelcomeType {
  name: string
}

const Welcome = (props : WelcomeType) => {
  return <h1>{props.name}</h1>
}

const Composition = ({...WelcomeType}) => {
  return (
    <>
      <Welcome name='name'/>
    </>
  )
}

export default Composition;