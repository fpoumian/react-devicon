import React from 'react'
import renderer from 'react-test-renderer'
import MysqlOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MysqlOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
