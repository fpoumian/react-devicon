import React from 'react'
import renderer from 'react-test-renderer'
import FoundationPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FoundationPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
