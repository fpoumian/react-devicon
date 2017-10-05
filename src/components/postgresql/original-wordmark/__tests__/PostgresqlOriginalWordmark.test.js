import React from 'react'
import renderer from 'react-test-renderer'
import PostgresqlOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PostgresqlOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
