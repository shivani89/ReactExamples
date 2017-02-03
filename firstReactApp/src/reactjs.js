import React, { Component } from 'react';
import './App.css';



class ReactJs extends Component {
    render(){
        return (
        	<div className="container">
        		<UserTable />

        	</div>
   	); 
    }
}


class UserTable extends Component{ 

 constructor(){
   super();
  this.state ={
    data : [],
    search: ''
   }
}

componentWillMount(){

  fetch('https://swapi.co/api/people/?format=json')
    .then(response =>response.json())
    .then(({results:data})=>this.setState({data}))
}

changeContent(e) {
  
    console.log('Name changed to '+ this.refs.name.value);
    console.log('Age chnaged to '+ this.refs.age.value);
 }
sendContent() {
    var person ={}
    person.name = this.refs.name.value
    person.birth_year = this.refs.age.value
    var newPerson = this.state.data.slice()
    newPerson.push(person)
    this.setState({ data: newPerson})
  } 
  
deleteRow(e){
  var newData = this.state.data;
  var index = newData.indexOf(this.props.user);
  newData.splice(index, 1);
  this.setState({data: newData });

 }

updateNode(e){}

filter(e){
   this.setState({search: e.target.value})
 }


render () {

       var users = this.state.data.filter(
            (user) => {
              return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1    
        });

   return (
      <div className="App-content">
          <div className="container">
          <h3>User Information</h3>
              <div className="jumbotron">
              <div className="filter-input">
                 <label>Search: </label> 
                 <input type="text"  value={this.state.search} onChange={this.filter.bind(this)} placeholder="search user"/> 
                 </div>
                 <br/><br/>
                  <table className="table table-responsive table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Birth Year</th>                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                     users.map((person, index) => <TableRow key={index} user={person} removePerson={this.deleteRow} editPerson={this.updateNode} />)
                   }
                      
                  </tbody>           
                </table>
              <div>
                Enter name:<input type="text" ref="name" onChange={this.changeContent.bind(this)}/>&nbsp;
                Enter age:<input type="text" ref="age"  onChange={this.changeContent.bind(this)} />&nbsp;
                <button onClick={this.sendContent.bind(this)}>submit</button> 
              </div>
            </div>
           </div>
      </div>
      );
  }
}


class TableRow  extends Component{ 
delRow(){
  this.props.removePerson(this.props.user)
  console.log(this.props.user)
}
 render(){
    return (
            <tr id="table-row">  
              <td>{this.props.user.name}</td>   
              <td>{this.props.user.birth_year}</td>
              <td><button className='btn btn-info' onClick={this.props.editPerson.bind(this)}>Edit</button></td>
              <td><button className='btn btn-danger' onClick={this.delRow.bind(this)}>Delete</button></td>
            </tr> 
         );
        }   
  }

export default ReactJs;