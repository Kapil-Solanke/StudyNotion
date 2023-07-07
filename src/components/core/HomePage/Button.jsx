import React from 'react'
import { Link } from 'react-router-dom'   
const Button = ({children,active,linkto}) => {
  return (
    <div>
        <Link to={linkto}>
        <div className={`${active?"bg-yellow-50 text-black shadow-[#FFFFFF]":"bg-richblack-800 text-white shadow-[#FFFFFF82]"} flex  items-center py-3 px-4 text-lg rounded-lg shadow-[inset_-2px_-2px_0px] transition-all duration-200 hover:scale-95 w-fit `}>
              {children}    
        </div>
        </Link>
    </div>
  )
}
export default Button;