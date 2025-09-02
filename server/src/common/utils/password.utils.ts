import { hash, compare } from 'bcrypt';

const SALT_OR_ROUNDS = 10;

export function hashPassword(value: string): Promise<string> {
  return hash(value, SALT_OR_ROUNDS);
}

export function verifyPassword(data: string, hashed: string) {
  return compare(data, hashed);
}
