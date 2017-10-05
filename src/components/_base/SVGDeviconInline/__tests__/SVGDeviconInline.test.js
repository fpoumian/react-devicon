import React from 'react'
import { shallow, render } from 'enzyme'
import SVGDeviconInline from '../index.js'

describe('SVGDeviconInline', () => {
  const iconSVG =
    '<svg class="SVGInline-devicon AtomOriginal-devicon" style="width: 200px;height: 200px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#67595D"></path></svg>'

  it('should contain one SVGInline element', () => {
    const wrapper = shallow(<SVGDeviconInline iconSVG={iconSVG} />)
    expect(wrapper.is('SVGInline')).toBe(true)
  })

  it('should render a div element in DOM', () => {
    const wrapper = render(
      <SVGDeviconInline
        iconSVG={iconSVG}
        className={'AmazonwebservicesOriginalWordmark'}
      />
    )
    expect(wrapper.find('div')).toHaveLength(1)
    expect(
      wrapper.find('div').hasClass('AmazonwebservicesOriginalWordmark')
    ).toBe(true)
  })
  it('should render an SVG element in DOM', () => {
    const wrapper = render(<SVGDeviconInline iconSVG={iconSVG} />)
    expect(wrapper.find('svg')).toHaveLength(1)
  })
})
