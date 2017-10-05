import React from 'react'
import renderer from 'react-test-renderer'
import NodejsPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodejsPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
