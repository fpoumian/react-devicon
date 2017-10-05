import React from 'react'
import renderer from 'react-test-renderer'
import PhotoshopLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PhotoshopLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
