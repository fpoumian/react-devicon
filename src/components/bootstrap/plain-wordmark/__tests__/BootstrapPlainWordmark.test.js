import React from 'react'
import renderer from 'react-test-renderer'
import BootstrapPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BootstrapPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
