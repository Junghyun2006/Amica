import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import ServerPlusModal from "../server/modal/server_plus_modal";
import ServerCreateModal from "../server/modal/server_create_modal";

function Modal({ modal, closeModal, openModal }) {
  if (!modal) {
    return null;
  }

  let component;
  let width;
  let height;

  switch (modal.modal) {
    case "serverPlus":
      component = (
        <ServerPlusModal
          openModal={openModal}
          createServer={modal.createServer}
          newServerInfo={modal.newServerInfo}
          push={modal.push}
          handleActiveServer={modal.handleActiveServer}
        />
      );
      width = `440px`;
      height = `552px`;
      break;
    case "serverCreate":
      component = (
        <ServerCreateModal
          closeModal={closeModal}
          openModal={openModal}
          createServer={modal.createServer}
          newServerInfo={modal.newServerInfo}
          push={modal.push}
          modal={modal.handleActiveServer}
        />
      );
      width = `440px`;
      height = `414px`;
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

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
