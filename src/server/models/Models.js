const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config({ path: 'C:\MyProject\Git\MangaReadSFEDU\MangaReadSFEDU\.env' });
// const config = require("config");


const DB_URL = "postgres://postgres:postgres@localhost:5433/Manga";

const sequelize = new Sequelize(DB_URL);

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
  schema:'manga'
});

const Titles = sequelize.define('titles', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    studio: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    rating: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    amount_of_ratings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chapters: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
}, {
  schema:'manga'
});

const Comments = sequelize.define('comments', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_title: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
}, {
  schema:'manga'
});

const Chapters = sequelize.define('chapters', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_titles: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    pages: {
      type: DataTypes.JSON,
      allowNull: false,
    },
}, {
  schema:'manga'
});

const Genres = sequelize.define('genres', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
}, {
  schema:'manga'
});

const Page = sequelize.define('pages', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_chapter: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
}, {
  schema:'manga'
});

const Reading = sequelize.define('readings', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_title: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_chapter: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_page: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    readingAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
}, {
  schema:'manga'
});

const TitelesChapter = sequelize.define('titele_chapters', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_titles: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    id_chapters: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
}, {
  schema:'manga'
});

const TitleGenres = sequelize.define('title_genres', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_title: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    id_genre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
}, {
  schema:'manga'
});

module.exports = {
  sequelize,
  Users,
  Titles,
  Comments,
  Chapters,
  Genres,
  Page,
  Reading,
  TitelesChapter,
  TitleGenres
}

