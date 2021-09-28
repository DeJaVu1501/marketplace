import React, { useState, useEffect, useRef, useCallback, MyContext} from "react";

import { connect } from "react-redux";
import {useDropzone} from 'react-dropzone'

export function MyDropzone({getData,onSend,todo}) {
    console.log(todo)
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop: files => files.map(x=> onSend(x,todo))});
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);
  
    return (
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps() }/>
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul> {files} </ul>
        </aside>
      </section>
    );
  }
