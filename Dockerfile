# This image is based off of the Official Node.js 10.x image.
# Google Chrome is added to the image for supporting browser-based testing.
FROM mondialdatabase/node-chrome:node-10-chrome-71

WORKDIR /usr/src/app

# Copy over necessary files for environment setup
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

# Install application dependencies
RUN ["npm", "install"]

# Expose Angular CLI server port
EXPOSE 4200

ENTRYPOINT ["npm"]
CMD ["run", "start", "--", "--host", "0.0.0.0"]
