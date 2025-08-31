import { hash } from 'bcrypt';

export function hashPassword(value: string): Promise<string> {
  return hash(value, 10);
}
