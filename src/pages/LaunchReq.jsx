import React, { Component } from 'react'
import "./LaunchReq.scss"
class LaunchReq extends Component {
  render() {
    return (
      <>
     <div className="launchreq-content">
        <h1>Token/Presale</h1>
        <p>
          <b>About</b>
        </p>
        <p>We at Flowerpot Launchpad  provide a platform that helps bringing investors and great projects together. We look for projects which bring value to the BSC network because real value is in the long run the biggest factor for community and price growth.<br/><br/>

Looking for outside project is not the only thing we are working on. Being a driving force in innovation and bringing adaption to non-crypto users is our mid to end goal. Educating new Developers and helping them find good ideas for projects will be a major part in our efforts. So, you will see a lot of projects that are actively developed with our help.<br/><br/>

Our launchpad is the first step in that direction. We will offer a fair start for our community. If you are holding $Flower tokens you will be able to invest in the IDO of good projects that will be secured from bots buying up the supply in seconds. You can have a look at our Roadmap (https:/flowerpot.finance/Roadmap) to see where we are right now.<br/><br/>

Join us on our social media platforms (Telegram is the most important one) to be updated on how things are going so far.
</p>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Project Name" />
            <input type="text" className="form-control" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Website" />
            <input type="text" className="form-control" placeholder="Telegram" />
          </div>
          <div className="form-group">
            <textarea type="text" className="form-control" placeholder="Describe your projects functions, which problems it going to solve" rows="5"></textarea>
          </div>
          <div className="form-group">
            <button>Send Request</button>
          </div>
        </form>
      </div>
      </>
    )
  }
}

export default LaunchReq
