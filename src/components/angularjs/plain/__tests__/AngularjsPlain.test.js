import React from 'react'
import renderer from 'react-test-renderer'
import AngularjsPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AngularjsPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
