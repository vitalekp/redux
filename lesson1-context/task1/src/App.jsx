import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

// 0. create project +
// 1. male static layout (верстка) ++
// 2. divide into components +++
// 3. static react version (верстка) ++++
// 4. declare state (what, where) and props
//5. write logic

class App extends Component {
  state = {
    theme: themes.light,
  };

  toogleThemes = () => {
    const newTheme = this.state.theme === themes.light ? themes.dark : themes.light;

    this.setState({
      theme: newTheme,
    });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toogleThemes}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toogleThemes}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
