import React from 'react'
import renderer from 'react-test-renderer'
import CPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
