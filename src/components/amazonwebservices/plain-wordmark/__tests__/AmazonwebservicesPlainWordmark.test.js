import React from 'react'
import renderer from 'react-test-renderer'
import AmazonwebservicesPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AmazonwebservicesPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
