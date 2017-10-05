import React from 'react'
import renderer from 'react-test-renderer'
import Css3PlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Css3PlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
