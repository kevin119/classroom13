/**
 * Created by lenovo on 2018/9/21.
 */
import {fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    focused:false
})

export default (state = defaultState,action) => {
    switch (action.type){
        case actionTypes.MOUSE_FOUCS:
            return state.set('focused',true)
        case actionTypes.MOUSE_BLUR:
            return state.set('focused',false)
        default:
            return state;
    }

}