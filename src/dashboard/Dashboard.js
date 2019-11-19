import React, { Component } from 'react'
import {connect} from 'react-redux'
import Days from '../day/Days'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
class Dashboard extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="Dashboard">
                    <Switch>
                        <Route exact path='/' component={Days}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        days: state.days
    }
}

export default connect(mapStateToProps)(Dashboard)
