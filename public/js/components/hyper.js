webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  reviewLeftClicked: reviewLeftClicked,
  reviewRightClicked: reviewRightClicked
};

function reviewLeftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
}

function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(20);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(19);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'PRIME STEAK',
  subTitle: 'RESTAURANT',
  phone: '(718) - 219 - 8652',
  location: 'Los Angeles, California'
};

var specialMenuData = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, steak, baked potato, or french fries, side of vegetables',
  price: 25
}, {
  title: 'Chicken Fingers',
  description: 'Fried eggs, steak, baked potato, or french fries, side of vegetables',
  price: 12
}, {
  title: 'All American Hamburger',
  description: 'Fried eggs, steak, baked potato, or french fries, side of vegetables',
  price: 15
}];

var reviewsData = [{
  company: 'The Food Network',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
}, {
  company: 'The New York Times',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
}, {
  company: 'NBC',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
}, {
  company: 'CWB',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
}, {
  company: 'HBO',
  author: 'Joe Bastiachi',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
}];

var randomQuoteData = [{
  author: 'Julia',
  quote: 'Good painting is like good cooking; it can be tasted, but not explained.'
}, {
  author: 'Johny',
  quote: 'People who love to eat are always the best people.'
}, {
  author: 'James',
  quote: 'Food is our common ground, a universal experience.'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { clas: "comp-title" },
        "Contat Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              "435 Main St",
              (0, _hyperapp.h)("br", null),
              "Hollywood, CA 12402"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@primesteak.com" },
                " info@primesteak.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "310-346-6789"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday and Sunday: Bookings ",
              (0, _hyperapp.h)("br", null),
              "from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily ",
              (0, _hyperapp.h)("br", null),
              "from 6pm - 9:30pm"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-facebook-square", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.twitter.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.google.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-google-plus", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.youtube.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-youtube-play", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2017 Copyright"
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best steak in the town of Huntington\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Eggsy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote', style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2)0, #000 100%),url("http://amorysabor.com/wp-content/uploads/2016/04/32396-vegetables-1280x800-photography-wallpaper-960x600.jpg")'
      } },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"Good painting is like good cooking; it can be tasted, but not explained."'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        '- Johny -'
      )
    )
  );
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "REVIEWS"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        state.reviewsData[state.reviewStatus.currentReview].highlight
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        " - ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "http://cdn.playbuzz.com/cdn/76d5533e-7e04-48ca-973e-8e05c34428ca/61a58a6a-7780-41d5-ac94-77891e70c103.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickBTN, "class": "fa fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? 'ready' : ''), "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN, "class": "fa fa-arrow-right " + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready'), "aria-hidden": "true" })
          )
        )
      )
    )
  );
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  console.log(state.companyInfo.title);
  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.subTitle
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "booking" },
          "Book Table Directly"
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          "(718) - 219 - 8652"
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "hours" },
          "Opening Hours ",
          (0, _hyperapp.h)(
            "strong",
            null,
            " Mon - Fri: "
          ),
          " 9am - 9pm ",
          (0, _hyperapp.h)(
            "strong",
            null,
            " Weekend:"
          ),
          " 9am - 11pm"
        )
      ),
      (0, _hyperapp.h)("div", { "class": "potato" })
    )
  );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[21]);