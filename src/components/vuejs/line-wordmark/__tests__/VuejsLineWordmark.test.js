import React from 'react'
import renderer from 'react-test-renderer'
import VuejsLineWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VuejsLineWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
