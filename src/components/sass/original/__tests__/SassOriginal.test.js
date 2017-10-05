import React from 'react'
import renderer from 'react-test-renderer'
import SassOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SassOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
