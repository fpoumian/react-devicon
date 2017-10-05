import React from 'react'
import renderer from 'react-test-renderer'
import DeviconPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DeviconPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
