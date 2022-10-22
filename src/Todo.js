import {useState} from "react";
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [removeTodo, setRemoveTodo] = useState(false);



	const removeHandler = () => {
		setModalIsOpen(true);
		setRemoveTodo(true);
		console.log('removeHandler');
		console.log(props.text);
	};

	const closeModalHandler = () => {
		setModalIsOpen(false);
	}

	return (
			<div>
				<div className="card">
					<h2>{props.text}</h2>
					<div className="actions">
						<button className="btn" onClick={removeHandler}>삭제</button>
					</div>
				</div>
				{modalIsOpen && <Backdrop onClose={closeModalHandler} />}
				{modalIsOpen && <Modal onClose={closeModalHandler} onClick={closeModalHandler}/>}
			</div>
	)
}

export default Todo;