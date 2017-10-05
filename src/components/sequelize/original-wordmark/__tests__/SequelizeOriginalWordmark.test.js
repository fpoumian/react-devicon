import React from 'react'
import renderer from 'react-test-renderer'
import SequelizeOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SequelizeOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
