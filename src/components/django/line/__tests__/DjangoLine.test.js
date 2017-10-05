import React from 'react'
import renderer from 'react-test-renderer'
import DjangoLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DjangoLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
