import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Sample(){

    const [samples, setSamples] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:9090")
        .then(res => setSamples(res.data))
        .catch(err => console.log(err));

    },[])

    return(
        <>
            <div>
                {
                    samples.map(sample =>
                        <div key={sample}> 

                            <div>{sample.id}</div>
                            <div>{sample.name}</div>
                            <div>{sample.age}</div>
                            <div>{sample.contact}</div> 

                        
                         </div>
                    )
                }
            </div>

        </>
    )
}

export default Sample