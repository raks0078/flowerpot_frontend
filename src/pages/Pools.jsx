import React, { Component } from 'react'
import stageOne from "../images/stage-1.png"
import flower from "../images/flower.png"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import "./Pools.scss"
class Pools extends Component {
  render() {
    return (
      <>
      <div className="pools-img">
        <img src={stageOne} />
      </div>
      <div className="pools-content">
        <h1>Pools
          <small>
            <span>Stake CAKE to earn new tokens.</span>
            <span>You can unstake at any time.</span>
            <span>Rewards are calculated per block.</span>
          </small>
        </h1>
        <div className="tool-wrap">
          <div className="tool-left">
            <div className="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="Staked" />
              <label class="form-check-label" for="Staked">Staked only</label>
            </div>
            <div className="btn-group">
              <a href="#" class="btn active" aria-current="page">Live</a>
              <a href="#" class="btn">Finished</a>
            </div>
          </div>
        </div>
        <div className="card-wrap">
          <div className="card">
            <div className="card-head">
              <img src={flower} />
              <div className="right">
                <h5>CAKE Pool</h5>
                <div className="d-flex justify-content-end">
                0.0000
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
              <small>CAKE EARNED</small>
              <button>Unlock Wallet</button>
                <div className="content">
                APR
                  <span>
                  105.76%
                  </span>
                </div>
                <div className="content">
                Your Stake
                  <span>0.0000</span>
                </div>
              </div>
            </div>
            <div className="collapse-wrap">
              <span class="core"><svg viewBox="0 0 24 24" color="secondary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ euusbS"><path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg>Core</span>
              <a data-bs-toggle="collapse" href="#details-1" role="button" aria-expanded="false" aria-controls="details-1">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-1">
                <div class="card card-body">
                  <div className="content">
                  🥞 Total:
                  <span>99,397,885.365</span>
                  </div>
                  <a href="javascript:void(0)">
                  Add CAKE to Metamask
                  <svg viewBox="0 0 35 33" height="15" width="15" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ emkJVH"><path d="m32.9582 1-13.1341 9.7183 2.4424-5.72731z" fill="#e17726" stroke="#e17726"></path><g fill="#e27625" stroke="#e27625"><path d="m2.66296 1 13.01714 9.809-2.3254-5.81802z"></path><path d="m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z"></path><path d="m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z"></path><path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z"></path><path d="m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z"></path><path d="m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z"></path><path d="m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z"></path></g><path d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z" fill="#d5bfb2" stroke="#d5bfb2"></path><path d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z" fill="#d5bfb2" stroke="#d5bfb2"></path><path d="m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z" fill="#233447" stroke="#233447"></path><path d="m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z" fill="#233447" stroke="#233447"></path><path d="m10.8733 28.8721.6495-5.3386-4.13117.1167z" fill="#cc6228" stroke="#cc6228"></path><path d="m24.0982 23.5335.6366 5.3386 3.4946-5.2219z" fill="#cc6228" stroke="#cc6228"></path><path d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z" fill="#cc6228" stroke="#cc6228"></path><path d="m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z" fill="#cc6228" stroke="#cc6228"></path><path d="m8.392 17.6507 3.1049 6.0513-.1039-3.0062z" fill="#e27525" stroke="#e27525"></path><path d="m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z" fill="#e27525" stroke="#e27525"></path><path d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z" fill="#e27525" stroke="#e27525"></path><path d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z" fill="#e27525" stroke="#e27525"></path><path d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z" fill="#f5841f" stroke="#f5841f"></path><path d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z" fill="#f5841f" stroke="#f5841f"></path><path d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z" fill="#c0ac9d" stroke="#c0ac9d"></path><path d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z" fill="#161616" stroke="#161616"></path><path d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z" fill="#763e1a" stroke="#763e1a"></path><path d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z" fill="#763e1a" stroke="#763e1a"></path><path d="m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z" fill="#f5841f" stroke="#f5841f"></path><path d="m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z" fill="#f5841f" stroke="#f5841f"></path><path d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z" fill="#f5841f" stroke="#f5841f"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  View project site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <img src={flower} />
              <div className="right">
                <h5>NRV Pool</h5>
                <div className="d-flex justify-content-end">
                0.0000
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
              <small>NRV EARNED</small>
              <button>Unlock Wallet</button>
                <div className="content">
                APR
                  <span>
                  118.96%
                  </span>
                </div>
                <div className="content">
                Your Stake
                  <span>0.0000</span>
                </div>
              </div>
            </div>
            <div className="collapse-wrap">
              <span class="core"><svg viewBox="0 0 24 24" color="secondary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ euusbS"><path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg>Core</span>
              <a data-bs-toggle="collapse" href="#details-2" role="button" aria-expanded="false" aria-controls="details-2">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-2">
                <div class="card card-body">
                  <div className="content">
                  🥞 Total:
                  <span>190,225.131</span>
                  </div>
                  <div className="content">
                  End:
                  <span>1,720,881</span>
                  </div>
                  <a href="javascript:void(0)">
                  Add NRV to Metamask
                  <svg viewBox="0 0 35 33" height="15" width="15" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ emkJVH"><path d="m32.9582 1-13.1341 9.7183 2.4424-5.72731z" fill="#e17726" stroke="#e17726"></path><g fill="#e27625" stroke="#e27625"><path d="m2.66296 1 13.01714 9.809-2.3254-5.81802z"></path><path d="m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z"></path><path d="m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z"></path><path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z"></path><path d="m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z"></path><path d="m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z"></path><path d="m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z"></path></g><path d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z" fill="#d5bfb2" stroke="#d5bfb2"></path><path d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z" fill="#d5bfb2" stroke="#d5bfb2"></path><path d="m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z" fill="#233447" stroke="#233447"></path><path d="m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z" fill="#233447" stroke="#233447"></path><path d="m10.8733 28.8721.6495-5.3386-4.13117.1167z" fill="#cc6228" stroke="#cc6228"></path><path d="m24.0982 23.5335.6366 5.3386 3.4946-5.2219z" fill="#cc6228" stroke="#cc6228"></path><path d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z" fill="#cc6228" stroke="#cc6228"></path><path d="m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z" fill="#cc6228" stroke="#cc6228"></path><path d="m8.392 17.6507 3.1049 6.0513-.1039-3.0062z" fill="#e27525" stroke="#e27525"></path><path d="m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z" fill="#e27525" stroke="#e27525"></path><path d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z" fill="#e27525" stroke="#e27525"></path><path d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z" fill="#e27525" stroke="#e27525"></path><path d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z" fill="#f5841f" stroke="#f5841f"></path><path d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z" fill="#f5841f" stroke="#f5841f"></path><path d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z" fill="#c0ac9d" stroke="#c0ac9d"></path><path d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z" fill="#161616" stroke="#161616"></path><path d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z" fill="#763e1a" stroke="#763e1a"></path><path d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z" fill="#763e1a" stroke="#763e1a"></path><path d="m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z" fill="#f5841f" stroke="#f5841f"></path><path d="m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z" fill="#f5841f" stroke="#f5841f"></path><path d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z" fill="#f5841f" stroke="#f5841f"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  View project site
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <img src={flower} />
              <div className="right">
                <h5>DEGO Pool</h5>
                <div className="d-flex justify-content-end">
                0.0000
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
              <small>DEGO EARNED</small>
              <button>Unlock Wallet</button>
                <div className="content">
                APR
                  <span>
                  93.70%
                  </span>
                </div>
                <div className="content">
                Your Stake
                  <span>0.0000</span>
                </div>
              </div>
            </div>
            <div className="collapse-wrap">
              <span class="core"><svg viewBox="0 0 24 24" color="secondary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ euusbS"><path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg>Core</span>
              <a data-bs-toggle="collapse" href="#details-3" role="button" aria-expanded="false" aria-controls="details-3">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-3">
                <div class="card card-body">
                  <div className="content">
                  🥞 Total:
                  <span>43,695.380</span>
                  </div>
                  <div className="content">
                  End:
                  <span>1,692,515</span>
                  </div>
                  <a href="javascript:void(0)">
                  Add DEGO to Metamask
                  <svg viewBox="0 0 35 33" height="15" width="15" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ emkJVH"><path d="m32.9582 1-13.1341 9.7183 2.4424-5.72731z" fill="#e17726" stroke="#e17726"></path><g fill="#e27625" stroke="#e27625"><path d="m2.66296 1 13.01714 9.809-2.3254-5.81802z"></path><path d="m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z"></path><path d="m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z"></path><path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z"></path><path d="m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z"></path><path d="m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z"></path><path d="m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z"></path></g><path d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z" fill="#d5bfb2" stroke="#d5bfb2"></path><path d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z" fill="#d5bfb2" stroke="#d5bfb2"></path><path d="m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z" fill="#233447" stroke="#233447"></path><path d="m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z" fill="#233447" stroke="#233447"></path><path d="m10.8733 28.8721.6495-5.3386-4.13117.1167z" fill="#cc6228" stroke="#cc6228"></path><path d="m24.0982 23.5335.6366 5.3386 3.4946-5.2219z" fill="#cc6228" stroke="#cc6228"></path><path d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z" fill="#cc6228" stroke="#cc6228"></path><path d="m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z" fill="#cc6228" stroke="#cc6228"></path><path d="m8.392 17.6507 3.1049 6.0513-.1039-3.0062z" fill="#e27525" stroke="#e27525"></path><path d="m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z" fill="#e27525" stroke="#e27525"></path><path d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z" fill="#e27525" stroke="#e27525"></path><path d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z" fill="#e27525" stroke="#e27525"></path><path d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z" fill="#f5841f" stroke="#f5841f"></path><path d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z" fill="#f5841f" stroke="#f5841f"></path><path d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z" fill="#c0ac9d" stroke="#c0ac9d"></path><path d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z" fill="#161616" stroke="#161616"></path><path d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z" fill="#763e1a" stroke="#763e1a"></path><path d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z" fill="#763e1a" stroke="#763e1a"></path><path d="m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z" fill="#f5841f" stroke="#f5841f"></path><path d="m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z" fill="#f5841f" stroke="#f5841f"></path><path d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z" fill="#f5841f" stroke="#f5841f"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  View project site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Pools
