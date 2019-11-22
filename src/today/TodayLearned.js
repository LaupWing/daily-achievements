import React, {Component} from 'react'

class TodayLearned extends Component{
    onlyUnique = (value, index, self)=> { 
        return self.indexOf(value) === index;
    }
    
    corresponding = (c)=>{
        const {skill} = this.props 
        const categoryLearned = this.skillToday().whatHaveILearned.filter(c2=>c2.category === c)
        const pEl =  categoryLearned.map(cl=>{
            return(
                <p style={{borderColor:skill.color}}>{cl.learned}</p>
                )
            })
            return pEl
        }
    skillToday = ()=>{
        const {today} = this.props 
        const {skill} = this.props
        return today.learned
           .find(l=>l.skill === skill.title)
    }

    categories = ()=>{
        return this.skillToday().whatHaveILearned
            .map(whi=>whi.category)
            .filter(this.onlyUnique)
    } 
    render(){
        const {skill} = this.props
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
                    {this.categories() && this.categories().map(c=>{
                        return(
                            <div className="newly-learned">
                                <h5 style={{background:skill.color}}>{c}</h5>
                                <div className="learned-wrapper">
                                    {this.corresponding(c)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TodayLearned
