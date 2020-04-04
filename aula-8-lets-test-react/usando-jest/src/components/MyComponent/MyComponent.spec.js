import React from 'react';
import MyComponent from './MyComponent'
import { shallow } from 'enzyme'

describe('my sweet test', () => {
    it('clicks it', () => {
        const app = shallow(<MyComponent/>)
        const instance = app.instance()
        const spy = jest.spyOn(instance, 'myClickFunc')

        instance.forceUpdate();

        const p = app.find('.MyComponent-intro')
        p.simulate('click')
        expect(spy).toHaveBeenCalled()
    })

    it('should sum', () => {
        const app = shallow(<MyComponent />)
        const instance = app.instance()
        const spySum = jest.spyOn(instance, 'sum')

        instance.forceUpdate();

        const result = spySum(1, 2)
        expect(spySum).toHaveBeenCalled()
        expect(result).toEqual(3)
    });
})