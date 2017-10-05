import React from 'react'
import renderer from 'react-test-renderer'
import Css3Original from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Css3Original />).toJSON()
  expect(tree).toMatchSnapshot()
})
