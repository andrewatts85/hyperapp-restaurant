import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>Meh whatever adaptogen gluten-free, franzen fashion axe tumblr skateboard flannel plaid. Pok pok wayfarers hammock, bicycle rights mixtape ugh lyft. Pitchfork vexillologist before they sold out literally semiotics franzen fam butcher la croix green juice. Letterpress paleo chambray tote bag vinyl brooklyn gentrify austin fashion axe distillery hammock seitan.</p>
            <div class="quote">"The best steak in the town of Huntington" - <strong>Thomas Eggsy</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>
          </div>
          <div class="col-md-6">
            <div class="video-img"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
