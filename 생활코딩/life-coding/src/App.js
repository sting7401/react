import React, { useState } from 'react';
import './App.css';

function Header(props) {
	const propHeader = props;

	return (
		<header>
			<h1>
				<a
					href="/"
					onClick={event => {
						event.preventDefault();

						propHeader.onChangeMode();
					}}
				>
					{propHeader.title}
				</a>
			</h1>
		</header>
	);
}

function NavList(props) {
	const propNavList = props;
	const lis = [];

	for (let i = 0; i < propNavList.topics.length; i += 1) {
		const t = propNavList.topics[i];
		lis.push(
			<li key={t.id}>
				<a
					href={t.body}
					id={t.id}
					onClick={event => {
						event.preventDefault();

						propNavList.onChangeMode(
							Number(event.currentTarget.id),
						);
					}}
				>
					{t.title}
				</a>
			</li>,
		);
	}

	return (
		<nav>
			<ol>{lis}</ol>
		</nav>
	);
}

function Article(props) {
	const propArticle = props;

	return (
		<article>
			<h2>{propArticle.title}</h2>
			<p>{propArticle.body}</p>
		</article>
	);
}

function Create(props) {
	const propCreate = props;

	return (
		<div>
			<h2>Create</h2>

			<form
				onSubmit={event => {
					event.preventDefault();

					const titleCreate = event.currentTarget.title.value;
					const bodyCreate = event.currentTarget.body.value;

					propCreate.onCreate(titleCreate, bodyCreate);
				}}
			>
				<p>
					<input type="text" name="title" placeholder="title" />
				</p>
				<p>
					<textarea name="body" placeholder="body" />
				</p>
				<p>
					<button type="submit" value="create">
						create
					</button>
				</p>
			</form>
		</div>
	);
}

function Update(props) {
	const propUpdate = props;
	const [title, setTitle] = useState(propUpdate.title);
	const [body, setBody] = useState(propUpdate.body);

	return (
		<div>
			<h2>Update</h2>

			<form
				onSubmit={event => {
					event.preventDefault();

					const titleUpdate = event.currentTarget.title.value;
					const bodyUpdate = event.currentTarget.body.value;

					propUpdate.onUpdate(titleUpdate, bodyUpdate);
				}}
			>
				<p>
					<input
						type="text"
						name="title"
						placeholder="title"
						value={title}
						onChange={event => {
							setTitle(event.currentTarget.value);
						}}
					/>
				</p>
				<p>
					<textarea
						name="body"
						placeholder="body"
						value={body}
						onChange={event => {
							setBody(event.currentTarget.value);
						}}
					/>
				</p>
				<p>
					<button type="submit" value="update">
						update
					</button>
				</p>
			</form>
		</div>
	);
}

function App() {
	const [mode, setMode] = useState('welcome');
	const [id, setId] = useState(null);
	const [nextId, setNextId] = useState(4);
	const [topics, setTopics] = useState([
		{ id: 1, title: 'html', body: 'html!' },
		{ id: 2, title: 'css', body: 'css!' },
		{ id: 3, title: 'js', body: 'js!' },
	]);

	let content = null;
	let contextControl = null;
	if (mode === 'welcome') {
		content = <Article title="welcome" body="welcome html" />;
	} else if (mode === 'read') {
		let title = null;
		let body = null;

		for (let i = 0; i < topics.length; i += 1) {
			if (topics[i].id === id) {
				title = topics[i].title;
				body = topics[i].body;
			}
		}
		content = <Article title={title} body={body} />;
		contextControl = (
			<>
				<li>
					<a
						href={id}
						onClick={event => {
							event.preventDefault();

							setMode('update');
						}}
					>
						update
					</a>
				</li>
				<li>
					<button
						type="button"
						value="delete"
						onClick={() => {
							const newTopics = [];

							for (let i = 0; i < topics.length; i += 1) {
								if (topics[i].id !== id) {
									newTopics.push(topics[i]);
								}
							}

							setTopics(newTopics);
							setMode('welcome');
						}}
					>
						delete
					</button>
				</li>
			</>
		);
	} else if (mode === 'create') {
		content = (
			<Create
				onCreate={(_title, _body) => {
					const newTopic = { id: nextId, title: _title, body: _body };
					const newTopics = [...topics];

					newTopics.push(newTopic);
					setTopics(newTopics);
					setMode('read');
					setId(nextId);
					setNextId(nextId + 1);
				}}
			/>
		);
	} else if (mode === 'update') {
		let title = null;
		let body = null;

		for (let i = 0; i < topics.length; i += 1) {
			if (topics[i].id === id) {
				title = topics[i].title;
				body = topics[i].body;
			}
		}

		content = (
			<Update
				title={title}
				body={body}
				onUpdate={(_title, _body) => {
					const newTopics = [...topics];
					const updatedTopic = { id, title: _title, body: _body };

					for (let i = 0; i < newTopics.length; i += 1) {
						if (newTopics[i].id === id) {
							newTopics[i] = updatedTopic;
							break;
						}
					}

					setTopics(newTopics);
					setMode('read');
				}}
			/>
		);
	}

	return (
		<div className="App">
			<Header
				title="REACT"
				onChangeMode={() => {
					setMode('welcome');
				}}
			/>
			<NavList
				topics={topics}
				onChangeMode={_id => {
					setMode('read');
					setId(_id);
				}}
			/>
			{content}

			<ul>
				<li>
					<a
						href="./"
						onClick={event => {
							event.preventDefault();

							setMode('create');
						}}
					>
						create
					</a>
				</li>
				{contextControl}
			</ul>
		</div>
	);
}

export default App;
