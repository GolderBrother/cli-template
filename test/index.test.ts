import { assert, it } from 'vitest'
import { name } from '../src'

it('simple', () => {
  assert.equal(name, 'james-cli-template')
})
