import {Button, Modal} from "react-bootstrap";

const DetailsModal = (props) => {
    return (
        <Modal show={props.isOpen}>
            <Modal.Body>
                {
                    props.activeMovie &&
                    <div className="card" style={{width: '15rem', flexDirection:'unset'}}>
                        <img src={props.activeMovie.i.imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.activeMovie.l}</h5>
                            <p className="card-text">Year: {props.activeMovie.y}</p>
                            <p className="card-text">Rank: {props.activeMovie.rank}</p>
                            <p className="card-text">Type: {props.activeMovie.q}</p>
                        </div>
                    </div>
                }

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={(e) => props.handleOpenModal(e, undefined)}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleEditMovie}>
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailsModal;
