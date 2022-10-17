import React from 'react'

export default function Fourth({name,title}) {
function clickMe(){
alert("Welcome")
}

  return (
    <div>
      {name} {title}<br/>
      <button onClick={()=>clickMe()}>Touch me</button>
    </div>
  )
}
