import { expect, test } from 'vitest'
import { getPermutations } from './Q2.js'

test('getPermutations Test', () => {
    
  expect(getPermutations('a')).toMatchObject(['a'])
  expect(getPermutations('ab')).toMatchObject(['ab', 'ba'])
  expect(getPermutations('abc')).toMatchObject(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  expect(getPermutations('aabb')).toMatchObject(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
})