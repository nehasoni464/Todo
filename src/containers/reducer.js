import * as actionType from './action'
import '../components/todo.css'

const todoState = {
    input: "",
    result: [],
    completed:[],
    i: false
}


const reducer = (state = todoState, action) => {
    switch (action.type) {


        case actionType.INPUT: {
            console.log(action.text)
            return {
                ...state,
                // input:action.text,
                result: state.result.concat( {id: new Date(),val:action.text})}
                    }

        case actionType.COMPLETED:{
        const completeR=state.result.filter(r=> r.id!==action.i)
        const completeU=state.result.filter(r=> r.id==action.i)

        console.log("done")
            return{
                ...state,
                result:completeR,
                completed:state.completed.concat(completeU),
                i:true
                
            }
        }
        // case actionType.DISPLAY:{
        //     if(action.show){
        //         console.log("done")
        //             return{
        //                 ...state
        //             }
        //     }
        //     }


        default: {
            return state
        }
    }
}
export default reducer;