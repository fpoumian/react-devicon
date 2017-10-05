import React from 'react'
import renderer from 'react-test-renderer'
import TomcatLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TomcatLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
