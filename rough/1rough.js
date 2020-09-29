const {combineReducers,createStore}=require('redux')

const countReducer=(state=0,action)=>{
    switch(action.type)
    {
        case 'INCREMENT':{
            return state+1
        }
        case 'DECREMENT':{
            return state-1
        }
        case 'INCREMENT_BY':{
            return state+action.payload
        }
        default:{
            return state
        }
    }
}
const configureStore=()=>{
    const store=createStore(combineReducers({
        count:countReducer
    }))
    return store
}

const store=configureStore()

console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})

const increment=()=>{
    return {type:'INCREMENT'}
}
const decrement=()=>{
    return{type:'DECREMENT'}
}
const increment_by=(n)=>{
    return{type:'INCREMENT_BY',payload:n}
}
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment_by(4))
store.dispatch(decrement())
store.dispatch(decrement())