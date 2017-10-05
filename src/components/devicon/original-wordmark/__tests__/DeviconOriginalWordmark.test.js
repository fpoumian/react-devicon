import React from 'react'
import renderer from 'react-test-renderer'
import DeviconOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DeviconOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
