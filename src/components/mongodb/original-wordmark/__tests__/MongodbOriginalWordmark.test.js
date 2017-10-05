import React from 'react'
import renderer from 'react-test-renderer'
import MongodbOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MongodbOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
