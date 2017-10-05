import React from 'react'
import renderer from 'react-test-renderer'
import ErlangPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ErlangPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
