import * as React from 'react';

// prettier-ignore
const content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sint voluptatum sed suscipit fugit tempore quidem aliquid doloremque quibusdam ea.';

export const news = [
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

export const items = news.map(({ open, date, title, content }) => ({
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
