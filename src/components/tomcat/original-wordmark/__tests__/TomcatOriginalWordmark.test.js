import React from 'react'
import renderer from 'react-test-renderer'
import TomcatOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TomcatOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
