import { createSession, isValidSession } from '../services/sessionService';

jest.useFakeTimers();

describe('Session Service', () => {
  it('should create a session and validate it', () => {
    const userId = 1;
    const key = createSession(userId);
    expect(typeof key).toBe('string');
    expect(isValidSession(key)).toBe(userId);
  });

  it('should return null for expired session', () => {
    const key = createSession(2);
    jest.advanceTimersByTime(10 * 60 * 1000 + 1);
    expect(isValidSession(key)).toBeNull();
  });

  it('should return null for unknown session key', () => {
    expect(isValidSession('unknown')).toBeNull();
  });
});
