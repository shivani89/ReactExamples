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
          
          <header-img src="http://codecondo.com/wp-content/uploads/2015/05/Resources-to-Get-You-Started-with-ReactJS.jpg?478983" />
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
        {"name":"Julie", "age":"24" }
       
    ]
  
  }
}
  render () {

    return (
      <div className="App-content">
          <h2>This is the Content section with a data</h2> 
          <table>
            <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
            </tbody>           
          </table>
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


