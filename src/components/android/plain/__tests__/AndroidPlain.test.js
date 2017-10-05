import React from 'react'
import renderer from 'react-test-renderer'
import AndroidPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AndroidPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
