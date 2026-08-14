import type { PluginOption } from 'vite'

export const injectSeo = (env: Record<string, string>): PluginOption => ({
  name: 'inject-seo',
  transformIndexHtml(html) {
    const title = env.VITE_SITE_DEFAULT_TITLE || ''
    const keywords = env.VITE_SITE_DEFAULT_KEYWORDS || ''
    const description = env.VITE_SITE_DEFAULT_DESCRIPTION || ''
    return html
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
      .replace(/(<meta name="keywords" content=")[^"]*(")/, `$1${keywords}$2`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
  }
})
