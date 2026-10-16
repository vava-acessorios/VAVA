/**
 * Resolves local and remote asset paths to ensure compatibility with
 * subpaths such as GitHub Pages (e.g. https://username.github.io/repo-name/).
 */
export function resolveAsset(path: string | undefined): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  const cleanPath = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || './';
  return `${base.endsWith('/') ? base : `${base}/`}${cleanPath}`;
}
