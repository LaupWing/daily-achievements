import React from 'react'

function TodayLearned({today, skill}) {
    console.log(today, skill)
    const onlyUnique = (value, index, self)=> { 
        return self.indexOf(value) === index;
    }
    const skillToday = today.learned
        .find(l=>l.skill === skill.title)
    const categories = skillToday.whatHaveILearned
        .map(whi=>whi.category)
        .filter(onlyUnique)
    console.log(skillToday)
    return (
        <div className='today-learned'>
            {categories && categories.map(c=>{
                return(
                    <div className="newly-learned">
                        <h4 style={{background:skill.color}}>{c}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default TodayLearned
