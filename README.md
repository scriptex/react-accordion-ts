[![GitHub release](https://img.shields.io/github/release/scriptex/react-accordion-ts.svg)](https://github.com/scriptex/react-accordion-ts/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/react-accordion-ts.svg)](https://github.com/scriptex/react-accordion-ts/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-accordion-ts.svg)](https://github.com/scriptex/react-accordion-ts/commits/master)
[![Build Status](https://travis-ci.com/scriptex/react-accordion-ts.svg?branch=master)](https://travis-ci.com/scriptex/react-accordion-ts)
[![npm](https://img.shields.io/npm/dt/react-accordion-ts.svg)](https://www.npmjs.com/package/react-accordion-ts)
[![npm](https://img.shields.io/npm/v/react-accordion-ts.svg)](https://www.npmjs.com/package/react-accordion-ts)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/react-accordion-ts/README.md)](https://github.com/scriptex/react-accordion-ts/)

# React Accordion

> An accordion widget for React web applications written in Typescript.

## About

The latest version of the widget has been built using the Hooks API introduced with React 16.
If you need to support older versions of React, please install [an older version](https://www.npmjs.com/package/react-accordion-ts/v/0.2.0).

**Please note that this widget does NOT work with React Native.**

## Install

```sh
npm i react-accordion-ts

# or

yarn add react-accordion-ts
```

## Usage

```javascript
import * as React from 'react';
import { Accordion } from 'react-accordion-ts';

const content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

const news = [
	{
		date: '12-10-2018',
		title: 'Awesome title',
		content: [content]
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: [content, content],
		open: true
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: [content],
		open: true
	}
];

const items = news.map(({ open, date, title, content }) => ({
	open,
	title: <h2>{date + ' - ' + title}</h2>,
	content: (
		<>
			{content.map((item: string, index: number) => (
				<p key={index}>{item}</p>
			))}
		</>
	)
}));

export const MyComponent = () => <Accordion items={items} duration={300} multiple={true} />;
```

You can also use the basic stylesheet included:

```javascript
import 'react-accordion-ts/src/panel.css';
```

or

```css
@import 'react-accordion-ts/src/panel.css';

// If the above doesn't work, add a ~ in the beginning:

@import '~react-accordion-ts/src/panel.css';
```

## Props

### Accordion props

| Prop       | Type              | Required | Default | Description                                                              |
| ---------- | ----------------- | -------- | ------- | ------------------------------------------------------------------------ |
| `open`     | `number`          | false    | -1      | Zero based index representing the accordion item which is initially open |
| `items`    | `AccordionItem[]` | true     | -       | Array of `AccordionPanel` objects (see below)                            |
| `duration` | `number`          | false    | 300     | Duration (in milliseconds) of the expanding/collapsing animation         |
| `multiple` | `boolean`         | false    | false   | A ReactNode representing the content of the slide                        |

### Accordion panel props

| Prop      | Type        | Required | Description                                                                            |
| --------- | ----------- | -------- | -------------------------------------------------------------------------------------- |
| `open`    | `boolean`   | false    | Whether the panel should be initially open                                             |
| `title`   | `ReactNode` | true     | The title of the panel. This is the element which expands/collapses the panel on click |
| `content` | `ReactNode` | true     | The panel content.                                                                     |

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
    Support and sponsor my work:<br /><br />

[![Tweet](https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)

[![Donate on Paypal](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65)](https://paypal.me/scriptex)
[![Donate on Revolut](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json)](https://revolut.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413)](https://patreon.com/atanas)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/scriptex)
[![Donate on Liberapay](https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay)](https://liberapay.com/scriptex/donate)

![Donate Bitcoin](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json)<br />
![Donate Etherium](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json)<br />
![Donate Shiba Inu](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json)

</div>
