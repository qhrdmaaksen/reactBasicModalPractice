import {useState} from "react";
import Modal from './Modal';

const Todo = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [removeTodo, setRemoveTodo] = useState(false);



	const removeHandler = () => {
		setRemoveTodo(true);
		setShowModal(false);
		console.log('removeHandler');
		console.log(props.text);
	};

	const openModalHandler = () => {
		setShowModal(true)
	}

	const modalCloseHandler = () => {
		setShowModal(false);
	}

	return (
			<div>
				{showModal && <Modal onClose={modalCloseHandler} onClick={removeHandler}/>}
				<div className="card">
					<h2>{props.text}</h2>
					<div className="actions">
						<button className="btn" onClick={openModalHandler}>삭제</button>
					</div>
				</div>
			</div>
	)
}

export default Todo;