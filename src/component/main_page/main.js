// import React from 'react'
import { useState } from 'react';

function counter () {
const [count,setcount ] = useState(0)

  return (
    <div>
      <button onClick={count+1} > count is {count} </button>
    </div>
  )
}

export default counter;
