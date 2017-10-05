import React from 'react'
import renderer from 'react-test-renderer'
import CouchdbPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CouchdbPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
