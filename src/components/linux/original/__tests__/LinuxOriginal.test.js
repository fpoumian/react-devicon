import React from 'react'
import renderer from 'react-test-renderer'
import LinuxOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LinuxOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
