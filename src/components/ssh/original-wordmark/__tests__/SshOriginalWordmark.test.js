import React from 'react'
import renderer from 'react-test-renderer'
import SshOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SshOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
