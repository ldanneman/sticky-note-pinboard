import React from "react"

class Form extends React.Component {
    constructor() {
        super()
        this.state ={
            message: 'state message',
            userInput: '',
            
            
        };
    //    this.handleClick = this.handleClick.bind(this) 
    }
    
    userInputChanged(event) {
        this.setState({
            userInput: event.target.value
        })
    }

    handleClick(event) {
        event.preventDefault();
        console.log(this.state.userInput);
        this.setState({
            note: [...this.state.userInput]
        })
    }

render() {
    return (
        
        <div>
        <h3>{this.state.message}</h3>
            <form onSubmit={this.handleClick.bind(this)}>
            <label htmlFor="textarea"></label>
            <textarea onChange={this.userInputChanged.bind(this)} id="input" name="input"> </textarea> 
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

}

export default Form