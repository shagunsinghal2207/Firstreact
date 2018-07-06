import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state = {
  persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'Maxs', age: 26}

  ]
}

switchNameHandler=(newname)=>{
  console.log('Was clicked');
  this.setState({persons: [
    {name: newname, age: 28},
    {name: 'Manu', age: 29},
    {name: 'Maxs', age: 26}

  ]
} )
}

namechangedHandler=(event)=>{
  console.log('Was clicked');
  this.setState({persons: [
    {name: 'Max', age: 28},
    {name: event.target.value, age: 29},
    {name: 'Maxs', age: 26}

  ]
} )
}


  render() {

    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1x solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this,'Maximilian')}>Switch Name</button>
        <Person name ={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person name ={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this,'Max')}
         changed={this.namechangedHandler}>My Hobbies:Racing</Person>
        <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',null,'h1','Hi, I\'m a REact App!!!');
    //return React.createElement('div',null,React.createElement('h1',null,'Does this work now'));
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now'));
    
  }
}

export default App;
