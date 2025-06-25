//Import function to generate random session keys
import {generateSessionKey} from '../utils/generateSessionKey';

//In-memory session store : sessionKey -> {userId, expiresAt}
const sessions = new Map<string, {userId: number; expiresAt: number}>();

//Create a new session for a given user.
//Generate a session key and stores it with an expiration time of 10 minutes.
export const createSession = (userId: number): string => {
  const sessionKey = generateSessionKey();
  const expiresAt = Date.now() + 10 * 60 * 1000; // Session valid for 10 minutes
  sessions.set(sessionKey, { userId, expiresAt });
  return sessionKey;
};

//Validate a given session key.
//Return the userID if the session is valid and not expired, otherwise null.
export const isValidSession = (sessionKey: string): number | null => {
  const session = sessions.get(sessionKey);
  if (!session || session.expiresAt < Date.now()) return null;

  return session.userId;
};
