const uuid = require("uuid");
const path = require("path");
const {Titles, Chapters} = require('../models/Models');
const ApiError = require("../error/ApiError");
const { title } = require("process");

class TitleController {
    async create(req, res, next) {
        try {
            const {name, description, author, studio} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName), (err) => {
                if (err) console.log(err);
                else console.log("File Uploaded");
            });

            const titles = await Titles.create({
                name: name,
                description: description,
                author: author,
                studio: studio,
                rating: 0.0,
                amount_of_ratings: 0,
                chapters: 0,
                img: fileName
            });

            return res.json(titles);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res) {
        const titles = await Titles.findAll();
        return res.json(titles);
    }

    async getOneById(req, res) {
        const {id} = req.params;
        const title = await Titles.findOne(
            {
                where: {id}
            },
        )

        return res.json(title);
    }

    // Доработать поиск по имени
    async getOneByName(req, res) {
        const {name} = req.params;
        const title = await Titles.findOne(
            {
                where: {name: name}
            },
        )

        return res.json(title);
    }
}

module.exports = new TitleController();