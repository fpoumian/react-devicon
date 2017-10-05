import React from 'react'
import renderer from 'react-test-renderer'
import GooglePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GooglePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
