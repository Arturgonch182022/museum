module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // Добавьте эту строку
};