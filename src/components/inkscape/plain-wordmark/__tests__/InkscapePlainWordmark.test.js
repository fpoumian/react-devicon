import React from 'react'
import renderer from 'react-test-renderer'
import InkscapePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<InkscapePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
