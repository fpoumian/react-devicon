import React from 'react'
import renderer from 'react-test-renderer'
import VimOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VimOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
