import React from 'react'
import renderer from 'react-test-renderer'
import ElmPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ElmPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
