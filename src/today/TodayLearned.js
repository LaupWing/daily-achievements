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
        <div className='today-learned'>
            <h2>Categories and what i have learned today</h2>
            {categories && categories.map(c=>{
                return(
                    <div className="newly-learned">
                        <h4 style={{background:skill.color}}>{c}</h4>
                        {corresponding(c)}
                    </div>
                )
            })}
        </div>
    )
}

export default TodayLearned
