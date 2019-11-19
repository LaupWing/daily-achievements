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
                {skillColors && skillColors.map((sc,index)=>{
                    return(
                        <div className="skill-color" style={setStyle(sc)} key={index}></div>
                    )
                })}
            </div>
            <div className="day-overview">
                {day.cons && day.cons.map((con,index)=>{
                    return(
                        <li className="con" key={index}>{con}</li>
                    )
                })}
                {day.pros && day.pros.map((pro,index)=>{
                    return(
                        <li className="pro" key={index}>{pro}</li>
                    )
                })}
            </div>
            <h2>{day.date}</h2>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        skills: state.skills
    }
}

export default connect(mapStateToProps)(Day)
