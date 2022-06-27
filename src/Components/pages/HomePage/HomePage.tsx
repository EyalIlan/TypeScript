import React, {useEffect } from 'react';
import Card from '../../UI/Card/Card'

import './HomePage.css'
import { useDispatch,useSelector } from 'react-redux'
import {fetchDataFromApi, LoaderState, moviesData,SectionData,changeSelectiontype } from '../../utils/store/reducers/movie';
import Spinner from '../../UI/Spinner/Spinner';
import { trendinActionRequestsObject } from '../../utils/objects';
import Pageination from '../../UI/Pageination/Pageination';
export interface IProps {

}

const Hompage: React.FC<IProps> = (props) => {


  const dispatch = useDispatch()
  
  const loader = useSelector(LoaderState)
  const movies = useSelector(moviesData)
  const SectionType = useSelector(SectionData)
 

  

  useEffect(() => {
    
    const Request = async () => {
      dispatch(fetchDataFromApi())
    }
    Request()
  },[])
  
  
  const changeTrendingType = async (trending:string) =>{

     dispatch(changeSelectiontype(trending))
     dispatch(fetchDataFromApi())
  }
  
  let SectionActions
  let trending:string = ''

  for(let section in trendinActionRequestsObject){  
    if(section === SectionType.sectionType){   
      SectionActions = trendinActionRequestsObject[section]
      SectionActions?.forEach(p =>{

          console.log();
          

          if(p.value === SectionType.trendingType.substring(1, SectionType.trendingType.length)){
               trending = p.text
          }
      })
    }
  }
  
  SectionActions = SectionActions?.map( (p,index) =>{
    return <button key={index} className='btn btn_click btn_primary' onClick={() =>{changeTrendingType(p.value)}}>{p.text}</button>
  })

  const data =  movies.map((p, index) => {
    return (
      <Card key={index} imageUrl={p.poster_path || p.profile_path} title={p.title} rating={p.vote_average} name={p.name} year={p.release_date || p.first_air_date}></Card>
    )
  })
  
  const showCards = (
    <div className='homepage container'>
        <div className='section_header'>
              <h1 className='bigText'>{trending} {SectionType.sectionType}</h1>
                <div className='flex justify_center'>
                  {SectionActions}  
                </div>
                <div>
                  <Pageination footer ={false}></Pageination>
                </div>
              <div>
              </div>
        </div>

        <div className='grid grid-col-5'>
         {data}
        </div>
    </div>
  )
  
  

return (

    <div>
      <div className='flex center'>  
      {loader?<Spinner></Spinner>:showCards}
      </div>
      <Pageination footer ={true} ></Pageination>
     
    </div>

  );
}

export default Hompage;