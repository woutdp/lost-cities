import { writable } from 'svelte/store'

export const cards = writable([])

// {player: 1, color: "green", value: 0}

// count.set(1); // does nothing

// const unsubscribe = count.subscribe((value) => {
// console.log(value);
// }); // logs 'got a subscriber', then '1'

// unsubscribe(); // logs 'no more subscribers'
