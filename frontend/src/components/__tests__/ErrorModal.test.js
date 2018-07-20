import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import { ErrorModal } from '../ErrorModal'

it('renders correctly', () => {
  const tree = createMount()(
    <ErrorModal
      open
      handleModalClose={jest.fn()}
      handleRetry={jest.fn()}
      classes={{ modal: 'modal', buttonWrapper: 'buttonWrapper' }}
    />)
  expect(tree.html()).toMatchSnapshot()
})
