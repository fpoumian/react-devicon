import React from 'react'
import renderer from 'react-test-renderer'
import CakephpPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CakephpPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
