import React from 'react'
import renderer from 'react-test-renderer'
import RedisOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RedisOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
