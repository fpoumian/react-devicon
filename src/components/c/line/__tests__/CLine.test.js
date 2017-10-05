import React from 'react'
import renderer from 'react-test-renderer'
import CLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
