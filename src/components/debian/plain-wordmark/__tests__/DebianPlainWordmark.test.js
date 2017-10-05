import React from 'react'
import renderer from 'react-test-renderer'
import DebianPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DebianPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
