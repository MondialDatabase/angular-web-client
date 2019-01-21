# Use official NodeJS 10.x image
FROM node:10

WORKDIR /usr/src/app

# Copy over necessary files for environment setup
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

# Install application dependencies
RUN ["npm", "install", "-g", "@angular/cli@7.2.2"]
RUN ["npm", "install"]

# Install latest stable Google Chrome to run headless tests against
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# Expose Angular CLI server port
EXPOSE 4200

ENTRYPOINT ["npm"]
CMD ["run", "start", "--", "--host", "0.0.0.0"]
