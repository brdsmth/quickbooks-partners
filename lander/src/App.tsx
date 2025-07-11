
function App() {
  return (
    <div className="container">
      <header>
        <h1>Quickbooks Partners</h1>
        <h3>The #1 community to build, launch, and scale your Quickbooks app  🚀</h3>
      </header>

      <main>
        <section className="hero">
          <p>From first API call to paying customers, Quickbooks Partners is an active slack commmunity for Quickbooks devs. Keep up on the lastest API updates, get feedback on your new app, find others to code with, and maybe find some customers.</p>
          <button className="big-button" onClick={() => window.open('https://join.slack.com/t/quickbookspartners/shared_invite/zt-1xhodjadu-LGxJcYEbwofhOg_YHvx5Mg', '_blank')}>JOIN NOW <br/> (its free!) </button>
        </section>

        <section className="info">
          <h2>30+ members and growing 🚀</h2>

          <p>Working on apps like...</p>
          <ul>
            <li>
              <a href="https://lightweightlabs.com/">
                <img src="/lightweight-labs.png" alt="Lightweight Labs" />
              </a>
            </li>
            <li>
              <a href="https://twinebiller.com.au/">
                <img src="/twine.png" alt="Twine" />
              </a>
            </li>
          </ul>
        </section>

        <section className="features">
          <div className="feature-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Quickbooks Partners</th>
                  <th>Intuit Dev Support</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Active Slack</td>
                  <td>✅</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Community Led</td>
                  <td>✅</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Find Partners</td>
                  <td>✅</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Corporate Runaround</td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
{/* 
        <section className="info">
          <h2>Pricing</h2>
          <p>$0 / month</p>

          <button className="big-button" onClick={() => window.open('https://join.slack.com/t/quickbookspartners/shared_invite/zt-1xhodjadu-LGxJcYEbwofhOg_YHvx5Mg', '_blank')}>JOIN NOW</button>
        </section> */}

      </main>

      <footer>
        <p>Built by <a href="https://x.com/itsdanstaub" target="_blank">Dan Staub</a> and <a href="https://x.com/brdrsmth" target="_blank">Bradley Smith</a></p>
      </footer>
    </div>
  )
}

export default App 