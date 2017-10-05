import React from 'react'
import renderer from 'react-test-renderer'
import TypescriptPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TypescriptPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
