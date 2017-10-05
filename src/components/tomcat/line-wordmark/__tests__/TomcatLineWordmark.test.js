import React from 'react'
import renderer from 'react-test-renderer'
import TomcatLineWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TomcatLineWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
