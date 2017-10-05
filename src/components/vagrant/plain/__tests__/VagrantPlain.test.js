import React from 'react'
import renderer from 'react-test-renderer'
import VagrantPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VagrantPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
