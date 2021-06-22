export function clearToken(value: string | null): string | boolean {
  if (typeof value !== 'string') {
    return false;
  }
  return value.replace(/['"]+/g, '');
}
