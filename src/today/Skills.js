import React, { Component } from 'react'
import {connect} from 'react-redux'
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
            additionalClass = additionalClass + ' active'
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
    render() {
        const {skills} = this.props
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
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        skills: state.skills
    }
}
export default connect(mapStateToProps)(Skills)
