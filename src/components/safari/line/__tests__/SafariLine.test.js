import React from 'react'
import renderer from 'react-test-renderer'
import SafariLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SafariLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
