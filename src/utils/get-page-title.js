import defaultSettings from '@/settings'

const title = defaultSettings.title || '图书漂流站'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
