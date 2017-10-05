import React from 'react'
import renderer from 'react-test-renderer'
import DeviconPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DeviconPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
