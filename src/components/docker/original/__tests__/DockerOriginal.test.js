import React from 'react'
import renderer from 'react-test-renderer'
import DockerOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DockerOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
