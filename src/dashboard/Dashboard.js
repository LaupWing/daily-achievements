import React, { Component } from 'react'
import {connect} from 'react-redux'
import Days from '../day/Days'
import Today from '../today/Today'
import {Switch, Route} from 'react-router-dom'
class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <Switch>
                    <Route exact path='/all' component={Days}/>
                    <Route exact path='/' component={Today}/>
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
