import React from 'react'
import CTAButton from '../HomePage/Button'
import {FaArrowRight} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import BgGradient from './BgGradient'
const CodeBlocks = ({
    position,heading,subheading,ctabtn1,ctabtn2,codeblock,backgroundGradient,codeColor
}) => {
  return (
    <div className={`flex flex-row max-md:flex-wrap w-full ${position} my-20 justify-between gap-2`}>
        {/* section 1 */}
        <div className='flex flex-col items-start max-md:w-screen p-2 w-1/2 gap-4'>
                {heading}
            <div className=' font-inter font-medium self-stretch text-base text-richblack-300 '>
                {subheading}
            </div>
            <div className='flex gap-6'>
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className='flex gap-2 items-center'>   
                    {ctabtn1.text}
                    <FaArrowRight></FaArrowRight>
                    </div>
                </CTAButton>
                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                    {ctabtn2.text}
                </CTAButton>
            </div>
        </div>
        {/* section 2 */}
        <div className='relative flex flex-col w-[100%] p-4 gap-1 lg:w-[600px] '>
            {/* bg gradient */}
            <BgGradient bgGradient={backgroundGradient} opcty={'opacity-30'}/>
        <div className=' text-xl flex flex-row  p-2 bg-gradient-to-br from-[#413d3d82] to-[#111E3261]  '>
            <div className='text center px-2 flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
            </div>
            <div className={`${codeColor} pr-2  flex flex-col gap-2 w-[90%] text-richblack-400 font-mono  font-bold`}>
            <TypeAnimation
                sequence={[codeblock,100,'']}
                repeat={Infinity}
                cursor={true}
                omitDeletionAnimation={true}
                style={
                    {
                        whiteSpace:'pre-line',
                        display: 'block',
                        color:{codeColor}
                    }
                }
            />
            </div>
        </div>
        </div>
    </div>
  )
}

export default CodeBlocks