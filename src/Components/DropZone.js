import React, {useRef} from "react";
import { actionAvaChange } from "../actions";

import { connect } from "react-redux";
import {useDropzone} from 'react-dropzone'

export function MyDropzone({onSend}) {
  const loading = useRef()  
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    if(acceptedFiles.length > 0 && !loading.current) {
      onSend(acceptedFiles[0])
      loading.current = true
    }
    return (
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps() }/>
          <h6>Нажмите для смены аватарки, или перетащите файл</h6>
        </div>      
    );
  }

const CDrop = connect(null,{onSend:actionAvaChange})(MyDropzone)
export default CDrop
