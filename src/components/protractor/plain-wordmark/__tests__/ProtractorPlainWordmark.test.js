import React from 'react'
import renderer from 'react-test-renderer'
import ProtractorPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ProtractorPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
