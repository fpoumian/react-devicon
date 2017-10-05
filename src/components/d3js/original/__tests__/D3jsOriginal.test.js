import React from 'react'
import renderer from 'react-test-renderer'
import D3jsOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<D3jsOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
