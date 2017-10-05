import React from 'react'
import renderer from 'react-test-renderer'
import ErlangOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ErlangOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
