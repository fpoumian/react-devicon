import React from 'react'
import renderer from 'react-test-renderer'
import DoctrineOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DoctrineOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
