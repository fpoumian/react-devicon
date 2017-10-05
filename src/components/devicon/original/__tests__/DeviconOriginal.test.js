import React from 'react'
import renderer from 'react-test-renderer'
import DeviconOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DeviconOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
