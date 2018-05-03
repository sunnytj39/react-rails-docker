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
    const header = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    fetch('http://0.0.0.0:3001/users', {
      method: 'POST',
      mode: 'cors',
      header: header,
      body: JSON.stringify({
        user: {
          name: this.state.textValue,
        }
      })
    }).then((res) => {
        res.json()
      }).then((json) => {
        console.log(json);
      }).catch((err) => {
        console.error(err);
      })
  }

  handleGet() {
    const header = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
    fetch('http://0.0.0.0:3001/users', {
      header: header,
      mode: 'cors',
    }
    ).then((res) => {
      console.log(res);
        res.json()
      }).then((json) => {
        console.log(json);
      }).catch((err) => {
        console.error(err);
      })
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
