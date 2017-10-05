import React from 'react'
import renderer from 'react-test-renderer'
import CakephpPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CakephpPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
