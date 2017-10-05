import React from 'react'
import renderer from 'react-test-renderer'
import Html5Plain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Html5Plain />).toJSON()
  expect(tree).toMatchSnapshot()
})
