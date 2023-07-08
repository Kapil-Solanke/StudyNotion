import React from 'react'


const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    <section>
        <div className='mt-5'>
            <div className='flex max-[400px]:flex-col border-b-2 bg-richblack-800 border-b-richblack-700 justify-center items-center py-20 px-32 gap-10'>
                {
                    Stats.map( (data, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-center items-center gap-3'>
                                <div className='font-bold text-3xl text-center'>
                                    {data.count}
                                </div>
                                <div className=' text-richblack-500 text-base text-center'>
                                    {data.label}
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent
