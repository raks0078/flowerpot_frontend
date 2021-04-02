import React, { Component } from "react"
import stageOne from "../images/stage-1.png"
import "./Launchpad.scss"
class Launchpad extends Component {
  render() {
    return (
      <>
      <div className="launchpad-img">
        <img src={stageOne} />
      </div>
      <div className="launchpad-content">
        <h1>Launchpad</h1>
        <div class="row mb-6 no-gutters">
          <div class="ma-2 col-sm-12 col-md-6 col-lg-4 col-12">
            <div class="pa-2 grey darken-4 rorder ma-5">
              <div class="grey darken-4 grey--text text--lighten-1 v-card v-sheet theme--light">
                <div class="d-flex">
                  <img src="/img/LogoWithBGBorder.4246524c.png" width="60px" height="60px" rounded="" id="icon" />
                  <div class="d-flex justify-center">
                    <h2 class="align-self-center ml-5">
                      <span class="yellow--text">BSCLaunch</span>
                      <span class="yellow--text text--darken-2"> $LAUNCH</span>
                    </h2>
                  </div>
                  <div class="spacer"></div>
                  <span class="rorderGlow v-chip theme--light v-size--small yellow black--text">
                    <span class="v-chip__content"> 0 </span>
                  </span>
                </div>
                <p class="pr-3 pl-3 mt-2">More than a launchpad. We offer fair bot free IDOs to our community and will focus on helping developers start great projects with our help</p>
                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" class="v-progress-linear v-progress-linear--rounded theme--light">
                  <div class="v-progress-linear__background yellow"></div>
                  <div class="v-progress-linear__buffer"></div>
                  <div class="v-progress-linear__determinate yellow"></div>
                  <div class="v-progress-linear__content">
                    <strong>0% </strong>
                  </div>
                </div>
                <div class="font-weight-light text-caption d-flex justify-end">
                  <p> 0 / TBA BNB </p>
                </div>
              </div>
              <div class="grey darken-4 mt-2 v-card v-sheet theme--light">
                <div class="v-data-table grey darken-4 grey--text text--lighten-1 v-data-table--dense theme--light">
                  <div class="v-data-table__wrapper">
                    <table>
                      <tbody>
                        <tr>
                          <td>Total Supply</td>
                          <td>50M</td>
                        </tr>
                        <tr>
                          <td>Presale Supply</td>
                          <td>15M</td>
                        </tr>
                        <tr>
                          <td>Min Investement</td>
                          <td>TBA</td>
                        </tr>
                        <tr>
                          <td>Max Investement</td>
                          <td>TBA</td>
                        </tr>
                        <tr>
                          <td>Rate (Price per BNB)</td>
                          <td>0.002</td>
                        </tr>
                        <tr>
                          <td>Listing Price (per BNB)</td>
                          <td>0.0024</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-center mt-2">
                <a href="javascript:void(0)" class="my-5 rorderGlow v-btn v-btn--is-elevated v-btn--has-bg v-btn--router theme--light v-size--default yellow">
                  <span class="v-btn__content"> Show Project </span>
                </a>
              </div>
            </div>
          </div>
          <div class="ma-2 col-sm-12 col-md-6 col-lg-4 col-12">
            <div aria-busy="true" aria-live="polite" role="alert" id="skeleton" class="v-skeleton-loader mt-5 v-skeleton-loader--is-loading theme--dark">
              <div class="v-skeleton-loader__image v-skeleton-loader__bone"></div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Launchpad
