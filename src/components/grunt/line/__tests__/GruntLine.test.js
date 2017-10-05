import React from 'react'
import renderer from 'react-test-renderer'
import GruntLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GruntLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
