// technical guide 
//https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react

import React from "react";


export default function Fileuploader(props) {

    let fileRef = React.useRef();

    console.log(fileRef.current);

    let handleChange = (e) => {
        let fileName = e.target.files[0].name;
        props.browse (fileName, fileRef.current);               
    }
    return (
        <div>
            <input 
            type="file"
            onChange = { handleChange }
            ref = {fileRef}       
            />
        </div>
    )
}