import { Character } from './tamplate_character/character';

export class Daemon extends Character {
  constructor(...args) {
    super(args, 10, 40);
  }
}
