import React from 'react'
import renderer from 'react-test-renderer'
import SketchOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SketchOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
