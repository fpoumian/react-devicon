import React from 'react'
import renderer from 'react-test-renderer'
import VagrantOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VagrantOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
