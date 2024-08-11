
const logger = (store)=>(next)=>(action)=>{
    const currentState = store.getState()
    console.log('currentState',currentState)
    console.log('action dispatch',action)
    next(action)
    console.log('updatedState', store.getState())
}

export default logger;