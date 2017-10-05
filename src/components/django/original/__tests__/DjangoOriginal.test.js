import React from 'react'
import renderer from 'react-test-renderer'
import DjangoOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DjangoOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
