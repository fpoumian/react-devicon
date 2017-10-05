import React from 'react'
import renderer from 'react-test-renderer'
import ApacheOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ApacheOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
