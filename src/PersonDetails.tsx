interface PersonProps {
    name : string;
    surname : string;
    age : number;
}

function PersonDetails(props : PersonProps) {
    return(
        <>
            <p>Name : {props.name}, Surname : {props.surname}, Age : {props.age}</p>
        </>
    );
}

export default PersonDetails;