import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'


export interface State {

}

const appReducer = combineReducers({
    form: formReducer
})

export default appReducer
