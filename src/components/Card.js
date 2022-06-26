import React from 'react'

export default function Card(props) {
  return (
    <div id="card">
        
        <div id="title">{props.title}</div>
        <div id='subtitle'>{props.subtitle}</div>
        <div id='details'>{props.details}</div>

    </div>
  )
}
