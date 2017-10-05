import React from 'react'
import renderer from 'react-test-renderer'
import GoPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GoPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
