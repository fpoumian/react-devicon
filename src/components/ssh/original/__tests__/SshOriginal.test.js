import React from 'react'
import renderer from 'react-test-renderer'
import SshOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SshOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
