import React from 'react'
import renderer from 'react-test-renderer'
import SketchOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SketchOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
