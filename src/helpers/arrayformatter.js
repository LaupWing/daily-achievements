const compareDates = (day)=>{
    const date1 = new Date(day.date)
    const date2 = new Date()
    return date1.toString().slice(0,15) === date2.toString().slice(0,15)
}

export default {
    compareDates
}