import { Actions } from "./Action"
export let initialVlaues = {
    data:[]
}

export function TodoReducer(state,action){
    switch(action.type){
        case Actions.ADD: 
            var newData = [...state.data]
            newData.push({
                name:action.payload,
                completed:false
            })
            return {...state,data:newData}
        case Actions.CHANGE: 
            var newData1 = [...state.data]
            newData1[action.payload.index].completed=action.payload.completed
            return {...state,data:newData1}
        case Actions.CLEAR:
            return initialVlaues
    }
}