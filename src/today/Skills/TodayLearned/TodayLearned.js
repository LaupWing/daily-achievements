import React, {Component} from 'react'

class TodayLearned extends Component{
    state={
        opened: null
    }
    onlyUnique = (value, index, self)=> { 
        return self.indexOf(value) === index;
    }
    categoryLearned = (category)=>{
        return this.skillToday().whatHaveILearned.filter(c=>c.category === category)
    }
    corresponding = (c)=>{
        const {skill} = this.props 
        const categoryLearned = this.categoryLearned(c)
        const pEl =  categoryLearned.map(cl=>{
            return(
                <p className='learned' style={{borderColor:skill.color}}>{cl.learned}</p>
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
    handleClick = (category)=>{
        if(this.state.opened === category){
            return this.setState({
                opened: null
            })
        }
        this.setState({
            opened: category
        })
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
                <h4>Categories and what i learned</h4>
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
                            <div className={"newly-learned "  + (c === this.state.opened ? 'open' : '')}>
                                <div className="info">
                                    <h5 style={{background:skill.color}}>{c}</h5>
                                    <p style={{background:skill.color}}>Total items: {this.corresponding(c).length}</p>
                                </div>
                                <div className="learned-wrapper ">
                                    {this.corresponding(c)}
                                </div>
                                <button 
                                    onClick={()=>this.handleClick(c)} 
                                    style={{color:skill.color,borderColor:skill.color}}
                                >
                                    {this.state.opened !== c ? 'more': 'less'}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TodayLearned
