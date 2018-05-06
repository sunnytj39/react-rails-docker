import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      textValue: ''
    };
    this.changeText = this.changeText.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost() {
      console.log(JSON.stringify({user: {'name': 'hoge'}}));
     const header = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    fetch('http://localhost:3001/users', {
      method: 'POST',
      mode: 'cors',
      header: header,
      body: JSON.stringify({user: {'name': 'hoge'}}),
    }).then((res) => {
        return res.json();
      }).then((json) => {
        console.log(json);
      }).catch((err) => {
        console.error(err);
      })
  }

  handleGet() {
    fetch('http://localhost:3001/users', {
      mode: 'cors',
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
      }).catch((err) => {
        console.error(err);
      });
  }

  changeText(e) {
    this.setState({ textValue: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
        <button onClick={this.handlePost}>
          POST
        </button>
        <button onClick={this.handleGet}>
          GET
        </button>
        <div>
          Users:{this.state.users}
        </div>
      </div>
    )
  }
}

export default App
