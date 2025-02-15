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
    </>
  );
};

export default Communication;
