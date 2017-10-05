import React from 'react'
import renderer from 'react-test-renderer'
import CodeigniterPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CodeigniterPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
