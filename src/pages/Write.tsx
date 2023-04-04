import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';
import { customWrite } from '../hooks/customWrite';




export const Write = () => {


    const { handleChange, handleImage, handleSubmit, post, error, handleText } = customWrite()


    return (
        <div className='other' >
                <form onSubmit={(e) => handleSubmit (e)} className="write">
                    <div className="content">
                        <input type="text" placeholder='Title' name='title' onChange={(e) => handleChange(e)} />
                        <div className="editorContainer">
                            <ReactQuill className='editor' theme='snow' value={post.desc} onChange={(e) => handleText(e)} />
                        </div>
                    </div>
                    <div className="menu">
                        <div className="item">
                            <h1>Publicado</h1>
                            <span>
                                <b>Estado: </b> Borrador
                            </span>
                            <span>
                                <br />
                                <b>Visibilidad: </b> Publico
                            </span>
                            <br />
                            <input style={{ display: 'none' }} type="file" id='file' onChange={(e) => handleImage(e)} />
                            <label className='file' htmlFor="file" >Subir Imagen</label>
                            <div className="buttons">
                                <button type='submit'>Guardar</button>
                                {/* <button>Actualizar</button> */}
                            </div>
                        </div>
                        <div className="item">
                            <h1>Categoria</h1>
                            <div className='cat'>
                                <input type="radio" name='cat' onChange={(e) => handleChange(e)} value='arte' id='arte' />
                                <label htmlFor="arte">Arte</label>
                            </div>

                            <div className='cat'>
                                <input type="radio" name='cat' onChange={(e) => handleChange(e)} value='ciencia' id='ciencia' />
                                <label htmlFor="ciencia">Ciencia</label>
                            </div>

                            <div className='cat'>
                                <input type="radio" name='cat' onChange={(e) => handleChange(e)} value='tecnologia' id='tecnologia' />
                                <label htmlFor="tecnologia">Tecnologia</label>
                            </div>

                            <div className='cat'>
                                <input type="radio" name='cat' onChange={(e) => handleChange(e)} value='cine' id='cine' />
                                <label htmlFor="cine">Cine</label>
                            </div>

                            <div className='cat'>
                                <input type="radio" name='cat' onChange={(e) => handleChange(e)} value='comida' id='comida' />
                                <label htmlFor="comida">Comida</label>
                            </div>

                            <div className='cat'>
                                <input type="radio" name='cat' onChange={(e) => handleChange(e)} value='diseño' id='diseño' />
                                <label htmlFor="diseño">Diseño</label>
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    )
}
