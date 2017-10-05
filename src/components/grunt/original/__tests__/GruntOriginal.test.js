import React from 'react'
import renderer from 'react-test-renderer'
import GruntOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GruntOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
