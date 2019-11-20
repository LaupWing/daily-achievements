import React from 'react'

function TodayLearned({today, skill}) {
    // console.log(today, skill)
    const onlyUnique = (value, index, self)=> { 
        return self.indexOf(value) === index;
    }
    const skillToday = today.learned
        .find(l=>l.skill === skill.title)

    const categories = skillToday.whatHaveILearned
        .map(whi=>whi.category)
        .filter(onlyUnique)
        
    const corresponding = (c)=>{
        const categoryLearned = skillToday.whatHaveILearned.filter(c2=>c2.category === c)
        const pEl =  categoryLearned.map(cl=>{
                return(
                    <p style={{borderColor:skill.color}}>{cl.learned}</p>
                )
            })
        return pEl
    }

    return (
        <div className='Today-learned'>
            <h4>Categories and what i have learned today </h4>
            <div className="buttons">
                <button>Add New +</button>
                <div className="extra">
                    <button>Today</button>
                    <button className='active'>All</button>
                </div>
            </div>
            <div className="newly-learned-container">
                {categories && categories.map(c=>{
                    return(
                        <div className="newly-learned">
                            <h5 style={{background:skill.color}}>{c}</h5>
                            {corresponding(c)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodayLearned
