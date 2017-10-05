import React from 'react'
import renderer from 'react-test-renderer'
import LinkedinPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LinkedinPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
