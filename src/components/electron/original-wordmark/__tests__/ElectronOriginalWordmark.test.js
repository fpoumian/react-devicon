import React from 'react'
import renderer from 'react-test-renderer'
import ElectronOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ElectronOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
