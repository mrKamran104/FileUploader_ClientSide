import React, { useEffect, useState } from 'react';
import globalData from './../globalData.json'

function ShowDataP(props) {

    const [data, setData] = useState(null)


    useEffect(() => {
        //(async ()=>
        fetch(globalData.url + '/p')
            .then(response => response.text())
            .then(d => {
                setData(JSON.parse(d))
            })
            .catch(() => console.log("Can’t access response. Blocked by browser?"))
        //    )();
    }, [data]);

    return (
        <div className='textCenter'>
            <h3>All Data</h3>
            {data ?
                <table className='center'>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Images</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((v, i) =>
                            <tr key={i}>
                                <td>
                                    {v.name}
                                </td>
                                <td>
                                    {v.email}
                                </td>
                                <td>
                                    {v.filePath.contentType.includes('image') ?
                                        <img src={`${globalData.url}/uploads/${v.fileName}`} alt='monogo_images' height='220' width='240' />
                                        : null}
                                    {v.filePath.contentType.includes('application') ?
                                        <embed src={`${globalData.url}/uploads/${v.fileName}`} width="200px" height="240px" />
                                        : null}
                                    {v.filePath.contentType.includes('audio') ?
                                        <audio src={`${globalData.url}/uploads/${v.fileName}`} width="200px" height="240px" controls/>
                                        : null}
                                    {v.filePath.contentType.includes('video') ?
                                        <video src={`${globalData.url}/uploads/${v.fileName}`} width="200px" height="240px" controls/>
                                        : null}

                                </td>
                                <td>
                                    {v.filePath ?
                                        <a href={`${globalData.url}/downloadP/${v.fileName}`} target="_blank" rel="noreferrer" >
                                            <button>Download</button>
                                        </a>
                                        : null}
                                </td>

                            </tr>
                        )}
                    </tbody>
                </table> : 'Loading...'}
        </div>
    );
}

export default ShowDataP;