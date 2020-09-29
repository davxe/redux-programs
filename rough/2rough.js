const {createStore,combineReducers}=require('redux')
const taskInitialState=[]
const userReducer=(state=taskInitialState,action)=>{
    switch(action.type)
    {
        case 'ADD_TASK':{
            return state.concat(action.payload)
        }
        case 'DELETE_TASK':{
            return state.filter(task=>task.id!=action.payload)
        }
        default:{
            return [...state]
        }
    }
}
const customerInitialState=[]
const customerReducer=(state=customerInitialState,action)=>{
    switch(action.type)
    {
        case 'ADD_CUSTOMER':{
            return state.concat(action.payload)
        }
        case 'REMOVE_CUSTOMER':{
            return state.filter(customer=>customer.id!==action.payload)
        }
        case 'UPDATE_CUSTOMER':{
            return state.map(customer=>{
                if(customer.id==action.payload.id)
                {
                    return Object.assign({},customer,action.payload.obj)
                }
                else
                {
                    return Object.assign({},customer)
                }
            })
        }
        default:{
            return [].concat(state)
        }
    }
}
const configureStore=()=>{
    const store=createStore(combineReducers({
        tasks:userReducer,
        customers:customerReducer
    }))
    return store
}
const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
const addTask=(task)=>{
    return {type:'ADD_TASK',payload:task}
}
const deleteTask=(id)=>{
    return {type:'DELETE_TASK',payload:id}
}
const addCustomer=(customer)=>{
    return {type:"ADD_CUSTOMER",payload:customer}
}
const deleteCustomer=(id)=>{
    return{type:'REMOVE_CUSTOMER',payload:id}
}
const updateCustomer=(id,obj)=>{
    return{type:'UPDATE_CUSTOMER',payload:{id,obj}}
}
store.dispatch(addTask({id:1,title:'db backup',completed:false}))
store.dispatch(addTask({id:2,title:'firebase',completed:true}))
store.dispatch(addTask({id:3,title:'ethernating',completed:true}))
store.dispatch(addTask({id:4,title:'ethical hacking',completed:true}))
console.log('Listing Task',store.getState().tasks)
console.log('showing Task',store.getState().tasks.find(task=>task.id==4))
store.dispatch(deleteTask(1))
store.dispatch(addCustomer({id:1,name:'customer1',email:'customer1@email.com'}))
store.dispatch(addCustomer({id:2,name:'customer2',email:'customer2@email.com'}))
store.dispatch(addCustomer({id:3,name:'customer3',email:'customer3@email.com'}))
store.dispatch(addCustomer({id:4,name:'customer4',email:'customer4@email.com'}))
store.dispatch(deleteCustomer(1))
console.log('listing customers',store.getState().customers)
console.log('showing customer',store.getState().customers.find(customer=>customer.id==3))
store.dispatch(updateCustomer(2,{name:'customer21'}))