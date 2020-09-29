const {createStore,combineReducers}=require('redux')
const countReducer=(state=0,action)=>{
    switch(action.type)
    {
        case 'INCREMENT':{
            return state+1
        }
        case 'INCREMENT_BY':{
            return state+action.payload
        }
        case 'DECREMENT':{
            return state-1
        }
        case 'RESET':{
            return 0
        }
        case 'SET_TO':{
            return action.payload
        }
        default:{
            return state
        }
    }
}
const configureStore=()=>{
    const store=createStore(combineReducers({
        // 
        count:countReducer
    }))
    return store
}
const store=configureStore()
console.log(store.getState())//getState return the state

store.subscribe(()=>{
    console.log(store.getState())
})

const increment=()=>{
    return {type:'INCREMENT'}
}
const increment_by=(n)=>{
    return {type:'INCREMENT_BY',payload:n}
}
const decrement = () => {
    return { type: 'DECREMENT' } // action
}

const reset = () => {
    return { type: 'RESET'}
}

const setTo = (n) => {
    return { type: 'SET_TO', payload: n}
}
store.dispatch(increment())
store.dispatch(increment_by(7))
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(setTo(5)) 