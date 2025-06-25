//Generate a random session key string.
//Use base-36 characters (letters and numbers), converts to uppercase.
//Take an 8-character substring for simplicity.
export const generateSessionKey = (): string => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
};