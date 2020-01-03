import React from 'react';

class RouletteGun extends React.Component {
   static defaultProps = { //channel to pass data between components
       bulletInChamber: 8,
   }

    state = { //value that a component can hold
      chamber: null,
      spinningTheChamber: false,
    }

    handleClick = () => {
        // State is updated using setState
        this.setState({
            spinningTheChamber: true,
            

        });
        this.timeout = setTimeout(() => {
            let random = Math.ceil(Math.random() * 8)
            this.setState({
                spinningTheChamber: false,
                chamber: random,
            })
            
        }, 2000)


    };

componentWillUnmount(){
    clearTimeout(this.timeout)
}

 takeChance () {
    const { chamber, spinningTheChamber} = this.state
    const {bulletInChamber} = this.props
    if(spinningTheChamber) {
        return 'spinning the chamber and pulling the trigger! ...'
      } else if(chamber === bulletInChamber) {
       
        return 'BANG!!!!'
      } else {
        return 'You\'re safe!';
      }
}
   
render() {
    return (<div>

    <p>{this.takeChance()}</p>
    <button onClick= {this.handleClick}> Pull the trigger!</button>
</div>

)}
}
export default RouletteGun;