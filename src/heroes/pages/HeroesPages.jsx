import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'
 

const HeroesPages = () => {
    const {id} = useParams()

    
    
    const hero = useMemo(()=>getHeroById(id),[id])

    const navigate = useNavigate()
    
    const imageHero = `/assets/heroes/${id}.jpg` 
    
    const onReturn = ()=>{
     navigate('/marvel')
    //  navigate(-1)
    }

    if(!hero){
        return <Navigate to='/marvel'/>
    }

  return (
    <div className='row mt-5'>
        <div className="col-4">
            <img src={imageHero} alt={hero.superhero} className='img-thumbnail'/>
        </div>

        <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className='list-group list-group-flush'>
                <li className="list-group-item">
                    <b>Alter ego:</b>
                    {hero.alter_ego}
                </li>

                <li className="list-group-item">
                    <b>Publisher:</b>
                    {hero.publisher}
                </li>

                <li className="list-group-item">
                    <b>First_appearance:</b>
                    {hero.first_appearance}
                </li>
        
            </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{hero.characters}</p>

                <button 
                onClick={onReturn}
                className='btn btn-outline-primary'>
                    Regresar
                </button>
        </div>
    </div>
  )
}

export default HeroesPages
