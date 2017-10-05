import React from 'react'
import renderer from 'react-test-renderer'
import TypescriptOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TypescriptOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
