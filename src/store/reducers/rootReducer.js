import {combineReducers} from 'redux'
import daysReducer from './daysReducer'
import skillsReducer from './skillsReducer'

const rootReducer = combineReducers({
    days: daysReducer,
    skills: skillsReducer
})

export default rootReducer 