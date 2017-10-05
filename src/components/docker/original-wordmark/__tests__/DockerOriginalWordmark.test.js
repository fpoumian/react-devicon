import React from 'react'
import renderer from 'react-test-renderer'
import DockerOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DockerOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
