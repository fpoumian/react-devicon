import React from 'react'
import renderer from 'react-test-renderer'
import TrelloPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TrelloPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
