import React from 'react'
import renderer from 'react-test-renderer'
import BootstrapPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BootstrapPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
