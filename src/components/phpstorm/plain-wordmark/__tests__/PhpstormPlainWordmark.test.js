import React from 'react'
import renderer from 'react-test-renderer'
import PhpstormPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PhpstormPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
