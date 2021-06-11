import React, { Component } from 'react'
import *as actionType from '../containers/action'
import { connect } from 'react-redux';


class todo extends Component {
    state = {
        input: ""
    }
    valueHandler=(e)=>{
        this.setState((prevState)=>({
            ...prevState,
            input : e.target.value
        }))
    }
    
    subhandler=()=>{
        this.props.submitHandler(this.state.input)
    }
    render() {
        console.log(this.state.input)
        return (
            <div>
                <h1>Enter Task</h1>
                <input type="text" value={this.state.input} onChange={e=>{
                    this.valueHandler(e)
                }}></input>
                <button text="submit" onClick={this.subhandler}>Submit</button>

                <hr />
                
                <ul>
                    {this.props.resultt.map((strResult, index) => (
                        <li key={index} >{strResult} </li>
                    ))}
                </ul>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        inputt: state.input,
        resultt: state.result
    }
}
const mapDispatchToProps = dispatch => {
    
    return {
        submitHandler: (text) => dispatch({ type: actionType.INPUT, text: text }),
        displayHandler: () => dispatch({ type: actionType.DISPLAY })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(todo);




// case actionType.DISPLAY:{
    //       console.log("done")
    //       return(
    //       <div><ul>
    //         {
    //         state.result.map((strResult, index) => (
    //             <li key={index} >{strResult}  
    //             </li>
    //         ))}
    //     </ul>  </div>)
    //   }