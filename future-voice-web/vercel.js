module.exports = {
  "functions": {
    "dist/server/index.js": {
      "runtime": "nodejs22.x"
    }
  },
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/server/index.js"
    }
  ]
};