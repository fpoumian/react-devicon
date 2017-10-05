import React from 'react'
import renderer from 'react-test-renderer'
import GitlabPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GitlabPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
