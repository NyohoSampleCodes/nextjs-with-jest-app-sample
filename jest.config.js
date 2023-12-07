const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: [
    'node_modules/(?!(@orgajs/reorg-rehype|@orgajs/reorg|oast-to-hast|unist-builder|hast-util-from-parse5|hastscript|property-information|hast-util-parse-selector|space-separated-tokens|comma-separated-tokens|vfile-location|web-namespaces|rehype-stringify|hast-util-to-html|html-void-elements|zwitch|stringify-entities|character-entities-legacy|character-entities-html4|ccount|hast-util-whitespace|unified|bail|devlop|is-plain-obj|trough|vfile|vfile-message|unist-util-stringify-position|@orgajs/reorg-parse|orga|text-kit)/)',
  ]
})
