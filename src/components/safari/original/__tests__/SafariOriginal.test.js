import React from 'react'
import renderer from 'react-test-renderer'
import SafariOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SafariOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
