import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('Icon',()=>{
    it('svg',()=>{
        const svgJson = renderer.create(<Icon name="footer"/>).toJSON()
        expect(svgJson).toMatchSnapshot() //快照
    })
    
     it('onCkick',()=>{
         const fn = jest.fn()
         const component = mount(<Icon name="love" onClick={fn}></Icon>)
         component.find('svg').simulate('click')
         expect(fn).toBeCalled()
     })
})