import React, { Component } from 'react'
import {connect} from 'react-redux'
class Dashboard extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                
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
