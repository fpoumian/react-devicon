import React from 'react'
import renderer from 'react-test-renderer'
import SequelizePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SequelizePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
