import React from 'react'
import renderer from 'react-test-renderer'
import ErlangPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ErlangPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
