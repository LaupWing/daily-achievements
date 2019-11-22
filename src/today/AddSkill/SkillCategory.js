import React from 'react'

function SkillCategory({today, skill}) {
    console.log(today,skill)
    return (
        <div className='skill-category'>
            <div className="categories-container">
                <select name="category" id="category">
                    {skill.categories && skill.categories.map(c=>{
                        return(
                            <option value={c}>{c}</option>
                        )
                    })}
                </select>
                <button>New category</button>
            </div>
            
            <input type="text"/>
        </div>
    )
}

export default SkillCategory
