import React, { Component } from 'react'

class Today extends Component {
    dateInString(){
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const date = new Date()
        return `${days[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]}`
    }
    render() {
        return (
            <div className="Today">
                <h2>{this.dateInString()}</h2>
            </div>
        )
    }
}

export default Today
