import React from 'react'
import renderer from 'react-test-renderer'
import DockerPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DockerPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
