import React from 'react'
import renderer from 'react-test-renderer'
import MongodbOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MongodbOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
