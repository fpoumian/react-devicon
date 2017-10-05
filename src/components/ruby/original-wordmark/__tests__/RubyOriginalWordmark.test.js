import React from 'react'
import renderer from 'react-test-renderer'
import RubyOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RubyOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
