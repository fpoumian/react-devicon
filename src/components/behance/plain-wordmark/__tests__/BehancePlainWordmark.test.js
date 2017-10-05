import React from 'react'
import renderer from 'react-test-renderer'
import BehancePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BehancePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
