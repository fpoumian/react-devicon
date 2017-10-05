import React from 'react'
import renderer from 'react-test-renderer'
import GitPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GitPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
