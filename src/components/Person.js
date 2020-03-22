import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // hasChanged:true
        }
    }
    increment = (e) => {
        // e.preventDefault()
      //  this.setState({hasChanged:true})
        this.props.increment(this.props.name)
    }
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.count}</h2>
                <button onClick={this.increment}>Add</button>
                {/* {this.state.hasChanged && (
                    <span>Update</span>
                )} */}
            </div>
        );
    }
}

export default Person;