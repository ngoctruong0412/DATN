
const db = require('../config/db');

class User {
    static getAllUsers(limit, offset, result) {
        db.query('SELECT * FROM users LIMIT ? OFFSET ?', [limit, offset], (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
    }

    static getUserCount(result) {
        db.query('SELECT COUNT(*) as count FROM users', (err, res) => {
            if (err) return result(err, null);
            result(null, res[0].count);
        });
    }

    static updateUserStatus(user_id, status, result) {
        db.query('UPDATE users SET status = ? WHERE id = ?', [status, user_id], (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
    }
}

module.exports = User;
