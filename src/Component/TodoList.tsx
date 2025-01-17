// import  { Component, ChangeEvent } from 'react';
// import { Container, Typography, Divider, TextField, Button, ListItem, ListItemText, IconButton } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material';

// interface State {
//   listTodo: string[];
//   inputText: string;
// }

// class TodoList extends Component<{}, State> {
//   state: State = {
//     listTodo: [],
//     inputText: ''
//   };

//   inputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     this.setState({ inputText: e.target.value });
//   };

//   addItem = () => {
//     const { inputText, listTodo } = this.state;
//       this.setState({
//         listTodo: [...listTodo, inputText],
//         inputText: ''
//       });
  
//   };

//   deleteItem = (tarindex: number) => {
//     this.state.listTodo = this.state.listTodo.filter((_, index) => index !== tarindex)
//     this.setState({ listTodo: [...this.state.listTodo] })
//   };

//   render() {
//     const { listTodo, inputText } = this.state;

//     return (
//       <Container className="main-container" style={{ marginTop: '20px' }}>
//         <div className="center-container">
//           <Typography variant="h4" className="app-heading" style={{ textAlign: 'center' }}>TODO</Typography>
//           <Divider style={{ marginBottom: '20px' }} />
//           <div className="input-container" style={{ marginBottom: '20px' }}>
//             <TextField
//               label="Enter your todo item"
//               value={inputText}
//               onChange={this.inputChange}
//               fullWidth
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={this.addItem}
//               style={{ marginTop: '10px' }}
//             >
//               Add
//             </Button>
//           </div>
//           {listTodo.map((listItem, index) => (
//             <ListItem className="list-item" key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <ListItemText primary={listItem} />
//               <IconButton edge="end" aria-label="delete" onClick={() => this.deleteItem(index)}>
//                 <DeleteIcon />
//               </IconButton>
//             </ListItem>
//           ))}
//         </div>
//       </Container>
//     );
//   }
// }

// export default TodoList;


import { Component, ChangeEvent } from 'react';
import { Container, Typography, Divider, TextField, Button, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

interface State {
  listTodo: string[];
  inputText: string;
  editIndex: number | null;
}

class TodoList extends Component<{}, State> {
  state: State = {
    listTodo: [],
    inputText: '',
    editIndex: null
  };

  inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: e.target.value });
  };

  addItem = () => {
    const { inputText, listTodo, editIndex } = this.state;
    if (editIndex !== null) {
      listTodo[editIndex] = inputText;
      this.setState({ listTodo, inputText: '', editIndex: null });
    } else {
      this.setState({
        listTodo: [...listTodo, inputText],
        inputText: ''
      });
    }
  };

  deleteItem = (tarindex: number) => {
    const { listTodo } = this.state;
    this.setState({
      listTodo: listTodo.filter((_, index) => index !== tarindex)
    });
  };

  editItem = (index: number) => {
    const { listTodo } = this.state;
    this.setState({
      inputText: listTodo[index],
      editIndex: index
    });
  };

  render() {
    const { listTodo, inputText } = this.state;

    return (
      <Container className="main-container" style={{ marginTop: '20px' }}>
        <div className="center-container">
          <Typography variant="h4" className="app-heading" style={{ textAlign: 'center' }}>TODO</Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <div className="input-container" style={{ marginBottom: '20px' }}>
            <TextField
              label="Enter your todo item"
              value={inputText}
              onChange={this.inputChange}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.addItem}
              style={{ marginTop: '10px' }}
            >
              {this.state.editIndex !== null ? 'Edit' : 'Add'}
            </Button>
          </div>
          {listTodo.map((listItem, index) => (
            <ListItem className="list-item" key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemText primary={listItem} />
              <div>
                <IconButton edge="end" aria-label="edit" onClick={() => this.editItem(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => this.deleteItem(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </ListItem>
          ))}
        </div>
      </Container>
    );
  }
}

export default TodoList;
