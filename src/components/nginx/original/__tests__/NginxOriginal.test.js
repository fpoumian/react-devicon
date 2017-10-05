import React from 'react'
import renderer from 'react-test-renderer'
import NginxOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NginxOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
