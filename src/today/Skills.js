import React, { Component } from 'react'
import {connect} from 'react-redux'
// import SkillCategory from './SkillCategory'
import TodayLearned from './TodayLearned'

export class Skills extends Component {
    state={
        skillsToday:['Photoshop'],
        skillActive: null
    }
    additionalClasses=({title})=>{
        const skillIncludes = this.state.skillsToday.includes(title) 
        let additionalClass = null
        if(skillIncludes){
            additionalClass = 'doneToday'
        }
        if(this.state.skillActive === title){
            additionalClass = additionalClass===null? additionalClass = 'active' : additionalClass + ' active'
        }
        return additionalClass ? additionalClass : ''
    }
    handleClick=({title})=>{
        this.setState({
            skillActive: title
        },()=>{
            console.log(this.state)
        })
    }
    compareDates = (day)=>{
        const date1 = new Date(day.date)
        const date2 = new Date()
        return date1.toString().slice(0,15) === date2.toString().slice(0,15)
    }
    render() {
        const {skills, days} = this.props
        return (
            <div className='skills'>
                <h3>Today i learned from the skill(s):</h3>
                <div className="skills-container">
                    {skills && skills.map(skill=>{
                        return(
                            <div onClick={()=>this.handleClick(skill)} className={"skill "+this.additionalClasses(skill)}>
                                <h3 style={{background:skill.color}}>{skill.title.slice(0,2)}</h3>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
                {this.state.skillActive&&                
                    <TodayLearned 
                        today={days.find(this.compareDates)} 
                        skill={skills.find(sk=>sk.title===this.state.skillActive)}
                    />
                }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        skills: state.skills,
        days: state.days
    }
}
export default connect(mapStateToProps)(Skills)
