import React from 'react'
import renderer from 'react-test-renderer'
import RedisPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RedisPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
