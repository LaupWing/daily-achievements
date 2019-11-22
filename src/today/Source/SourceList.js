import React from 'react'
import arrayformatter from '../../../helpers/arrayformatter'
function SourceList({skill, today}) {
    const getTodaysSources = skill.sources.filter(arrayformatter.compareDates)
    const list = getTodaysSources ? getTodaysSources.map(tsrc=>{
        return(
            <div className="source" style={{borderColor: skill.color}}>
                <div className="info">
                    <h5>{tsrc.title}</h5>
                    <p>{tsrc.url}</p>
                </div>
                <button style={{background: skill.color}}>more</button>
            </div>
        )
    }) : null
    return (
        <div className='SourceList'>
            <h4>Source list of this skill</h4>
            <div className="buttons">
                <button>Add New +</button>
                <div className="extra">
                    <button>Today</button>
                    <button className='active'>All</button>
                </div>
            </div>
            <div className="list">
                {list}
            </div>
        </div>
    )
}

export default SourceList
