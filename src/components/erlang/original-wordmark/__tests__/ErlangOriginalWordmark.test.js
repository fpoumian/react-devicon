import React from 'react'
import renderer from 'react-test-renderer'
import ErlangOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ErlangOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
