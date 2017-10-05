import React from 'react'
import renderer from 'react-test-renderer'
import Css3OriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Css3OriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
