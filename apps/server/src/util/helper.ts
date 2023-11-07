export function isProdEnv(): boolean {
  if (process.env['DEVELOPMENT_ENV']) {
    return false;
  }
  return true;
}
