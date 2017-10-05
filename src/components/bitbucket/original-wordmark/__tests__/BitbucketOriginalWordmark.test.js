import React from 'react'
import renderer from 'react-test-renderer'
import BitbucketOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BitbucketOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
