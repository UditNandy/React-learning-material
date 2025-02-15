const Communication = () => {
  return (
    <>
      <div className="wrapper">
        <h3>Short Polling</h3>
        <ul>
          <li>
            Polling means making multiple api calls to the server at a
            particular interval to see if the data is updated.
          </li>
          <li>
            Once we get the required or the updated data we stop making the api
            calls.
          </li>
          <li>
            This is a good option but only when we know that our user base is
            small because with increase in user base the amount of unnecessary
            api calls will increase and this will put load on server.
          </li>
          <li>
            This is actually a short lived connection and no persistant
            connection is being made as the connection quickly ends as soon as
            the server sends the response of its respective api call.
          </li>
          <li>
            Here the resource utilisation can be minimum but only if we are
            making api calls at a decent interval and the number of users making
            the same api call is minimum.
          </li>
          <li>
            The simplest way to start polling is using setInterval method of js.
          </li>
          <li>
            <div>
              Always remeber to handle the below 2 cases while using polling.
              <ul>
                <li>
                  Whenever you job is done or you dont need polling anymore make
                  sure to clear the interval, or else the api calls will keep on
                  hapening un necessarily.
                </li>
                <li>
                  Make sure to do proper exception handling for cases where you
                  might get any error response durring polling.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <strong>Examples</strong>
              <ul>
                <li>Notifications</li>
                <li>Analytics dashboard</li>
                <li>Payment success screen</li>
                <li>News apps</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <h3>Long Polling</h3>
        <ul>
          <li>
            This is similar to short polling but here you make the request and
            the server responds only when there is an updated data, or if it
            takes long time to update data you can get a timeout error.
          </li>
          <li>
            Here the connection is long lived as the server holds the request
            till there is any update in data/db or timeout.
          </li>
          <li>
            Here the number of api calls that we were making durring short
            polling reduces.
          </li>
          <li>
            The issue with this type of connection is when the user base is
            large then there will be enough load on the server as the connection
            time for each request is quite long.
          </li>
          <li>
            Here the changes has to be made in server in order to support long
            polling.
          </li>
          <li>
            In many cases we might send some id from client side which will be
            used by the server to compare and give the updated response.
          </li>
          <li>
            In this case we might make multiple api calls but only if we dont
            get the desired response from the previous api call.
          </li>
          <li>
            <div>
              <strong>Examples</strong>
              <ul>
                <li>Payment success screen</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <h3>Web Socket</h3>
        <ul>
          <li>
            It works with full duplex communication. Like the client dont need
            to send a request to the server to get the response.
          </li>
          <li>
            The connection has to be established in the begining and once the
            connection is established the client and server can communicate with
            each other.
          </li>
        </ul>

        <h4>Steps to establish a socket connection</h4>
        <ul>
          <li>
            <strong>Handshake</strong> happens from the client where the client
            sends a HTTP upgrade request
          </li>
          <li>HTTP will be upgraded to ws and the connection will get open.</li>
          <li>
            <div>Challanges</div>
            <ul>
              <li>
                It is going to use lot of resource based on the number of
                connections as all the connections are long lived connections.
              </li>
              <li>Connetion limits.</li>
              <li>
                Sticky sessions : how these things will work with load
                balancers. Like if a user is connected to server1 the always the
                user must be redirected to that server.
              </li>
              <li>We need to focus on authentication.</li>
              <li>Firewall/proxy.</li>
              <li>Vertical/Horizontal Scaling.</li>
              <li>Testing for real time connections.</li>
              <li>
                Backward compactibility : Suppose the web socket is down for
                some time in such cases the protocol has to be downgraded and we
                have to use short or long polling.
              </li>
              <li>
                Connections which are expired has to be cleaned or else we will
                have to keep on scaling the server for new connections.
              </li>
            </ul>
          </li>
          <li>
            <div>
              <strong>Examples</strong>
              <ul>
                <li>Analytics Dashboards</li>
                <li>Trading Dashboards</li>
                <li>Chart rooms</li>
                <li>Real Time Collab (google docs,sheets)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Communication;
