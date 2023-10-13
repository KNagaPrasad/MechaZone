import React, {useEffect, useState} from "react";
import axios from "axios";
import { API_URL } from "../Services/Api";

const Bikes =()=>{
  const [bikes, setBikes]= useState(null);
  useEffect(()=>{
    getBikes();
  }, []);

  const getBikes = () =>{
    axios
    .get(API_URL+"/getbikes").then((res)=>{
      if(res && res.data && res.data.length >0){ 
        setBikes(res.data);
      }
      
    }).catch((err)=>{
      console.log(err);
    })
  }  
    return(
      <>
     This is bike
      </>
    )
  }

export default Bikes;