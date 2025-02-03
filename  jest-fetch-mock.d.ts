// jest-fetch-mock.d.ts
declare module 'jest-fetch-mock' {
    export function enableMocks(): void;
    export function resetMocks(): void;
    export function mockResponseOnce(body: string, init?: ResponseInit): void;
    export function mockRejectOnce(error: Error): void;
}