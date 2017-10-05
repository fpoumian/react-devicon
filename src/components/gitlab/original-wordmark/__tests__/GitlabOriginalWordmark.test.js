import React from 'react'
import renderer from 'react-test-renderer'
import GitlabOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GitlabOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
