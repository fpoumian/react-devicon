import React from 'react'
import renderer from 'react-test-renderer'
import DebianPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DebianPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
