import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
	title: 'Screen Box',
	description: 'Movie/Webseries Streaming Web App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

