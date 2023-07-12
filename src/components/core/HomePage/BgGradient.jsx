import React from 'react'

const BgGradient = ({bgGradient,opcty=0}) => {
  return (
        <div className={`absolute sm:h-[70%] sm:w-[70%] max-sm:w-[80%] max-sm:h-[80%] ${bgGradient}  ${opcty}  rounded-t-[300px] rounded-b-[400px] blur-3xl`}></div>
  )
}

export default BgGradient