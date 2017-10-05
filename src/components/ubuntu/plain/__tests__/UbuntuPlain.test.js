import React from 'react'
import renderer from 'react-test-renderer'
import UbuntuPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<UbuntuPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
