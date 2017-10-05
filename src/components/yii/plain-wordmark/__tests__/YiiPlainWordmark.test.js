import React from 'react'
import renderer from 'react-test-renderer'
import YiiPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<YiiPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
