import React from 'react'

const BgGradient = ({bgGradient,opcty=0}) => {
  return (
        <div className={`absolute h-[70%] w-[70%] ${bgGradient}  ${opcty}  rounded-t-[300px] rounded-b-[400px] blur-3xl`}></div>
  )
}

export default BgGradient