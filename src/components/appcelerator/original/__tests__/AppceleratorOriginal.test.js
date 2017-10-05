import React from 'react'
import renderer from 'react-test-renderer'
import AppceleratorOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AppceleratorOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
