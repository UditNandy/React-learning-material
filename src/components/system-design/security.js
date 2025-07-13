import Accordian from "../shared/accordian/accordian";

const Security = () => {
  return (
    <>
      <Accordian header="Cross-site Scritpitin(XSS)">
        <ul>
          <li>
            If someone from external site can injectect some malicious script
            into our site and do something unintended.
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
        <ul>
          <li>
            <strong>Click hijacking</strong> :
            <ul>
              <li>Attackers trick users into clicking hidden iframes.</li>
              <li>
                Use X-Frame-Options: DENY or Content-Security-Policy:
                frame-ancestors 'none'.
              </li>
            </ul>
          </li>
          <li>
            <strong>Cross-Site Scripting (XSS)</strong> :
            <ul>
              <li>Malicious scripts injected into iframe content.</li>
              <li>Sanitize and validate all iframe content and inputs.</li>
            </ul>
          </li>
          <li>
            <strong>Cross-Origin Data Access </strong> :
            <ul>
              <li>Iframes may access sensitive data from other origins.</li>
              <li>Use sandbox attribute without allow-same-origin.</li>
            </ul>
          </li>
          <li>
            <strong>Privilege Escalation via Script Access</strong> :
            <ul>
              <li>Iframe scripts accessing parent page or vice versa.</li>
              <li>
                Use sandbox, and avoid allow-scripts or allow-same-origin unless
                needed.
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Security Headers">
        <ul>
          <li>
            <strong>X-Powered-By</strong> :
            <ul>
              <li>
                Tell the server type of framework used to create the server.
              </li>
            </ul>
          </li>
          <li>
            <strong>Referrer-Policy</strong> :
            <ul>
              <li>Set by server in the response header.</li>
              <li>
                Controls what the browser sends in the Referer request header on
                subsequent requests.
              </li>
              <li>
                Referer containes the url of the page which sends the api.
              </li>
              <li>
                We should not send the full url like query param and all we can
                only send the base url.
              </li>
            </ul>
          </li>
          <li>
            <strong>X-Content-Type-Options</strong> :
            <ul>
              <li>
                Sometimes the browser sends the content type as json but the
                content in the response is something else.
              </li>
              <li>
                By default our app will execute that content which can lead to
                security issues.
              </li>
              <li>
                The X-Content-Type-Options response HTTP header is a marker used
                by the server to indicate that the MIME types advertised in the
                Content-Type headers should be followed and not be changed.
              </li>
              <li>
                Some old version of browsers might try to guess the content type
                which we need to avoid.
              </li>
            </ul>
          </li>
          <li>
            <strong>Strict-Transport-Security(HSTS)</strong> :
            <ul>
              <li>
                The HTTP Strict-Transport-Security response header (often
                abbreviated as HSTS) informs browsers that the site should only
                be accessed using HTTPS, and that any future attempts to access
                it using HTTP should automatically be converted to HTTPS.
              </li>
            </ul>
          </li>
        </ul>
      </Accordian>
      <Accordian header="Client Side Security">
        Use a checksum with encrypting the data and while using the decrypted
        data validate the new checksum with old checksum. If both matches then
        only use it.
      </Accordian>
      <Accordian header="HTTPS">
        <ul>
          <li>Encrypts data in transit using TLS (SSL)</li>
          <li>
            Authenticates the server using digital certificates. Ensures you're
            connecting to the real site, not a fake one
          </li>
          <li>
            Prevents man-in-the-middle (MITM) attacks. Attackers can't intercept
            or alter the communication
          </li>
          <li>
            Ensures data integrity. Detects if data is tampered with during
            transmission
          </li>
          <li>Improves user trust and SEO</li>
          <li>Mandatory for secure cookies.</li>
        </ul>
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
