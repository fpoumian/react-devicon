import React from 'react'
import renderer from 'react-test-renderer'
import RubyminePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RubyminePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
