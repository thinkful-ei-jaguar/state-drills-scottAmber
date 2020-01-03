import React from 'react';
import './Accordion.css';


//we are accessing sections [] from the parent App.js, because Accordion is being called
//inside the App function <Accordion sections={sections} />

class Accordion extends React.Component {

  state = {
    activeSectionIdx: null
  }


  //when a button is clicked, this is triggered with the idx passed through it
  //if that idx is === to the activeSectionIdx(if it was just clicked) then 
  //change the state of activeSectionIdx to null, which will take it off the DOM
  //else, set the state of activeSectionIdx to the current idx.
  //this allows you to click the button on and off (displaying the <p> or not)
  handleButtonClick = (idx) => {
    if (this.state.activeSectionIdx === idx) {
      this.setState({ activeSectionIdx: null });
    } else {
      this.setState({ activeSectionIdx: idx });
    }
  }

  //this creates the template for each section
  //the props are section(the individual li section), 
  //the idx( where that section is) and activeSectionIdx(the active idx position).

  //setting the key={idx} will make each key unique, making React happy
  //on each button click, this onClick={() => this.handleButtonClick(idx)} will run the
  //handleButtonClick function with the idx passed through it. 

  //if activeSectionIdx is === to the idx, it will add the <p>, 
  //if activeSectionIdx is !== to the idx, it will display null, so nothing will appear
  
  renderSection = (section, idx, activeSectionIdx) => {
    return (
      <li className="accordion-item" key={idx}> 
        <button type="button" onClick={() => this.handleButtonClick(idx)}>{section.title}</button>
        {activeSectionIdx === idx ? <p>{section.content}</p> : null}
      </li>
    );
  }


  //we set the variable activeSectionIdx = this.state.activeSectionIdx;
  //we set the variable sections = this.prop.sections;
  //the render function will return a jsx string with a <ul>
  //inside that <ul> we map through the sections array, passing in section, idx
  //returning this.renderSection(section, idx, activeSectionIdx)

  render() {

    const { activeSectionIdx } = this.state;
    const { sections } = this.props;

    return (
      <div>
        <ul className="accordion">
          {sections.map((section, idx) => {
            return this.renderSection(section, idx, activeSectionIdx);
          })}
        </ul>
      </div>
    );
  }
}
export default Accordion;