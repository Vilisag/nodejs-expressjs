class HomeController {
    async index(req, res) {
        return res.render('Home');
    }

    async search(req, res) {
        return res.render('Search');
    }
}

module.exports = new HomeController();
