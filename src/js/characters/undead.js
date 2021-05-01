import { Character } from './tamplate_character/character';

export class Undead extends Character {
  constructor(...args) {
    super(args, 25, 25);
  }
}
