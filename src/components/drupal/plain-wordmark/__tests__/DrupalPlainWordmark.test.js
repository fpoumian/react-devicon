import React from 'react'
import renderer from 'react-test-renderer'
import DrupalPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DrupalPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
