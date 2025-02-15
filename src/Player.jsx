import React from 'react';


const Player = (props) => {
    return (
            <div className=' m-auto bg-zinc-300 w-full mt-24 rounded-lg max-w-sm lg:max-w-md '>
                <div className='  shadow-zinc-950 shadow-lg rounded-lg '>
                    <img src={props.ImageUrl} className='m-auto w-full h-52 rounded-md hover:shadow-lg hover:-translate-y-1' alt={props.name} />
                    <div className='border-b-lime-500 border-b  pb-5 mb-3' ></div>
                    <div className='text-lg px-4 pb-3 box-content'>
                        <h2>Name: {props.name}</h2>
                        <p>Team: {props.team}</p>
                        <p>Nationality: {props.nationality}</p>
                        <p>JerseyNumber: {props.jerseyNumber}</p>
                        <p>Age: {props.age}</p>
                    </div>
                </div>
            </div>
    );
}


Player.defaultProps = {
    name: "Name ",
    team: "team",
    nationality: "nationality",
    jerseyNumber: "0",
    age: "0",
    ImageUrl: "image.png"
};
/// props par défaut

export default Player;
