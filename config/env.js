import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PASSWORD_LENGTH: parseInt(process.env.PASSWORD_LENGTH, 10) || 12,
  UPPERCASE_LETTERS: process.env.UPPERCASE_LETTERS === 'true',
  LOWERCASE_LETTERS: process.env.LOWERCASE_LETTERS === 'true',
  NUMBERS: process.env.NUMBERS === 'true',
  SPECIAL_CHARACTERS: process.env.SPECIAL_CHARACTERS === 'true',
};
