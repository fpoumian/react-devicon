import React from 'react'
import renderer from 'react-test-renderer'
import GruntPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GruntPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
