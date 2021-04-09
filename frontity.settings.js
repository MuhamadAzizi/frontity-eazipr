const settings = {
  "name": "eazipr-frontity",
  "state": {
    "frontity": {
      "url": "https://eazipr.tech",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "eazipr-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://eazipr.tech"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
