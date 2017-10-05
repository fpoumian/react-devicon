import React from 'react'
import renderer from 'react-test-renderer'
import VimPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VimPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
