import React from 'react'
import renderer from 'react-test-renderer'
import VuejsLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VuejsLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
