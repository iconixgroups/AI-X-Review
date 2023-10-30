import React from 'react';

class TeamTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: []
    };
  }

  componentDidMount() {
    fetch('/api/team')
      .then(response => response.json())
      .then(data => this.setState({ team: data }));
  }

  render() {
    return (
      <div id="teamTab">
        <h2>Team</h2>
        {this.state.team.map(member => (
          <div key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
            <a href={member.linkedin}>LinkedIn Profile</a>
          </div>
        ))}
      </div>
    );
  }
}

export default TeamTab;