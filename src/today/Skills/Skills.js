import React, { Component } from 'react'
import {connect} from 'react-redux'
// import SkillCategory from './SkillCategory'
import TodayLearned from './TodayLearned/TodayLearned'
import SourceList from './Source/SourceList'
import arrayformatter from '../../helpers/arrayformatter'
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
        })
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
                <div className="content">
                    {this.state.skillActive&&                
                        <TodayLearned 
                            today={days.find(arrayformatter.compareDates)} 
                            skill={skills.find(sk=>sk.title===this.state.skillActive)}
                        />
                    }
                    {this.state.skillActive&&                
                        <SourceList 
                            today={days.find(arrayformatter.compareDates)} 
                            skill={skills.find(sk=>sk.title===this.state.skillActive)}
                        />
                    }
                </div>
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
