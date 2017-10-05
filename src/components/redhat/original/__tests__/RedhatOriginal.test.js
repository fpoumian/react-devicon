import React from 'react'
import renderer from 'react-test-renderer'
import RedhatOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RedhatOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
