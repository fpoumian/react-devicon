import React from 'react'
import renderer from 'react-test-renderer'
import PostgresqlPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PostgresqlPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
