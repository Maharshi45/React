import PropTypes from 'prop-types'

function UserComponent({ name, projects, age }) {
  return (
    <div>
      <h2>Prototype Demo</h2>
      <p>Name: {name}</p>
      <p>Projects: {projects}</p>
      <p>Age: {age}</p>
    </div>
  );
}

UserComponent.propTypes = {
  name: PropTypes.string.isRequired,
  projects: PropTypes.array,
  age: PropTypes.number,
}

UserComponent.defaultProps = {
  name: "Mukesh"
}

export default UserComponent;