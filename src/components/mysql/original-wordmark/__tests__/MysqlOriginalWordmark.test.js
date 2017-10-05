import React from 'react'
import renderer from 'react-test-renderer'
import MysqlOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MysqlOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
