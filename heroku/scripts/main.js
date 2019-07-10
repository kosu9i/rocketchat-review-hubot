module.exports = (robot) => {
    // BitBucketのWebhook用
    robot.router.post("/bitbucket-webhook", (req, res) => {
        // console.info("PORT: " + process.env.PORT);
        console.info(JSON.stringify(req.body, null, "\t"));
        if (req.body.pullrequest) {

            reviewers = [];
            req.body.pullrequest.reviewers.forEach(function(item, index) {
                reviewers.push(item.display_name + "さん");
            });

            message = {
                avatar: process.env.BOT_AVATAR,
                alias: process.env.BOT_NAME,
                msg: ":new: 新しいレビュー依頼がありました。\nレビュアーの皆様、お時間あればよろしくお願いします。 :grinning:",


                attachments: [{
                    "title": req.body.pullrequest.title,
                    "title_link": req.body.pullrequest.links.html.href,
                    "color": "#FF0000",
                    "fields": [{
                        "short": false,
                        "title": "Description:",
                        "value": req.body.pullrequest.description
                    },{
                        "short": true,
                        "title": "Reviewers:",
                        "value": reviewers.join(", ")
                    },{
                        "short": true,
                        "title": "Author:",
                        "value": req.body.pullrequest.author.display_name
                    }]
                }]
            };
            robot.send({room: process.env.ROCKETCHAT_ROOM}, message);
            res.end();
        }
    });

    robot.respond(/.*/i, (res) => {
        message = {
            avatar: process.env.BOT_AVATAR,
            alias: process.env.BOT_NAME,
            msg: "ﾊﾅｼｶｹﾅｲﾃﾞｸﾀﾞｻｲ.ｶｲﾜﾃﾞｷﾅｲbotﾃﾞｽ."
        };
        robot.send({room: process.env.ROCKETCHAT_ROOM}, message);
    });

};

