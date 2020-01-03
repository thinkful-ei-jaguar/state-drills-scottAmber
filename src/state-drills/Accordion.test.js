import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './state-drills/Accordion';


describe(`Accordion Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Accordion name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  
  it('renders the UI as expected with no unreads', () => {
    const tree = renderer
      .create(<Accordion name="Messages" unread={0}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})

