
import { appState } from './appState'

beforeEach(() => {
  appState.reset()
})

test('Store a list of items', ()=> {
  expect(appState.items).toEqual([])
})

test('Allow maintaining as *current* string as it gets typed', () => {
  expect(appState.currentItem).toEqual('')

  appState.changeCurrentItem('a')
  expect(appState.currentItem).toEqual('a')

  appState.changeCurrentItem('ab')
  expect(appState.currentItem).toEqual('ab')
})

test('Ability to add this *current* string to the list of items', ()=> {
  appState.changeCurrentItem('ab')
  appState.addCurrentItem()

  expect(appState.items).toEqual(['ab'])
})

test('Option to reset the item and the current string', ()=>{
  appState.changeCurrentItem('ab')
  appState.addCurrentItem()
  appState.reset()

  expect(appState.currentItem).toEqual('')
  expect(appState.items).toEqual([])
})



