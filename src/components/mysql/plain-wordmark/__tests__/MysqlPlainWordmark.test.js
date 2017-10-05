import React from 'react'
import renderer from 'react-test-renderer'
import MysqlPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MysqlPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
