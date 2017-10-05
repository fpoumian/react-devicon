import React from 'react'
import renderer from 'react-test-renderer'
import ElmOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ElmOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
