import React from "react";
import { Link } from "react-router-dom";


const CharactersByHero = ({characters , alter_ego})=>{
    return (alter_ego === characters) ? <></> : <p>{characters}</p>
}

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImageURL = `/assets/heroes/${id}.jpg`

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
            

        <div className="col-4 animate__animated animate__fadeIn">
          <img src={heroImageURL} className="card-img" alt={superhero} />
        </div>

        <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>


                <p className="card-text">
                    <small className="text-muted">{first_appearance}</small>
                </p>

                <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                <Link to={`/hero/${id}`} >
                    saber mas ...
                </Link>

            </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default HeroCard;

