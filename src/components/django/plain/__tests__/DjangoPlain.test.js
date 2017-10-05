import React from 'react'
import renderer from 'react-test-renderer'
import DjangoPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DjangoPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
