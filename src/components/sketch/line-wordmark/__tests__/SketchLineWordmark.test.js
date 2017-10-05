import React from 'react'
import renderer from 'react-test-renderer'
import SketchLineWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SketchLineWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
