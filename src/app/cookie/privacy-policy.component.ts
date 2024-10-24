import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <div class="container-fluid">
      <h2>Privacy Policy</h2>
      <p>
        Your privacy is important to us. It is sibylsystemsimulator.com's policy
        to respect your privacy regarding any information we may collect from
        you across our website and other sites we own and operate.
      </p>

      <h3>Information We Collect</h3>
      <h4>Personal Information</h4>
      <p>
        We may collect personally identifiable information, such as your name,
        email address, phone number, and demographic information. If you choose
        to interact with us, we may also collect information such as your IP
        address, browser type, access times, and pages visited.
      </p>

      <h4>Cookies</h4>
      <p>
        Cookies are files with a small amount of data that may include an
        anonymous unique identifier. Cookies are sent to your browser from a
        website and stored on your device. We use cookies to collect information
        and improve our services. You can set your browser to refuse all cookies
        or to indicate when a cookie is being sent. However, if you do not
        accept cookies, you may not be able to use some portions of our site.
      </p>

      <h3>Use of Information</h3>
      <p>
        We use the information collected for various purposes, including
        providing and maintaining our service, notifying you of changes to our
        service, allowing you to participate in interactive features of our
        service, providing customer support, gathering analysis or valuable
        information to improve our service, monitoring the usage of our service,
        and detecting, preventing, and addressing technical issues.
      </p>

      <h3>Sharing of Information</h3>
      <p>
        We will not sell, rent, or otherwise disclose your information to third
        parties outside of our organization without your consent.
      </p>

      <h3>Security</h3>
      <p>
        The security of your personal information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While we strive to use commercially
        acceptable means to protect your personal information, we cannot
        guarantee its absolute security.
      </p>

      <h3>Changes to Privacy Policy</h3>
      <p>
        Our Privacy Policy may change from time to time. We will post any
        privacy policy changes on this page and, if the changes are significant,
        we will provide a more prominent notice. We encourage you to review our
        Privacy Policy whenever you use our website to stay informed about our
        information practices and the ways you can help protect your privacy.
      </p>

      <h3>Contact Us</h3>
      <p>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at arcadia@sibylsystemsimulator.com.
      </p>

      <p>Last Updated: {{ lastUpdated | date : 'dd/MM/yyyy' }}</p>
    </div>
  `,
})
export class PrivacyPolicyComponent implements OnInit {
  lastUpdated = new Date(2024, 3, 1);
  constructor() {}

  ngOnInit() {
  }
}
