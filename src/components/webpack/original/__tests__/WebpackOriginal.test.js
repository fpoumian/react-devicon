import React from 'react'
import renderer from 'react-test-renderer'
import WebpackOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WebpackOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
