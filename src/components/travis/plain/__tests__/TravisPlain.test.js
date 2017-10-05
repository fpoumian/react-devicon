import React from 'react'
import renderer from 'react-test-renderer'
import TravisPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TravisPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
