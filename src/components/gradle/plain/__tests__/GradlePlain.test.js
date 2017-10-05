import React from 'react'
import renderer from 'react-test-renderer'
import GradlePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GradlePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
