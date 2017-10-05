import React from 'react'
import renderer from 'react-test-renderer'
import DrupalPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DrupalPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
