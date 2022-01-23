import React,{useState} from "react";
import './LightPage.css'

const LightPage=()=>{
    var [bulb,setBulb]=useState("ON");
    var [bulb2,setBulb2]=useState("ON");

    const setSwitchName1=()=>{
        if(bulb==="ON"){
        setBulb("OFF");
          
        }
        if(bulb==="OFF"){
            setBulb("ON");
        }
        SetColor();
    }

    const setSwitchName2=()=>{
        if(bulb2==="ON"){
        setBulb2("OFF");
          
        }
        if(bulb2==="OFF"){
            setBulb2("ON");
        }
        SetColor2();
    }

    var b=document.getElementById('b');
    var  SetColor=()=>{
        if(bulb==="OFF"){
            b.style.backgroundColor="grey";
         }
         else{
              b.style.backgroundColor="yellow";
         }
    }
   
    var b2=document.getElementById('b2');
    var  SetColor2=()=>{
        if(bulb2==="OFF"){
            b2.style.backgroundColor="grey";
         }
         else{
              b2.style.backgroundColor="yellow";
         }
    }

    return(
        <div>
            <table border="25">
              <tr>
                  <td>
                    <button id="b" className="color-bulb"></button>
                    </td>
                    <td>
                    
                    <button id="b2" className="color-bulb"></button>
                    </td>
                    </tr>
                                       
                   <tr>
                      <td>
                    <button className="switch1" onClick={setSwitchName1}>{bulb}</button>
                    </td>
                    <td>
                    <button className="switch2" onClick={setSwitchName2}>{bulb2}</button>
                    </td>
                    </tr>
            </table>
        </div>
    )
}

export default LightPage;