import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
//import { Welcome } from './components/Welcome';
import { Todos } from './components/Todos';
import { TodosCreate } from './components/TodosCreate';
import { TodosUpdate } from './components/TodosUpdate';
//import { TodosDelete } from './components/TodosDelete';

function App() {
	return (
		<Router>
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="/">Home</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/create"}>New</Link>
						</li>
					</ul>
				</nav>
				{/* <Todos data={data} /> */}
				<Route path="/" exact component={Todos} />
				<Route path="/create" exact component={TodosCreate} />
				<Route path="/update/:id" exact component={TodosUpdate} />
				{/* <Route path="/delete/:id" exact component={TodosDelete} />
				<Welcome /> */}
			</div>
		</Router>
  );
}

export default App;