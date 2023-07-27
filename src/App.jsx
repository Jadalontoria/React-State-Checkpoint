import React from "react";
import maria from "./images/maria.png";


class App extends React.Component {

  state = {
    Person: {
      fullName: "Maria Etuk",
      bio: "I'm a MERN Full-Stack Developer",
      profession: "Software Developer"
    },
    show: false
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={maria} alt="Maria"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        
      </>
    );
  }
}

export default App;
