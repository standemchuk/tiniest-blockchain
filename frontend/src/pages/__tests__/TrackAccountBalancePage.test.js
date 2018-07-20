import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { TrackAccountBalancePage } from '../TrackAccountBalancePage'

beforeEach(() => {
  fetch.resetMocks()
})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <TrackAccountBalancePage classes={{ card: 'card' }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should fetch the data and set requestError to false if successful', () => {
  const tree = shallow(
    <TrackAccountBalancePage classes={{ card: 'card' }} />
  )

  expect(fetch).toBeCalled()
  expect(tree.state().requestError).toBe(false)
})
