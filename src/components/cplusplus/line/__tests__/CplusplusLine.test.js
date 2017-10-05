import React from 'react'
import renderer from 'react-test-renderer'
import CplusplusLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CplusplusLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
