import React from 'react'
import renderer from 'react-test-renderer'
import UbuntuPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<UbuntuPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
