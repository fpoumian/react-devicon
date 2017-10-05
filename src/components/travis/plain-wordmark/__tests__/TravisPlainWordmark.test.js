import React from 'react'
import renderer from 'react-test-renderer'
import TravisPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TravisPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
