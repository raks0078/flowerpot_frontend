import React, { Component } from 'react'
import "./TierList.scss"
class TierList extends Component {
  render() {
    return (
      <>
      <div className="tierlist-content">
        <h1>Tierlist</h1>
        <p>Here you can see our upcoming milestones
if you want to be always up to date, our fastes socialmedia platfrom is 
<a href="https://www.t.me/BSC_Launch">Telegram</a>
</p>
<p>
  <b>First Stage</b>
</p>
<p>First we programmed our platform and got our solidity code audited to provide our customers with a working platform
</p>
<ul>
  <li>- 15.3. Socialmedia channels starter</li>
  <li>- 16.3. Whitlisting requirement for $FLOWER Token IDO removed</li>
  <li>- 16.3. First security audit returned with 0 High/Medium and 2 low risk factors</li>
  <li>- 17.3. Tierlist added</li>
  <li>- 18.3. New logo redesign</li>
  <li>- 24.4. Meeting with german/bulgarien lawyer to rule out legal issues</li>
  <li>- 24.4. Preparation for company relocation from Germany to Bulgaria</li>
  <li>- 2.4. Second security audit with 0 high/medium/low risk factors</li>
  <li>- 3.4. New $flower Token IDO dates published</li>
  <li>- 5.4. New Community mod hired</li>
  <li>- 6.4. Relocation to Bulgaria completed</li>
</ul>
<p className="text-right">
  <small>Development & audits (Q1 2021)</small>
</p>
<p>
  <b>Second Stage</b>
</p>
<p>After we got our platform up and running, we will have our IDO for our $FLOWER Token, you will need to have $FLOWER Token in your wallet and take part in activities to get in the IDOs which we are holding on our launchpad. Marketing will be a mayor part of our further efforts, as well as finding trustworthy partners for IDOs and inhouse projects.
</p>
<p className="text-right">
  <small>$FLOWER Token IDO & Marketing (Q2 2021)</small>
</p>
<p>
  <b>Third Stage</b>
</p>
<p>The first IDO we will be held will be an inhouse project. Reason for this are potential rugpulls by an outside team which would be a total disaster and would probably end our moon mission right there. We will take our time to evaluate all requests for IDOs we are getting and carefully asses them to filter out the low risk ones</p>
<p className="text-right">
  <small>IDOs from in- and outside (Q2 2021)</small>
</p>
<p>
  <b>Fourth Stage (To be announced)</b>
</p>
<p className="text-right">
  <small>Getting bigger, getting better (Q2/Q3 2021)</small>
</p>
<p>
  <b>Fifth Stage (To be announced)</b>
</p>
<p>Fifth Stage
To participate in any IDO you need to hold a minimum of 250 $Flower Tokens
to learn more about our tier system check out our 
<a href="https://bsclaunch.medium.com/new-tier-system-b05a14e00072">Medium article</a>
</p>
<p className="text-right">
  <small>Fifth Stage</small>
</p>
        <div className="card-wrap">
          <div className="card">
            <div className="card-head">
              <h5>Normal Tier</h5>
            </div>
            <div className="card-body">
              <p>Holding stack<br/> $Flower required</p>
              <span>250</span>
              <div className="table-wrap">
                <div className="content">
                Holding period
                  <span>7 Days</span>
                </div>
                <div className="content">
                Guaranteed allocation
                  <span>Yes</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
            Share of Tokens
              <span>1x</span>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h5>Medium Tier</h5>
            </div>
            <div className="card-body">
              <p>Holding stack<br/> $Flower required</p>
              <span>500</span>
              <div className="table-wrap">
                <div className="content">
                Holding period
                  <span>7 Days</span>
                </div>
                <div className="content">
                Guaranteed allocation
                  <span>Yes</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
            Share of Tokens
              <span>2.5x</span>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h5>High Tier</h5>
            </div>
            <div className="card-body">
              <p>Holding stack<br/> $Flower required</p>
              <span>1.000</span>
              <div className="table-wrap">
                <div className="content">
                Holding period
                  <span>7 Days</span>
                </div>
                <div className="content">
                Guaranteed allocation
                  <span>Yes</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
            Share of Tokens
              <span>6x</span>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h5>God Tier</h5>
            </div>
            <div className="card-body">
              <p>Holding stack<br/> $Flower required</p>
              <span>2.000</span>
              <div className="table-wrap">
                <div className="content">
                Holding period
                  <span>7 Days</span>
                </div>
                <div className="content">
                Guaranteed allocation
                  <span>Yes</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
            Share of Tokens
              <span>15x</span>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default TierList
