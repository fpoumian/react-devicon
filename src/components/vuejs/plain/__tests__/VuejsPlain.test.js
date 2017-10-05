import React from 'react'
import renderer from 'react-test-renderer'
import VuejsPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VuejsPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
