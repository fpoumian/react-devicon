import React from 'react'
import renderer from 'react-test-renderer'
import GithubOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GithubOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
