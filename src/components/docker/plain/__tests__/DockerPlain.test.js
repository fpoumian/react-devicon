import React from 'react'
import renderer from 'react-test-renderer'
import DockerPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DockerPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
