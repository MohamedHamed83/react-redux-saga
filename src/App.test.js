import React from 'react';
import ReactDOM from 'react-dom';
 import renderer from 'react-test-renderer'
import App from './App';

describe('app',()=>{
  it('should render the app',()=>{
    const tree= renderer.create(<App />)
     expect(tree.toJSON()).toMatchSnapshot()
 })
 

})
