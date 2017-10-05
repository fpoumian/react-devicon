import React from 'react'
import renderer from 'react-test-renderer'
import VagrantPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VagrantPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
