import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {expect} from 'chai';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let doc = ReactDOM.render(<App className="hello"/>, div);
  console.log(doc);
  expect(doc.props.className).to.equal('hello');
});
