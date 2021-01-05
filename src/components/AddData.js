import axios from 'axios';
import React from 'react';
import globalData from './../globalData.json'

function AddData(props) {

    // console.log(props)

    const add_Data = (data) => {
        const formData = new FormData();
        formData.append('file', data.file.files[0]);
        formData.append('name', data.name.value);
        formData.append('email', data.email.value);

        props.show === 'buffer' ?
            axios.post(globalData.url + '/add_dataB',
                formData
            ).then((json) => console.log('data:', json))
            :
            axios.post(globalData.url + '/add_dataP',
                formData
            ).then((json) => console.log('data:', json))
    }

    return (
        <div className='textCenter' style={{ marginTop: 25 }}>
            {/* <form onSubmit={(e)=> {e.preventDefault(); add_Data(e.target.name.value, e.target.email.value);}}>
                <input  type="text" name='name' placeholder="enter your name" />
                <input type="email" placeholder="enter your email" name="email" />
                <input type="submit" value="Submit" />
            </form> */}

            <form onSubmit={(e) => {
                e.preventDefault();
                add_Data(e.target)
                // console.log(e.target.image.files[0])
            }} >
                <input type="text" name='name' placeholder="enter your name" />
                <input type="email" placeholder="enter your email" name="email" />
                <input type="file" name="file" accept='*' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddData;