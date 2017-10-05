import React from 'react'
import renderer from 'react-test-renderer'
import MoodleOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MoodleOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
