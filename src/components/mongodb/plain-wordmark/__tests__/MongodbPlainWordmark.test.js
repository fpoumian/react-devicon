import React from 'react'
import renderer from 'react-test-renderer'
import MongodbPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MongodbPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
