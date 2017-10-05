import React from 'react'
import renderer from 'react-test-renderer'
import Html5PlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Html5PlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
