import React from 'react'
import renderer from 'react-test-renderer'
import AmazonwebservicesOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AmazonwebservicesOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
