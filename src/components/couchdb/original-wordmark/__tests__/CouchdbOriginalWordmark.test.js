import React from 'react'
import renderer from 'react-test-renderer'
import CouchdbOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CouchdbOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
