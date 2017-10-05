import React from 'react'
import renderer from 'react-test-renderer'
import PhotoshopPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PhotoshopPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
