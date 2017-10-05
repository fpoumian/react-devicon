import React from 'react'
import renderer from 'react-test-renderer'
import GitlabOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GitlabOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
