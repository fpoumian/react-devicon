import React from 'react'
import renderer from 'react-test-renderer'
import AppleOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AppleOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
