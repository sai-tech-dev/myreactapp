import { Component } from "react";

class Form extends Component{
    initialState = {
        name : "",
        designation:""
    }

    state = this.initialState;

    handleChange = (event)=>{
        const {name , value} = event.target
        this.setState({[name]:[value]})
    }

    submitForm = ()=>{
        let character = this.state;
        this.props.handleSubmit(character);
        this.setState(this.initialState);
    }

    render(){
        return(
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="name"/>

                <label htmlFor="designation">Designation</label>
                <input type="text" name="designation" value={this.state.designation} onChange={this.handleChange} id="designation"/>

                <input type="button" value="submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form;