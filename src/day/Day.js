import React from 'react'
import {connect} from 'react-redux'
const Day = ({day, skills}) => {
    
    const skillColors = skills.filter(skill=>{
        return day.learned.some(l=>l.skill === skill.title)
    })
    const calcWidth = ()=>{
       return 100/skillColors.length +'%' 
    }
    const setStyle = (sc)=>{
        return{
            background: sc.color,
            width: calcWidth()
        }
    }
    return (
        <div className="day"> 
            <div className="skill-indicator">
                {skillColors && skillColors.map(sc=>{
                    return(
                        <div className="skill-color" style={setStyle(sc)}></div>
                    )
                })}
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
