import React from 'react'
import renderer from 'react-test-renderer'
import ProtractorPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ProtractorPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
