[![Travis CI](https://travis-ci.com/scriptex/react-accordion-ts.svg?branch=master)](https://travis-ci.com/scriptex/react-accordion-ts)
[![Github Build](https://github.com/scriptex/react-accordion-ts/workflows/Build/badge.svg)](https://github.com/scriptex/react-accordion-ts/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/react-accordion-ts/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/react-accordion-ts&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-react-accordion-ts-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/react-accordion-ts/badge)](https://www.codefactor.io/repository/github/scriptex/react-accordion-ts)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/react-accordion-ts/README.md?pixel)](https://github.com/scriptex/react-accordion-ts/)

# React Accordion

> An accordion widget for React web applications written in Typescript.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/react-accordion-ts?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/react-accordion-ts?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/react-accordion-ts?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/react-accordion-ts)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/react-accordion-ts?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/react-accordion-ts?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/react-accordion-ts?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-accordion-ts?style=plastic)

## About

This is a collapsible widget for React web applications written in TypeScript without any external dependencies (except React of course).

It uses the Hooks API and CSS to animate the collapsible contents.

The latest version of the widget has been built using the Hooks API introduced with React 16.
If you need to support older versions of React, please install [an older version](https://www.npmjs.com/package/react-accordion-ts/v/0.2.0).

**Please note that this widget does NOT work with React Native.**

[You can see the demo here](https://react-accordion-ts.atanas.info/)

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
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
