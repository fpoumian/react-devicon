import React from 'react'
import renderer from 'react-test-renderer'
import VuejsOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VuejsOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
