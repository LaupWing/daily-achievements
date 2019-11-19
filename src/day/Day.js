import React from 'react'
import {connect} from 'react-redux'
const Day = ({day, skills}) => {

    return (
        <div className="day"> 
            
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        skills: state.skills
    }
}

export default connect(mapStateToProps)(Day)
