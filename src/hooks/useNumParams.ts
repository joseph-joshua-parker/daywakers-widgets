import {useReducer} from 'react';


export enum Parameters {
    STIMS_P_C = 'stimsPC',
    SECS_B_C = 'secsBC',
    SECS_B_S = 'secsBS'
}
 
export type ParamState = {
    [Parameters.STIMS_P_C]: number 
    [Parameters.SECS_B_S]: number
    [Parameters.SECS_B_C]: number
}

enum ParamActionTypes {
    DELTA = 'delta',
    CHANGE = 'change'
}

export type ParamAction = {
    type: ParamActionTypes,
    payload: {
        param: Parameters,
        value: number
    }
}

export const DeltaParam = (param: Parameters, delta: number) => {
    return {type: ParamActionTypes.DELTA, payload: {param, value:delta}}
}

export const ChangeParam = (param: Parameters, value: number)=>{
    return {type: ParamActionTypes.CHANGE, payload: {param, value}}
}

 const numParamReducer = (state: ParamState, action: ParamAction) =>{
    const {type, payload:{param, value}} = action;
    switch(type){
        case ParamActionTypes.DELTA: {
            if(state[param]+value < 0) 
                return {...state, [param]:0}
            else                
                return {...state, [param]: state[param]+value};
        }
        case ParamActionTypes.CHANGE: return {...state, [param]: value}
    }
}

export const useNumParams = (initialParams: ParamState =  {
    [Parameters.STIMS_P_C]: 10,  
    [Parameters.SECS_B_S]: 2,
    [Parameters.SECS_B_C]: 10
}) => useReducer(numParamReducer, initialParams);   
