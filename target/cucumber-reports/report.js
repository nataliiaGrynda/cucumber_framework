$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/etsy.feature");
formatter.feature({
  "name": "Etsy Landing Page Validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate Etsy main navigation header items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.etsy.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see below menu item links",
  "rows": [
    {
      "cells": [
        "Summer Clothing \u0026 Accessories",
        "Jewelry \u0026 Accessories",
        "Clothing \u0026 Shoes",
        "Home \u0026 Living",
        "Wedding \u0026 Party",
        "Toys \u0026 Entertainment",
        "Art \u0026 Collectibles",
        "Craft Supplies",
        "Gifts \u0026 Gift Cards"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EtsySteps.user_should_see_below_menu_item_links(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/wikipedia.feature");
formatter.feature({
  "name": "Wiki Search Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validate Wikipedia main languages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see below languages around the logo",
  "rows": [
    {
      "cells": [
        "English",
        "日本語",
        "Español",
        "Русский",
        "Deutsch",
        "Français",
        "Italiano",
        "中文",
        "Português",
        "Polski"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeBelowLanguagesAroundTheLogo(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});