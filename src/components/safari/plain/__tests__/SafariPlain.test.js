import React from 'react'
import renderer from 'react-test-renderer'
import SafariPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SafariPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
