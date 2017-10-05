import React from 'react'
import renderer from 'react-test-renderer'
import FacebookPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FacebookPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
