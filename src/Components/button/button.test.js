
import React from 'react'
import { shallow, configure, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import Button from './button'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


const wrapper = shallow(<Button title="Submit" />)

describe('button component', () => { 
    it('should render the button', () => { 
       const tree= renderer.create(<Button />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
    it('should be div', () => { 
        expect(wrapper.find('div')).toHaveLength(1)
    })
    it('should render a text', () => { 
        // expect(wrapper.find('title').contains('Submit')).toBe(true)
    })
    describe('no type', () => { 
        it('should have the default style')
    })
    describe('primary type', () => { 
        it('should have they primary style')
    })
})

describe('interactions', () => { 
    describe('clicking the button', () => { 
        it('should call the onclick callback')
    })
})