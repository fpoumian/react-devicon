import React from 'react'
import renderer from 'react-test-renderer'
import BehancePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BehancePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
