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
import React from 'react';
import Accordion from 'react-accordion-ts';

const news = [
	{
		date: '12-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	}
];

const items = news.map(({ date, title, content }) => ({
	title: <h2>{date + ' - ' + title}</h2>,
	content: <p>{content}</p>
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

1. items [Required] - Array of objects with the following shape:

    - title [Required] - React Node
    - content [Required] - React Node

2. Duration [Required] - Number (Duration of the toggling transition)

3. Multiple [Required] - Boolean (If false, only one panel can be opened at any time)

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Freact-accordion-ts&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
