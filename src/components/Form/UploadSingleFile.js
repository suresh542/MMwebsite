import React, { Component } from 'react'
import _ from 'lodash';
import { ErrorMessage } from 'formik';
import './UploadSingleFile.less'



class UploadSingleFile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filesMap: new Map(),
            filesdisplay: []
        }
    }

    overrideDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    componentDidMount() {
        const { previousImage } = this.props;
       
        if (previousImage !== "" && previousImage !== undefined && previousImage !== null) {
         
            let newMap = new Map();
            let key=""
            let documenttext=""
            let replace=""

              //   key = previousImage.slice(previousImage.lastIndexOf('/') + 1, previousImage.length);
               

            //  console.log(this.props.name);
            if(this.props.name==="courseContent")
            {
              key = previousImage.slice(previousImage.lastIndexOf('/') + 1, previousImage.length);
            }
              if(this.props.name==="documents")
              {
                documenttext = previousImage.slice(previousImage.lastIndexOf('/') + 1, previousImage.length);
                key=documenttext.replace(".vnd.openxmlformats-officedocument.wordprocessingml.document"," ")
                replace=key.replace("%20"," ")
              }
              console.log(replace);
                
                this.setState({
                    filesMap: this.state.filesMap.set(this.props.name, {name : key , file : null})
                });

            // this.props.onChange(this.props.name, null);
        }
    
    }


    addFiles(e) {
        e.preventDefault();
        e.stopPropagation();
        const SUPPORTED_FILES = [
            this.props.accept
        ];

        // debugger
        // executed when user will drag files of Selected files
        const SingleFile = e.dataTransfer || e.currentTarget;
        if (SingleFile) {
            let base64url;
            const OriginalFile = SingleFile.files[0];
            if (OriginalFile)
                if (SUPPORTED_FILES.indexOf(OriginalFile.type) === -1) {

                } else if (SUPPORTED_FILES.indexOf(OriginalFile.type) >= 0) {

                    this.toBase64(OriginalFile).then(res => {
                        base64url = res;
                        const obj = {
                            filename: OriginalFile.name,
                            base64url: base64url
                        };
                        let newAry = [];
                        newAry.push(obj);
                        this.setState({
                            filesdisplay: newAry
                        });
                        this.props.onChange(
                            this.state.filesdisplay[0].filename,
                            this.state.filesdisplay[0].base64url
                        );
                        console.log(this.state.filesdisplay);
                    });
                    this.setState({
                        uploadedFiles: this.state.filesMap.set(
                            this.props.name,
                            OriginalFile
                        )
                    });
                }
        }
    };

    toBase64 = async file => await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    showFiles = () => {

        const renderImages = Array.from(this.state.filesMap)
        // console.log(this.state.filesMap);
        const imagetodisplay = _.take(renderImages, 10)
        // console.log(imagetodisplay);
        return imagetodisplay.map((item, index) => (
            <div className="text" key={index}>
                <div className="buttonsection">
                    <div className="name">{item[1].name}</div>
                    {/* <div className="clearbutton">
                    <div onClick={() => {
                            
                            // console.log("Mapdata" , this.state.filesMap);
                            this.state.filesMap.delete(item[1])
                            console.log( this.state.filesMap);
                            this.props.onChange(this.props.name, null);
                            this.setState({
                                filesMap: this.state.filesMap
                            })
                        }}>X</div>
                    </div> */}
                </div>
            </div>
        ))
    }

    toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    render() {
        const { onClick, label, className, disabled, accept, id } = this.props;

        return (
            <div className="ImageFileUploadsection">
                <div>

                </div>
                <div
                    id="SingleFileUpload"
                    className={`input  ${className ? `${className}` : null}`}
                >
                    <span className="field-container_fieldname">{label}</span>
                    <div className="fileUpladContainer">
                        <input
                            type="file"
                            name={name}
                            id={id}
                            onClick={onClick}
                            accept={accept}
                            onChange={(event) => this.addFiles(event)}
                        />
                        <label
                            id="fileLabel"
                            htmlFor={id}
                        >
                          Attach CV
                            {/* <img src={this.props.imageChange ? UploadWhite : Upload} alt="uploadfile" /> */}
                            {/* <img src={Upload} alt="uploadfile"/> */}
                        </label>
                    </div>
                    {/* {this.state.filesdisplay.length === 1 ? <div className="fileListContainer">{this.renderFiles()}</div> : null} */}
                    {/* <div className="fileListContainer">{this.renderFiles()}</div> */}
                </div>

                <div className="preview">
                    <div className="withimage">

                        {this.showFiles()}
                      
                    </div>
                </div>
                <div style={{marginTop:'20px'}}>
                <ErrorMessage name={this.props.name}>
                            {errorMessage => {
                                return (
                                    <div className="error_message">{errorMessage}</div>
                                )
                            }}
                </ErrorMessage>
                </div>
              
            </div>
        )
    }
}

export default UploadSingleFile