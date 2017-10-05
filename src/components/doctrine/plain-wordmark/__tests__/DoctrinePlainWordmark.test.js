import React from 'react'
import renderer from 'react-test-renderer'
import DoctrinePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DoctrinePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
