import React from 'react'
import renderer from 'react-test-renderer'
import PhpstormOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PhpstormOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
