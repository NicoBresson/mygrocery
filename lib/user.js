import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);

export function createUser({ username, password }) {
    db.get('users')
      .push({ name: username, password:password})
      .write()
    return { username: username, cratedAt: Date.now() }
}

export function findAllUsers() {
  const users = db.get('users').value()
  return users
}
