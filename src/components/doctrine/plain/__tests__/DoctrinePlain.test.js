import React from 'react'
import renderer from 'react-test-renderer'
import DoctrinePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DoctrinePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
