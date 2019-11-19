import React, { Component } from 'react'
import {connect} from 'react-redux'
import Days from '../day/Days'

class Dashboard extends Component {
    render() {
        const {days} = this.props
        return (
            <div>
                <Days days={days}/>
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
