import React from 'react'
import renderer from 'react-test-renderer'
import Html5OriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Html5OriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
