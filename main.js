import { moo } from './moo.js';
import { say } from 'cowsay';


const message = moo('there');

console.log(say({ text: message}));

