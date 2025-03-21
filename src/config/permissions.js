module.exports = {
  'users.read': ['admin', 'user'],
  'users.write': ['admin'],
  'users.delete': ['admin'],
  'auth.login': ['guest', 'user', 'admin'],
  'auth.register': ['guest'],
};