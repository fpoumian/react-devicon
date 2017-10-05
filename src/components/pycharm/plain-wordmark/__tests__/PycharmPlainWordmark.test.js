import React from 'react'
import renderer from 'react-test-renderer'
import PycharmPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PycharmPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
