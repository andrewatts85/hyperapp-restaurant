import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  console.log(state.companyInfo.title)
  return (
    <section id="TopImg">
      <div class="container">
        <div class="title">
          <h5>Welcome</h5>
          <h1>{state.companyInfo.title}</h1>
          <h1>{state.companyInfo.subTitle}</h1>
        </div>
        <div class="contact-info">
          <div class="booking">Book Table Directly</div>
          <h2>(718) - 219 - 8652</h2>
          <div class="hours">
            Opening Hours <strong> Mon - Fri: </strong> 9am - 9pm <strong> Weekend:</strong> 9am - 11pm
          </div>
        </div>
        <div class="potato"></div>
      </div>
    </section>
  )
}
