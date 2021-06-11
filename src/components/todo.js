import React, { useState } from 'react'
import *as actionType from '../containers/action'
import { connect } from 'react-redux';
import "./todo.css"



const Todo = (props) => {
    const [input, setInput] = useState("")
    const [show, setShow] = useState(false)
    // let show = true
    let sample = []
    const btext = show ? 'Hide' : 'Display'
    return (
        <div>
            <h1>Enter Task</h1>
            <input type="text" onChange={(e) => {
                setInput(e.target.value)
            }}></input>
            <button onClick={() => props.submitHandler(input)} >submit</button>

            <ul>
                {props.resultt.map((strResult) => (
                    <li key={strResult.id} > {strResult.val} <button onClick={() => { props.completedHandler(strResult.id) }}>completed</button><br /></li>
                ))}
            </ul>
            <hr />
            <button onClick={() => {
                setShow(!show)
                // if (show) {
                //     console.log('clicked')
                //     console.log(show)
                //     props.completee.map(v => sample.push(v.val))
                //     console.log('sam:', sample)
                //     show = !show
                // } else {
                //     sample = ''
                //     console.log(show)
                //     show = !show
                //     console.log('sam:', sample)
                // }

            }} > {btext}</button>
            <hr />
            <h1>Check</h1>
            {show && props.completee.map((item) => (
                <h1>
                    {item.val}
                </h1>
            ))}
            {/* {sample.map(v => (
                <ul>
                    <li>
                        {v}
                    </li>         
                </ul>
            ))} */}
        </div>
    )


}
// const displayHandler=()=>{

// }
const mapStateToProps = state => {
    console.log("tocheck", state)
    return {
        inputt: state.input,
        resultt: state.result,
        completee: state.completed,
        idd: state.i
    }
}
const mapDispatchToProps = dispatch => {

    return {
        submitHandler: (text) => dispatch({ type: actionType.INPUT, text: text }),

        completedHandler: (i) => dispatch({ type: actionType.COMPLETED, i: i })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);