import React from 'react'
import renderer from 'react-test-renderer'
import RedisPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RedisPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
