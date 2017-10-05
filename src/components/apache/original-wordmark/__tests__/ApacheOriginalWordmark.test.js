import React from 'react'
import renderer from 'react-test-renderer'
import ApacheOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ApacheOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
