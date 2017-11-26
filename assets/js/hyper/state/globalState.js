var companyInfo = {
  title: 'PRIME STEAK',
  subTitle: 'RESTAURANT',
  phone: '(718) - 219 - 8652',
  location: 'Los Angeles, California'
}

var specialMenuData = [
  {
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, steak, baked potato, or french fries, side of vegetables',
    price: 25
  },
  {
    title: 'Chicken Fingers',
    description: 'Fried eggs, steak, baked potato, or french fries, side of vegetables',
    price: 12
  },
  {
    title: 'All American Hamburger',
    description: 'Fried eggs, steak, baked potato, or french fries, side of vegetables',
    price: 15
  }
]

var reviewsData = [
  {
    company: 'The Food Network',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: 'Best Restaurant in the L.A area!',
    review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
  },
  {
    company: 'The New York Times',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: 'Best Restaurant in the L.A area!',
    review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
  },
  {
    company: 'NBC',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: 'Best Restaurant in the L.A area!',
    review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
  },
  {
    company: 'CWB',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: 'Best Restaurant in the L.A area!',
    review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
  },
  {
    company: 'HBO',
    author: 'Joe Bastiachi',
    authorInfo: 'Winner Of The Chef Masters',
    highlight: 'Best Restaurant in the L.A area!',
    review: 'Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.'
  },
]

var randomQuoteData = [
  {
    author: 'Julia',
    quote: 'Good painting is like good cooking; it can be tasted, but not explained.'
  },
  {
    author: 'Johny',
    quote: 'People who love to eat are always the best people.'
  },
  {
    author: 'James',
    quote: 'Food is our common ground, a universal experience.'
  }
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
}
