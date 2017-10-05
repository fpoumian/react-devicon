import React from 'react'
import renderer from 'react-test-renderer'
import DrupalOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DrupalOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
