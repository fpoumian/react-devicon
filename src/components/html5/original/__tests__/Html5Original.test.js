import React from 'react'
import renderer from 'react-test-renderer'
import Html5Original from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Html5Original />).toJSON()
  expect(tree).toMatchSnapshot()
})
