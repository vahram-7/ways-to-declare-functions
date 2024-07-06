const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
[foo, bar] = [bar, foo];
const randomBoolean = () => Math.random() >= 0.5;