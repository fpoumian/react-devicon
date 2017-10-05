import React from 'react'
import renderer from 'react-test-renderer'
import VagrantOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VagrantOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
