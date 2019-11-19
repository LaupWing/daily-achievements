import React from 'react'
import {connect} from 'react-redux'
const Day = ({day, skills}) => {
    console.log(day,skills)
    const skillColors = skills.filter(skill=>{
        return day.learned.some(l=>l.skill === skill.title)
    })
    console.log(skillColors)
    return (
        <div className="day"> 
            <div className="skill-indicator">

            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        skills: state.skills
    }
}

export default connect(mapStateToProps)(Day)
