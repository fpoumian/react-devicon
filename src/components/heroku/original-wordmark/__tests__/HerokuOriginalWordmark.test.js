import React from 'react'
import renderer from 'react-test-renderer'
import HerokuOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<HerokuOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
