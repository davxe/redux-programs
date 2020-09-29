const configureStore = () => {
    const store = { 
        state : {
            count: 0
        },
        getState: function(){
            return this.state
        },
        dispatch: function(action){
            switch(action.type){
                case 'INCREMENT' : {
                    this.state.count += 1
                    return this.getState()
                }
                case 'DECREMENT' : {
                    this.state.count -=1 
                    return this.getState()
                }
                case 'INCREMENT_BY' : {
                    this.state.count += action.payload 
                    return this.getState()
                }
                case 'RESET' : {
                    this.state.count = 0 
                    return this.getState()
                }
                default : {
                    return this.getState()
                }
            }
        }   
    }
    return store 
}

// function which returns an action is called action generator / action creator
const increment = () => {
    return { type: 'INCREMENT' } // action
}

// action generator / action creator
const decrement = () => {
    return { type: 'DECREMENT' } // action
}

const reset = () => {
    return { type: 'RESET'}
}

const incrementBy = (n) => {
    return { type: 'INCREMENT_BY', payload: n}
}

const store = configureStore()
console.log(store.getState())

console.log(store.dispatch(increment()))
console.log(store.dispatch(increment()))
console.log(store.dispatch(increment()))
console.log(store.dispatch(decrement()))
console.log(store.dispatch(reset()))

console.log(store.dispatch(incrementBy(10)))

/*
    if(condition) {
        // true statement execute
    }

    if(condition) {
        // true statement execute
    } else {
        // false statement execute
    }


    if(condition) {
        // true statement execute
    } else if(condition) {
        // true statement execute
    } else if(condition) {
        // true statement execute
    } else {
        // default statement execute
    }

    switch(expression) {
        case true: {
            // true statement execute
            // break
        } 
        case true : {
            // true statement execute
            // break
        }
        case true: {
            // true statement execute
            // break
        }
        default: {
            // default statement execute
        }
    }

*/