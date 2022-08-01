
import React,{ useState, useEffect } from 'react';
import { Chart,Bar,Doughnut } from 'react-chartjs-2';
import './Statics.css'
import 'chart.js/auto';
type Props = {}

interface Geners{
    genres:[{name:string}]
}

interface FavObject{
    [key:string]:number
} 

const Statics = (props: Props) => {
    
    const [favorites,SetFavorites] = useState<Geners[]>([])
    
    useEffect(() =>{ // Getting the data from loacl storagh and save it in state

        let favorites = localStorage.getItem("data")
        if(favorites){
          let Favorites = JSON.parse(favorites)
          SetFavorites(Favorites)
        }
       
         
    },[])
    
    let OBJ:FavObject = {}
    favorites.forEach(p =>{
        p.genres.forEach(R =>{
            
            if(OBJ[R.name]){
                OBJ[R.name] = OBJ[R.name] + 1
            }else{
                OBJ[R.name] = 1
            }

        })
    })    
    // console.log(OBJ);

    let labels = []
    let genNumber:number[] = []

    for(let gen in OBJ){
      
        labels.push(gen)
        genNumber.push(OBJ[gen])
    }
    console.log(genNumber);
    
    // const data = {
    //     labels:labels,
    //     dataset:[{
    //         label:'hello',
    //         data:genNumber,

    //     }]
    // }
    
    const data = {
        labels:labels,
        datasets: [{
          label: 'genars',
          data: genNumber,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 205, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(201, 203, 207, 0.6)'
          ],
          hoverOffset: 4
        }]
      };



    return (
        <div>
        <div className='screen flex container align_center justify_center'>
          <div>
           <h1 style={{'textAlign':'center'}}>Statistics of your favorites Genars</h1>
             <Bar id='graph' data={data}> 
        
            </Bar>
          </div>
        </div>
        </div>
    )
}

export default Statics