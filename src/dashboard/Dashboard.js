import React, { Component } from 'react'
import {connect} from 'react-redux'
import Days from '../day/Days'
import {Switch, Route} from 'react-router-dom'
class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <Switch>
                    <Route exact path='/' component={Days}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        days: state.days
    }
}

export default connect(mapStateToProps)(Dashboard)
