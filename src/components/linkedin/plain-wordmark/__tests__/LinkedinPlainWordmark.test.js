import React from 'react'
import renderer from 'react-test-renderer'
import LinkedinPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LinkedinPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
