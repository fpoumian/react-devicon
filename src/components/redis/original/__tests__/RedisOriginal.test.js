import React from 'react'
import renderer from 'react-test-renderer'
import RedisOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RedisOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
