
import React from 'react';
interface AppState {
  show: boolean;
  hide:boolean;
  toastMessage: string;
  popup: boolean;
}

class ToastMessage extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      show: false,
      hide:true,
      toastMessage: '',
      popup: false,
    };
  }

  handleOpenPopup = () => {
    this.setState({popup: true,hide:false });
  };


  handleHidePopup = () => {
    this.setState({ popup: false, hide: true });
  };
  handleConfirm = () => {
    this.setState({   popup: true, show: true, hide:true, toastMessage: 'Confirmed' });
    console.log('Confirmed');
    setTimeout(() => {
      this.setState({ show: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({  popup: true, show: true, hide:true, toastMessage: 'Cancelled' });
    console.log('Cancelled');
    setTimeout(() => {
      this.setState({ show: false,hide:true });
    }, 3000);
  };

  render() {
    const { show,hide, toastMessage,  popup } = this.state;

    return (
        <>
        <div className="bg-blue-300 h-[60vh] w-[40vw] rounded-md m-auto">
      
        <h1>Toast</h1>
        <p>Notification Message on a piece of information displayed above the page content</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 ml-10 mt-6 rounded"
          onClick={this.handleOpenPopup}
        >
          show
        </button>
<div>
        {  popup && (
         
            <div className="bg-white h-[30vh] w-[25vw] ml-5 mt-2  ">
              <p className="pl-5">Are you sure?</p>
              <button
                className="bg-green-500 ml-3 mt-10 text-white px-4 py-2 rounded mr-2"
                onClick={this.handleConfirm}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 text-white mt-10 px-4 py-2 rounded"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
         
        )}

        {show && (
          <div>
            
            {toastMessage}
          </div>
        )}
        </div>
      </div>
      
      </>
    );
  }
}

export default ToastMessage;
