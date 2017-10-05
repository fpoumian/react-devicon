import React from 'react'
import renderer from 'react-test-renderer'
import RubyOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RubyOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
