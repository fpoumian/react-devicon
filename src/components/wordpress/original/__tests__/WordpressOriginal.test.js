import React from 'react'
import renderer from 'react-test-renderer'
import WordpressOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WordpressOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
