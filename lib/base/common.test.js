import { describe, expect, it } from '@jest/globals'
import { uuid } from './common.js'

describe('Common', () => {
  it('offers a "uuid" function', () => {
    const value = uuid()
    expect(value.length).toBe(36)
  })
})
