const sequelize = require('sequelize');
const db = new sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

module.exports = {
  db
};

const Page = db.define('page', {
  title: {
    type: sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: sequelize.STRING,
    allowNull: false
  },
  content: {
    type: sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = { db, Page, User };
