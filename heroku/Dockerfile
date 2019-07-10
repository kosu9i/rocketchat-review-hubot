FROM rocketchat/hubot-rocketchat:latest

ENV ROCKETCHAT_URL https://xxxxxxxx.rocket.chat
ENV ROCKETCHAT_ROOM xxxxxxxxxxx
ENV ROCKETCHAT_USER xxxxxxxxxxxx
ENV ROCKETCHAT_PASSWORD xxxxxxxxxxxx
ENV BOT_NAME test-bot-name
ENV BOT_AVATAR https://www.logolynx.com/images/logolynx/0d/0d28dd1a0f0746030842168d7fbc39a5.jpeg
ENV EXTERNAL_SCRIPTS hubot-seen,hubot-links,hubot-diagnostics
ENV TZ Asia/Tokyo
ENV PORT $PORT

COPY ./scripts /home/hubot/scripts

CMD bin/hubot --adapter rocketchat
