import React from 'react'
import renderer from 'react-test-renderer'
import IllustratorPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<IllustratorPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
