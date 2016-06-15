/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findNext: function (req, res) {
        var now = new Date(Date.now());
       
        Session.find({ beginDate: { ">=" : now }, sort: "beginDate ASC" }, function (err, found) {
            if (err) return res.json(500, { err: "could not retreive any sessions" });

            // Because we love being RESTfull-ish
            if (found.length == 0) return res.json(204);

            return res.json(200, found);
        });
    },
};

