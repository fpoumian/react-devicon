import React from 'react'
import renderer from 'react-test-renderer'
import PostgresqlPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PostgresqlPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
