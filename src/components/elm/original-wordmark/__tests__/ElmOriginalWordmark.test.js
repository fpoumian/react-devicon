import React from 'react'
import { shallow, render } from 'enzyme'
import ElmOriginalWordmark from '../index.js'

describe('ElmOriginalWordmark', () => {
  it('should contain one SVGInline element', () => {
    const wrapper = shallow(<ElmOriginalWordmark />)
    expect(wrapper.is('SVGInline')).toBe(true)
  })
  it('should accept width and height props as integer and convert them to pixels', () => {
    const wrapper = shallow(<ElmOriginalWordmark height={100} width={100} />)
    expect(wrapper.props().height).toEqual('100px')
    expect(wrapper.props().width).toEqual('100px')
  })

  it('should accept width and height props as string', () => {
    const wrapper = shallow(
      <ElmOriginalWordmark height={'10rem'} width={'10rem'} />
    )
    expect(wrapper.props().height).toEqual('10rem')
    expect(wrapper.props().width).toEqual('10rem')
  })

  it('should render a span element in DOM', () => {
    const wrapper = render(<ElmOriginalWordmark />)
    expect(wrapper.find('span')).toHaveLength(1)
    expect(wrapper.find('span').hasClass('ElmOriginalWordmark')).toBe(true)
  })
  it('should render an svg element in DOM', () => {
    const wrapper = render(<ElmOriginalWordmark />)
    expect(wrapper.find('svg')).toHaveLength(1)
  })
})
