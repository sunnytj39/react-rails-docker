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
    fetch('http://web:3001/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
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
    fetch('http://web:3001/users'
    ).then((res) => {
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
