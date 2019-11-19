import React from 'react'
import Day from './Day'
import {connect} from 'react-redux'

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

const mapStateToProps =(state)=>{
    return{
        days: state.days
    }
}

export default connect(mapStateToProps)(Days)
