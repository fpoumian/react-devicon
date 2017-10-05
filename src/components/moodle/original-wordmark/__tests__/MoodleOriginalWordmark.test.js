import React from 'react'
import renderer from 'react-test-renderer'
import MoodleOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MoodleOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
