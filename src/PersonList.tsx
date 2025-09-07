import PersonDetails from "./PersonDetails";

function PersonList() {
    return(
        <>
            <h2>Student List</h2>
            <PersonDetails name="Ethan" surname="Miller" age={16}></PersonDetails>
            <PersonDetails name="Sophie" surname="Carter" age={17}></PersonDetails>
            <PersonDetails name="James" surname="Anderson" age={17}></PersonDetails>
        </>
    );
}

export default PersonList;