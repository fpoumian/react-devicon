import React from 'react'
import renderer from 'react-test-renderer'
import AmazonwebservicesOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AmazonwebservicesOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
