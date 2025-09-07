import students from './students.json';
import PersonDetails from "./PersonDetails";

function PersonList() {
    return(
        <>
            <h2>Student List</h2>
            {students.map(student => (
                <PersonDetails name={student.name} surname={student.surname} age={student.age}></PersonDetails>
            ))}
        </>
    );
}

export default PersonList;