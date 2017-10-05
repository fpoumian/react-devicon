import React from 'react'
import renderer from 'react-test-renderer'
import CakephpOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CakephpOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
