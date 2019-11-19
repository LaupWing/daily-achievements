import React from 'react'
import Day from './Day'
const Days = ({days}) => {
    return (
        <div className="days">
            {days && days.map((day,index)=>{
                return(
                    <Day key={index} day={day}/>
                )
            })}
        </div>
    )
}

export default Days
