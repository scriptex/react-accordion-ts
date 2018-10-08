[![Build Status](https://travis-ci.org/scriptex/react-accordion-ts.svg?branch=master)](https://travis-ci.org/scriptex/react-accordion-ts)
[![Greenkeeper badge](https://badges.greenkeeper.io/scriptex/react-accordion-ts.svg)](https://greenkeeper.io/)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/react-accordion-ts/README.md)](https://github.com/scriptex/react-accordion-ts/)

# React Accordion

An accordion widget for React applications written in Typescript.

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

<Accordion items={news} duration={300}
```

## Props

1. items: Array of objects with the following properties:
	- date [Optional] - String
	- title [Required] - String
	- content [Required] - String or Array of strings

2. Duration [Required] - Number (Duration of the toggling transition)

## LICENSE

MIT
