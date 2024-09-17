import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}
// Validate prop types. Log error to console.
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
// If attributes are not added, these defaults will be listed.
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student;