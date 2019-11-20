import React, { Component } from 'react'
import {connect} from 'react-redux'
export class Skills extends Component {
    render() {
        const {skills} = this.props
        return (
            <div className='skills'>
                <h3>Today i learned from the skill(s):</h3>
                <div className="skills-container">
                    {skills && skills.map(skill=>{
                        return(
                            <div className="skill">
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
