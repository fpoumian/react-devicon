import React from 'react'
import renderer from 'react-test-renderer'
import VuejsOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VuejsOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
