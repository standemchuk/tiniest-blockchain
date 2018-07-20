import { shallow } from 'enzyme'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import App from './App'

it('renders without crashing', () => {
  shallow(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
})

it('creates userId if not created', () => {
  renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  expect(localStorage.getItem).toBeCalledWith('userId')
  expect(localStorage.setItem).toBeCalled()
})
