import React from 'react'
import renderer from 'react-test-renderer'
import MoodlePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MoodlePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
