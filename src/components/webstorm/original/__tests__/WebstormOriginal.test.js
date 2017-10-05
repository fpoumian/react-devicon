import React from 'react'
import renderer from 'react-test-renderer'
import WebstormOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WebstormOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
