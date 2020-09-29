const {createStore,combineReducers}=require('redux')
const taskInitialState=[]
const taskReducer=(state=taskInitialState,action)=>{
    switch(action.type)
    {
        case 'ADD_TASK':{
            return state.concat(action.payload)
        }
        case 'REMOVE_TASK':{
            return state.filter(task=>task.id!=action.payload)
        }
        default:{
            return [].concat(state)
            //return [...state]
        }
    }
}
const customerInitialState=[]
const customersReducer=(state=customerInitialState,action)=>{
    switch(action.type)
    {
        case 'ADD_CUSTOMER':{
            return state.concat(action.payload)
        }
        case 'REMOVE_CUSTOMER':{
            return state.filter(customer=>customer.id!=action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}
const configureStore=()=>{
    const store=createStore(combineReducers({
        tasks:taskReducer,
        customers:customersReducer
    }))
    return store
}
const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

const removeCustomer=(id)=>{
    return {type:'REMOVE_CUSTOMER',payload:id}
}

const addCustomer=(customer)=>{
    return {type:'ADD_CUSTOMER',payload:customer}
}

store.dispatch(addCustomer({id:1,name:'abc',email:'abc@gmail.com'}))
store.dispatch(addCustomer({id:2,name:'def',email:'def@gmail.com'}))
store.dispatch(removeCustomer(1))



const addTask=(task)=>{
    return {type:'ADD_TASK',payload:task}
}
const removeTask=(id)=>{
    return {type:'REMOVE_TASK',payload:id}
}


store.dispatch(addTask({id:1,title:'Task1'}))
store.dispatch(addTask({id:2,title:'Task2'}))

store.dispatch(removeTask(1))

//reading is done by list or show
// console.log('Listing tasks',store.getState().tasks)
// console.log('listing customers',store.getState().customers)
// console.log('show task',store.getState().tasks.find(task=>task.id==2))
// console.log('show customer',store.getState().customers.find(customer=>customer.id==2))
