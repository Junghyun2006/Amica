import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ServerPlusModal from '../server/modal/server_plus_modal';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  let width;
  let height;
  
  switch (modal) {
    case "serverPlus":
      component = <ServerPlusModal/>;
      width = `440px`;
      height = `558px`;
      break;
    default:
      return null;
  }


  return (
    <div className="modal-container" onClick={closeModal}>
      <div
        className="modal-component"
        style={{ width: `${width}`, height: `${height}` }}
        onClick={(e) => e.stopPropagation()}
      >
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);