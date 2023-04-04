// @ts-nocheck
import { User } from '../src/hooks/customForm';
import { LoginInterface } from '../src/hooks/customLogin';
import { WriteInterface } from '../src/hooks/customWrite';



export const validate = (validate: User) => {
    let errors: User = {
        username:'',
        email:'',
        password:'',
        rpassword:'',
        image:''
    };

    if(validate.username.length === 0) {
        errors.username = ' nombre y apellido requerido'
    } 
    if(validate.email.length === 0){
        errors.email = 'requerido'
    }
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(validate.email) ){
        errors.email = " example@gmail.com";
    }
    if(validate.password.length === 0){
        errors.password = 'requerido'
    }
    if(validate.rpassword.length=== 0 || validate.rpassword !== validate.password){
        errors.rpassword = 'deben coincidir'
    }
    return errors
}


export const validateLogin= (validate:LoginInterface) => {
    let errors: LoginInterface = {
        email:'',
        password:''
    };

    if( validate.email?.length === 0 ){
        errors.email = 'escribe tu email'
    }
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(validate.email) ){
        errors.email = " example@gmail.com";
    }
    if( validate.password?.length === 0 ){
        errors.password = 'escribe tu password'
    }

    return errors;

}

export const validateWrite = (validate: WriteInterface) => {
    let errors: WriteInterface = {
        cat:'',
        desc:'',
        image:'',
        title:''
    };

    if( validate.cat.length=== 0){
        errors.cat = 'elige una categoria'
    }
    if( validate.desc.length=== 0){
        errors.desc = 'escribe un texto para el blog'
    }
    if( validate.image.length=== 0){
        errors.image = 'sube una imagen'
    }
    if( validate.title.length=== 0){
        errors.title = 'añade un titulo'
    }

    return errors;
}