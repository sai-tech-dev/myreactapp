import { Component } from "react"
import Table from "./Table";

class App extends Component{

    state = {
        characters : [
            {
                name : 'Sai Vignesh',
                designation : 'Developer',
            },
            {
                name : 'Shanju',
                designation : 'Developer',
            },
            {
                name : 'Mani',
                designation : 'IndiaFilings',
            },
            {
                name : 'Ando',
                designation : 'Devops',
            }
        ]
    }

    removeCharacter = (index)=>{
        const {characters} = this.state

        let filtered = characters.filter((character,i)=>{
            return i!==index
        });

        this.setState({characters:filtered})
    }

    render(){
        const {characters} = this.state
      return (
        <div className='container'>
            <h2>Table Sample</h2>
          <Table removeCharacter={this.removeCharacter} charactersData={characters}/>
        </div>
      )
    }
}

export default App;