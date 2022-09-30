# Standup - Chrome extension

**Standup** is a Chrome extension to facilitate and record standup call.

## Chrome extension architecture

![alt text](docs/images/chrome-extensions.png 'Chrome extension architecture')

Content scripts can communicate with their parent extension by exchanging messages and storing values using the storage API.

## Features

- Display Sprint details like `Scrum Master Name`, `Sprint Duration`, `Label`, `Epic`,...etc
- Create sequence of team members turn to speak, either randomly or based of certain criteria.
- Generate transcript when team member speaks.
- Display speak time allocated to a team member(based on team size) that dynamically decreases.
- Generate pdf for the overall standup call.(Future integration - Email, Slack)

## User interface

### Popup

### Options

### Background

### Content Script

## Tools

- [UI Design Tool](https://origami.design/)
- [Figma](https://figma.com)

## Useful Links

- [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Chrome Web Store](https://chrome.google.com/webstore)
- [Chrome Extension Development](https://developer.chrome.com/docs/extensions/)
- [HTML Specification](https://html.spec.whatwg.org/)
- [CSS Specification](https://www.w3.org/TR/CSS/#css)
- [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)
- [MDN](https://developer.mozilla.org/en-US/docs/Web)
- [MDN Manifest Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Speech to text](https://developer.chrome.com/blog/voice-driven-web-apps-introduction-to-the-web-speech-api)
- [Speech to text example](https://github.com/charliegerard/speak-extension)
- [React Beta Documentation](https://beta.reactjs.org/)
- [ReactJs](https://reactjs.org/)
- [Chrome Devtools Documentation](https://chromedevtools.github.io/devtools-protocol/)
