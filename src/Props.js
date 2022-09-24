import React from 'react';

function Welcome(props){
    return(
        <div>
            <h1>Welcome to {props.name} </h1>
        </div>
    )
}

function Name(name){
    return(
        <div>
            <p><b>Name:</b> {name.sname}</p>
        </div>
    )
}

function Email(e_id){
    return(
        <div>
            <p><b>Email_id:</b> {e_id.id}</p>
        </div>
    )
}

function Branch(branch){
    return(
        <div>
            <p><b>Branch: </b> {branch.name}</p>
        </div>
    )
}

function Props(){
    return(
        <div>
            <Welcome name="MITK" />
            <Name sname="Nagaveni Naik" />
            <Email id="naiknagaveni2000@gmail.com" />
            <Branch name="Computer Science Engineering" />
        </div>
        );
}

export default Props;