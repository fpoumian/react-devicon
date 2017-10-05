import React from 'react'
import renderer from 'react-test-renderer'
import MeteorPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MeteorPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
