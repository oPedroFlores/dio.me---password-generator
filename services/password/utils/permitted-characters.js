// utils/permitted-characters.js
import { config } from '../../../config/env.js';

export default function permittedCharacters() {
  const characters = [];
  if (config.UPPERCASE_LETTERS)
    characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (config.LOWERCASE_LETTERS)
    characters.push(...'abcdefghijklmnopqrstuvwxyz');
  if (config.NUMBERS) characters.push(...'0123456789');
  if (config.SPECIAL_CHARACTERS) characters.push(...'!@#$%^&*()_+[]{}|;:,.<>?');

  return characters;
}
