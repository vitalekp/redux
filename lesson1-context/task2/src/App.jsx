import React, { Component } from 'react';
import Header from './Header';
import { user, UserContext } from './user-context';

// 0. create project +
// 1. male static layout (верстка) ++
// 2. divide into components +++
// 3. static react version (верстка) ++++
// 4. declare state (what, where) and props
// 5. write logic

class App extends Component {
  state = {
    userData: user,
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <UserContext.Provider value={userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
