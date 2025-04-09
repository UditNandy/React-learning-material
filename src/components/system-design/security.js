import Accordian from "../shared/accordian/accordian";

const Security = () => {
  return (
    <>
      <Accordian header="Cross-site Scritpitin(XSS)">
        <ul>
          <li>
            If someone from external site can injectect some malicious script
            into our side and do something unintended.
          </li>
          <li>
            It is a type of security vulnerability where an attacker injects
            malicious scripts (usually JavaScript) into a trusted website or web
            application.
          </li>
          <li>
            This allows the attacker to execute code in a victim’s browser,
            potentially stealing sensitive data, hijacking user sessions, or
            performing actions on behalf of the user.
          </li>
        </ul>
        <Accordian header="Different XSS Vunrebilities">
          <ul>
            <li>User session hijacking</li>
            <li>Unauthorized activites</li>
            <li>Capturing Keystrokes</li>
            <li>Stealing Critial Info(Capturing the DOM)</li>
            <li>Phishing Attack</li>
          </ul>
        </Accordian>
        <Accordian header="Mitigation">
          <ul>
            <li>
              <strong>Taking case of user input</strong> : Can be through url,
              input box, etc.
            </li>
            <li>
              <strong>Never put user input to innerHTML directly.</strong> :
              Hackers can inject scripts in those innerHTMLs
            </li>
            <li>
              <strong>Sanitise the user inputs (escaping mechanism). </strong>
            </li>
            <li>
              <strong>
                Use libraries like DOM purifier they will sanitise the data.
              </strong>
            </li>
            <li>
              <strong>CSP Headers (Content Security Policy)</strong>
              <ul>
                <li>Allowed Sorces</li>
                <li>Script Nonces</li>
                <li>Report-only mode</li>
              </ul>
            </li>
            <li>
              In our interceptors we can also check for the url and block them.
            </li>
          </ul>
        </Accordian>
      </Accordian>
      <Accordian header="Iframe protections">
        <Accordian header="Vurnabilities">
          <ul>
            <li>
              <strong>Click hijacking</strong>
            </li>
            <li>
              <strong></strong>
            </li>
          </ul>
        </Accordian>
      </Accordian>
      <Accordian header="Notes">
        <ul>
          <li>
            In case of modern frameworks like react, injecting something into
            the jsx is not that easy because these things are taken care by
            these frameworks.
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default Security;
