import React from 'react'
import renderer from 'react-test-renderer'
import IllustratorLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<IllustratorLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
