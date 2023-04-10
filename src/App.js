import { Component } from "react"
import Table from "./Table";
import Form from "./form";

class App extends Component{

    state = {
        characters : []
    }

    removeCharacter = (index)=>{
        const {characters} = this.state

        let filtered = characters.filter((character,i)=>{
            return i!==index
        });

        this.setState({characters:filtered})
    }

    handleSubmit = (character)=>{
        this.setState({characters:[...this.state.characters,character]})
    }
 
    render(){
        const {characters} = this.state
        return (
            <div className='container'>
                <h2>Table Sample</h2>
                <Table removeCharacter={this.removeCharacter} charactersData={characters}/>
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}

export default App;