import React from 'react'
import renderer from 'react-test-renderer'
import RedhatPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RedhatPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
