import React from 'react'
import renderer from 'react-test-renderer'
import MongodbPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MongodbPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
