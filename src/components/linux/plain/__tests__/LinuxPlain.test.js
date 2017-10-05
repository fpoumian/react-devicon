import React from 'react'
import renderer from 'react-test-renderer'
import LinuxPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LinuxPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
