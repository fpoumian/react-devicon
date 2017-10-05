import React from 'react'
import renderer from 'react-test-renderer'
import MysqlPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MysqlPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
