import { useState } from 'react';
import { p1, p6, p3, p4, p5 } from './assets/imagenes';
import phrases from './data/phrases.json';
import './assets/App.css';
import radomIndex from './assets/helpers/indexRandom';

const imagenes = [p1, p6, p3, p4, p5];

function App() {
	const [phrase, setPhrase] = useState(phrases[radomIndex(phrases.length)]);
	const [img, setImg] = useState(imagenes[radomIndex(imagenes.length)]);

	function changePhrase() {
		setPhrase(phrases[radomIndex(phrases.length)]);
		setImg(imagenes[radomIndex(imagenes.length)]);
	}

	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				<h1 className="heading">Galletas de la Fortuna</h1>

				<div className="card">
					<div className="card__body">
						<q className="phrase"> {phrase.phrase} </q>
						<cite className="author">
							- <b> {phrase.author}</b>{' '}
						</cite>
					</div>
				</div>

				<button onClick={changePhrase} className="btn">
					Ver mas
				</button>
			</div>
		</div>
	);
}

export default App;
