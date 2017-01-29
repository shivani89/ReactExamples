import React, { Component } from 'react';
import './App.css';


//stateful component- which has a state whic changes dynamically. here the src logo might change.
//create an component, header-img, footer, body-p
//in here we write our components
// props are immutable and static 
//owner(parent-- APP component) -ownee(child-- header,content and footer) relationship - changes to states of child components are updated by the parent components
//components can be anything a class, function, etc
class App extends Component {


  render() {
    return (
      
      <div className="App">
        <Header/>
        <Content/>
      
        <Footer/>
      </div>

    );
  }
} 

class Header extends Component{ /*/*this is the syntax for component creatin with class (header component)*/

  render () {

    return (
      <div className="App-header">
          <h2>This is the header section</h2> 
      </div>
      );
  }/*this render method will help in parsing html inside this js code*/
}

class Content extends Component{ 

 constructor(){

   super();

  this.state ={
    data:
      [
        {"name":"John", "age":"20" },
        {"name":"SAm", "age":"30" },
        {"name":"Pam", "age":"23" },
        {"name":"Pam", "age":"28" },
        {"name":"Julie", "age":"24" }
       
    ]
   }
}
  



 changeContent(e) {

   
    console.log('Name changed to '+ this.refs.name.value);

    console.log('Age chnaged to '+ this.refs.age.value);

 }



  sendContent() {
  
 /*Object person = new Object()*/
  
var person ={}

person.name = this.refs.name.value,
person.age = this.refs.age.value,

console.log(person)

var newPerson = this.state.data.slice()
newPerson.push(person)
this.setState({ data: newPerson })
    
 

  } 

   
  render () {

    return (
      <div className="App-content">
          <h2>This is the Content section with a data</h2> 
          <table>
            <tbody>
            {this.state.data.map(
              (person, i) => <TableRow  key= {i} data = {person} />
              )
            }
            </tbody>           
          </table>

          <div>
            name:<input type="text" ref="name"  onChange={this.changeContent.bind(this)}/>
            age:<input type="text" ref="age"  onChange={this.changeContent.bind(this)} />
            <button onClick={this.sendContent.bind(this)}>submit</button> 
          </div>

        
      </div>
      );
  }
}
class Footer extends Component{ 

  render () {

    return (
      <div className="App-footer">
         <p>
    Copyright &copy; ReactApps.com
  </p> 
      </div>
      );
  }
}

class TableRow  extends Component{ /*this component is used in content component to disply the dynamic data using props(data). here we are accessing the name & age values of an data obj(which is declared in content component) using props*/

  render(){

    return (
      <tr>  
        <td>{this.props.data.name}</td>   
        <td>{this.props.data.age}</td>
      </tr>

      );
  }
}




export default App;


