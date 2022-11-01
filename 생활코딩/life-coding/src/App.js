import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<NavList />
			<ArticleTag />
		</div>
	);
}

function Header() {
	return (
		<header>
			<h1>
				<a href="/">web</a>
			</h1>
		</header>
	);
}

function NavList() {
	return (
		<nav>
			<ol>
				<li>
					<a href="/">html</a>
				</li>
				<li>
					<a href="/">css</a>
				</li>
				<li>
					<a href="/">js</a>
				</li>
			</ol>
		</nav>
	);
}

function ArticleTag() {
	return (
		<article>
			<h2>welcome</h2>
		</article>
	);
}

export default App;
