import React from 'react'
import renderer from 'react-test-renderer'
import SlackPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SlackPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
