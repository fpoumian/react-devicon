import React from 'react'
import renderer from 'react-test-renderer'
import CouchdbOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CouchdbOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
