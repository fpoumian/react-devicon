import React from 'react'
import renderer from 'react-test-renderer'
import ElmOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ElmOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
