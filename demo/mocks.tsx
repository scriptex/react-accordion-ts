import * as React from 'react';

export const news = [
	{
		date: '12-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content'
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content',
		open: true
	},
	{
		date: '13-10-2018',
		title: 'Awesome title',
		content: 'Fantastic content',
		open: true
	}
];

export const items = news.map(({ open, date, title, content }) => ({
	open,
	title: <h2>{date + ' - ' + title}</h2>,
	content: <p>{content}</p>
}));
