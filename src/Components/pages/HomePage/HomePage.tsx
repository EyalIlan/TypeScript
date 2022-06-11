import React, {useEffect } from 'react';
import Card from '../../UI/Card/Card'

import './HomePage.css'
import { useDispatch,useSelector } from 'react-redux'
import {fetchDataFromApi, LoaderState, moviesData,SectionData,changeSelectiontype } from '../../utils/store/reducers/movie';
import Spinner from '../../UI/Spinner/Spinner';
import { trendinActionRequestsObject } from '../../utils/objects';
import Pageination from '../../UI/Pageination/Pageination';
import Footer from '../../UI/footer/footer';

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


  for(let section in trendinActionRequestsObject){  
    if(section === SectionType.sectionType){   
      SectionActions = trendinActionRequestsObject[section]
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
              <h1 className='bigText'>{SectionType.trendingType} {SectionType.sectionType}</h1>
                <div className='flex justify_center'>
                  {SectionActions}  
                </div>
                <div>
                  <Pageination></Pageination>
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

    <div className='page_section '>
      <div className='flex center'>  
      {loader?<Spinner></Spinner>:showCards}
      </div>
      <Pageination></Pageination>
      <Footer></Footer>
    </div>

  );
}

export default Hompage;