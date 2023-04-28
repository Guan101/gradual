import Loading from '..'
import { createApp } from 'vue'

test('test Loading use', () => {
  const app = createApp({}).use(Loading)
  expect(app.component(Loading.name)).toBeTruthy()
})
