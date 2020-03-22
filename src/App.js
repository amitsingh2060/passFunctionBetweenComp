import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       people :[
         {name:"Bob", count:0},
         {name:"Tina", count:0},
         {name:"Louise", count:0},
         {name:"Linda", count:0},
         {name:"Gene", count:0},
       ]
    }
  }
    increment = (ne) => {
      let ppl = this.state.people.map( (p) => {
        if(p.name === ne){
          p.count++;
        }
        return p;
      })
      this.setState({people:ppl})
    }

  render() {
    const ppl = this.state.people
    return (
      <div className="App">
       {ppl.map( person => (
         <Person name={person.name}
        //  key={person.name}
         count={person.count}
         increment={this.increment}/>
       ))}
      </div>
    );
  }
}

export default App;