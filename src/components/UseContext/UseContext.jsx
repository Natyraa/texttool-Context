import React from 'react'
import UseCreateContext from './UseCreateContext';
import UseConsumer from './UseConsumer';
const UseContext = () => {
  return (
    <div>
       <UseCreateContext>
        <UseConsumer/>
       </UseCreateContext>
    </div>
  )
}

export default UseContext