
function App() {
  return (
    <div className="container">
      <header>
        <h1>QuickBooks Partners</h1>
        <p className="subtitle">The #1 community to build, launch, and scale your QuickBooks app 🚀</p>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <h2 id="hero-heading" className="sr-only">Join Our Developer Community</h2>
          <p>From first API call to paying customers, QuickBooks Partners is an active Slack community for QuickBooks developers. Keep up on the latest API updates, get feedback on your new app, find others to code with, and connect with potential customers.</p>
          <button 
            className="big-button" 
            onClick={() => window.open('https://join.slack.com/t/quickbookspartners/shared_invite/zt-1xhodjadu-LGxJcYEbwofhOg_YHvx5Mg', '_blank')}
            aria-label="Join QuickBooks Partners Slack community for free"
          >
            JOIN NOW <br/> (it's free!)
          </button>
        </section>

        <section className="info" aria-labelledby="community-stats">
          <h2 id="community-stats">30+ QuickBooks Developers and Growing 🚀</h2>

          <p>Our community members are building innovative QuickBooks applications:</p>
          <ul role="list" aria-label="Featured QuickBooks applications from community members">
            <li>
              <a href="https://lightweightlabs.com/" aria-label="Visit Lightweight Labs - QuickBooks integration platform" title="Lightweight Labs - QuickBooks integration platform">
                <img src="/lightweight-labs.png" alt="Lightweight Labs - QuickBooks integration platform" loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://twinebiller.com.au/" aria-label="Visit Twine - QuickBooks billing solution" title="Twine - QuickBooks billing solution">
                <img src="/twine.png" alt="Twine - QuickBooks billing solution" loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://sendtosheets.com/" aria-label="Visit Send to Sheets - QuickBooks to Google Sheets integration" title="Send to Sheets - QuickBooks to Google Sheets integration">
                <img src="/send-to-sheets.png" alt="Send to Sheets - QuickBooks to Google Sheets integration" loading="lazy" />
              </a>
            </li>
          </ul>
        </section>

        <section className="features" aria-labelledby="comparison-heading">
          <h2 id="comparison-heading">Why Choose QuickBooks Partners?</h2>
          <div className="feature-table">
            <table role="table" aria-label="Comparison between QuickBooks Partners and Intuit Developer Support">
              <caption className="sr-only">Feature comparison showing advantages of QuickBooks Partners community</caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">QuickBooks Partners</th>
                  <th scope="col">Intuit Dev Support</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Active Slack Community</th>
                  <td aria-label="Available">✅</td>
                  <td aria-label="Not available">❌</td>
                </tr>
                <tr>
                  <th scope="row">Community Led Support</th>
                  <td aria-label="Available">✅</td>
                  <td aria-label="Not available">❌</td>
                </tr>
                <tr>
                  <th scope="row">Find Development Partners</th>
                  <td aria-label="Available">✅</td>
                  <td aria-label="Not available">❌</td>
                </tr>
                <tr>
                  <th scope="row">Corporate Bureaucracy</th>
                  <td aria-label="Not present">❌</td>
                  <td aria-label="Present">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer>
        <p>Built by <a href="https://x.com/itsdanstaub" target="_blank">Dan Staub</a> and <a href="https://x.com/brdrsmth" target="_blank">Bradley Smith</a></p>
      </footer>
    </div>
  )
}

export default App 