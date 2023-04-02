import { Component } from "react";

const TableHeader = ()=>{
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableBody = (props)=>{
    const {charactersData,removeCharacter} = props
    const rows = charactersData.map((charater,index)=>{
        return (
            <tr key={index}>
                <td>{charater.name}</td>
                <td>{charater.designation}</td>
                <td><button onClick={()=>removeCharacter(index)}>Delete</button></td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {
    render(){
        const {charactersData,removeCharacter} = this.props
        return (
            <table>
                <TableHeader/>
                <TableBody removeCharacter={removeCharacter} charactersData = {charactersData}/>                
            </table>
        )
    }
}

export default Table;