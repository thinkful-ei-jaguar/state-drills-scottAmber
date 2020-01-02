import React from 'react';


class HelloWorld extends React.Component {
        state = {
          who: 'world',
        }
      
    render() {
    return <div>
   
    <p>'Hello, {this.state.who} </p>
    
    <button onClick={() => this.setState({who: 'world'})}>world</button>
    <button onClick={() => this.setState({who: 'friend'})}>friend</button>
    <button onClick={() => this.setState({who: 'react'})}>react</button>
    
  </div>
  }
}
export default HelloWorld;