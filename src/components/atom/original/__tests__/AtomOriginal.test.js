import React from 'react'
import renderer from 'react-test-renderer'
import AtomOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AtomOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
