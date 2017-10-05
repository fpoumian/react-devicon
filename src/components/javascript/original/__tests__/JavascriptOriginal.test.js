import React from 'react'
import renderer from 'react-test-renderer'
import JavascriptOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JavascriptOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
