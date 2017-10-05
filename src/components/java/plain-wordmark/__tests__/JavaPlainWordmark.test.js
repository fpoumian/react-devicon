import React from 'react'
import renderer from 'react-test-renderer'
import JavaPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JavaPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
