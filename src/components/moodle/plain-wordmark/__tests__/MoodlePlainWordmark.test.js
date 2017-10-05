import React from 'react'
import renderer from 'react-test-renderer'
import MoodlePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MoodlePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
