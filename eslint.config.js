// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
  },
  {
    ignores: [
      'blog/post/**',
      'blog/weekly/**',
      'public/og/**',
    ],
  },
)
