import React from 'react'

const FooterComp = ({heading,items}) => {
  return (
    <div>
    <div className='flex flex-col items-start gap-3'>
        <div className='text-[#C5C7D4]'>{heading}</div>
        {
        items.map((item,index)=>{
            return <div key={index}>{item}</div>
        })
        }
    </div>
    </div>
  )
}

export default FooterComp