import React from 'react'
import renderer from 'react-test-renderer'
import Ie10Original from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Ie10Original />).toJSON()
  expect(tree).toMatchSnapshot()
})
