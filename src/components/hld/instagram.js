import Accordian from "../shared/accordian/accordian";

const Instagram = () => {
  return (
    <>
      <Accordian header="Requirement Analysis">
        <ul>
          <li>
            <strong>Functional Requirements</strong>:
            <ul>
              <li>
                Feeds
                <ul>
                  <li>Feeds list</li>
                  <li>Create Post</li>
                </ul>
              </li>
              <li>
                Reels
                <ul>
                  <li>Create Reels</li>
                  <li>Create Reels</li>
                </ul>
              </li>
              <li>
                Stories
                <ul>
                  <li>View stories</li>
                  <li>Post stories</li>
                </ul>
              </li>
              <li>Account Management</li>
              <li>Messaging</li>
              <li>Browsing</li>
            </ul>
          </li>
          <li>
            <strong>Non Functional Requirements</strong>:
            <ul>
              <li>Device Support and compatibility</li>
              <li>Security</li>
              <li>Authentication</li>
              <li>Optimisation</li>
              <li>Offline Support</li>
              <li>Internationalisation, Localinsation</li>
              <li>Accessibility</li>
              <li>SEO</li>
              <li>Testing</li>
              <li>Deployment</li>
            </ul>
          </li>
          <li>
            As we will be having time constrant we can focus of feed management,
            optimisation
          </li>
        </ul>
      </Accordian>
      <Accordian header="Optimisation">
        <ul>
          <li>
            In case of insta we are mostly focused on images and videos (asset
            optimisation)
          </li>
          <li>Think about image format (WebP)</li>
          <li>
            We can keep the image resolution high if we are using a big screen
            size and resolution low in case of small screen size. We can use
            useragent for that. We can use{" "}
            <strong>dpr (device pixel ratio)</strong> for this.
          </li>
          <li>
            Device Connectivity : If device network is not good then we can load
            a lower resolution image.
          </li>
          <li>We can use techniques like prefetch.</li>
          <li>We can use infinite scroll for loading posts</li>
          <li>Virtualisation (react window , intersection observable)</li>
          <li>Code splitting</li>
          <li>Preserving feed scroll position.</li>
          <li>Use webworkers whenever you want to do some heavy work.</li>
          <li>
            Optimistic Update in case of creation : Like upload the image/video
            first then attach the id in the final post api.
          </li>
        </ul>
      </Accordian>
    </>
  );
};

export default Instagram;
