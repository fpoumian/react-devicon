import React from 'react'
import renderer from 'react-test-renderer'
import RedhatPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RedhatPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
