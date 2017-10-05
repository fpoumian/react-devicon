import React from 'react'
import renderer from 'react-test-renderer'
import RubyPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RubyPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
