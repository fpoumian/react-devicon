import React from 'react'
import renderer from 'react-test-renderer'
import NpmOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NpmOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
