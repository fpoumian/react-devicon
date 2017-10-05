import React from 'react'
import renderer from 'react-test-renderer'
import FoundationPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FoundationPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
