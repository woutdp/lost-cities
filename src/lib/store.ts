import { writable } from 'svelte/store'

export const cards = writable({ player1: [], player2: [] })
