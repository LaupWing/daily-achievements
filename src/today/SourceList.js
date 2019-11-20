import React from 'react'

function SourceList({skill, today}) {
    console.log(skill,today)
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
        </div>
    )
}

export default SourceList
