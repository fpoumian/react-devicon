import React from 'react'
import renderer from 'react-test-renderer'
import DoctrineLineWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DoctrineLineWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
