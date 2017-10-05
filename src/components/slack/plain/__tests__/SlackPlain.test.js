import React from 'react'
import renderer from 'react-test-renderer'
import SlackPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SlackPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
