import React from 'react'
import renderer from 'react-test-renderer'
import AppceleratorPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AppceleratorPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
