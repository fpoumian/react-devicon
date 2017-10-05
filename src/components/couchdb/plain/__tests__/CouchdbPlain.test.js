import React from 'react'
import renderer from 'react-test-renderer'
import CouchdbPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CouchdbPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
