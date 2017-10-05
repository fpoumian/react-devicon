import React from 'react'
import renderer from 'react-test-renderer'
import CplusplusPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CplusplusPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
