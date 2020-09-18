import React, { Component } from "react";
import "./App.css";
import Guest from "./Guest";

class App extends Component {
  state = {
    guests: [
      {
        name: "Ray",
        isConfirmed: false,
      },
      {
        name: "Krisztina",
        isConfirmed: true,
      },
      {
        name: "Istvan",
        isConfirmed: true,
      },
    ],
  };

  toggleConfirmationAt = (indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            isConfirmed: !guest.isConfirmed,
          };
        }
        return guest;
      }),
    });

  getTotalInvited = () => this.state.guests.length;

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>It Is Time To Party!</p>
          <form>
            <input type="text" value="" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <Guest
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
