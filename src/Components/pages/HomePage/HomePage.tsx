import React, {useEffect } from 'react';
import Card from '../../UI/Card/Card'

import './HomePage.css'
import { useDispatch,useSelector } from 'react-redux'
import {fetchDataFromApi, LoaderState, moviesData,SectionData,changeSelectiontype,SearchTerm } from '../../utils/store/reducers/movie';
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
  const searchTerm = useSelector(SearchTerm)
  
  
  
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
  let title:string = ''

  for(let section in trendinActionRequestsObject){  
    if(section === SectionType.sectionType){  
      SectionActions = trendinActionRequestsObject[section]
      
      if(section ==='person'){
        title = 'Actors'
      }else{
        title = section.charAt(0).toUpperCase() + section.slice(1);
      }
      
      SectionActions?.forEach(p =>{
          if(p.value === SectionType.trendingType.substring(1, SectionType.trendingType.length)){
               trending = p.text
          }
      })
    }
  }
  
  SectionActions = SectionActions?.map( (p,index) =>{
    return <button key={index} className='btn btn_click btn_primary bigText' onClick={() =>{changeTrendingType(p.value)}}>{p.text}</button>
  })

  const data =  movies.map((p, index) => {
    return (
      <Card ID={p.id}  key={index} imageUrl={p.poster_path || p.profile_path} title={p.title} rating={p.vote_average} name={p.name} year={p.release_date || p.first_air_date}></Card>
    )
  })
  
  const showCards = (
    <div className='page'>
      <div className='container'>
        <div>
              <h1 className='title'>{trending || searchTerm } {title}</h1>
                <div className='flex justify_center specing'>
                  {SectionActions}
                </div>
                <div>
                  <Pageination footer ={false}></Pageination>
                </div>
              <div>
              </div>
        </div>

        <div className='grid grid-gap grid-col-7'>
         {data}
        </div>
        <Pageination footer ={true} ></Pageination>
    </div>
    </div>
  )
  


return (

    <div>
      <div className='flex justify_center align_center screen'>
        {loader?<Spinner></Spinner>:showCards}
      </div>
     
    </div>

  );
}

export default Hompage;