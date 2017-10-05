import React from 'react'
import renderer from 'react-test-renderer'
import SketchLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SketchLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
