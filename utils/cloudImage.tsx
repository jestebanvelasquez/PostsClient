import { ChangeEvent } from 'react';

export const uploadImage = async (e:React.ChangeEvent<HTMLInputElement>) => {
    try {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files![0]);
        data.append("upload_preset", 'example1');//nombre del folder
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/esteban3232/image/upload",{
                method:'POST',
                body: data,
            }
        )
        const file = await res.json()
        return file.secure_url
        
    } catch (error) {
        return error
    }
}