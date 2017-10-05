import React from 'react'
import renderer from 'react-test-renderer'
import VuejsPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VuejsPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
