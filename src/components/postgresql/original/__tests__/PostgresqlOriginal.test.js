import React from 'react'
import renderer from 'react-test-renderer'
import PostgresqlOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PostgresqlOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
