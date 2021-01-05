import React, { useEffect, useState } from 'react';
import globalData from './../globalData.json'

function ShowDataB(props) {

    const [data, setData] = useState(null)


    useEffect(() => {
        //(async ()=>
        fetch(globalData.url + '/b')
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
                                    {v.fileData.contentType.includes('image') ?
                                        <img src={`data:${v.fileData.contentType};base64,${Buffer.from(v.fileData.data).toString('base64')}`} alt='monogo_images' height='220' width='240' />
                                        : null}
                                    {v.fileData.contentType.includes('application') ?
                                        <embed src={`data:${v.fileData.contentType};base64,${Buffer.from(v.fileData.data).toString('base64')}`} width="200px" height="240px" />
                                        : null}
                                    {v.fileData.contentType.includes('audio') ?
                                        <audio src={`data:${v.fileData.contentType};base64,${Buffer.from(v.fileData.data).toString('base64')}`} width="200px" height="240px" controls/>
                                        : null}

                                </td>
                                {/* <td>
                                    {v.fileData ?
                                        <a href={`data:${v.fileData.contentType};base64,${Buffer.from(v.fileData.data).toString('base64')}`} download={v.fileName}>
                                            <button onClick={() => download_file(v.fileName)}>Download</button>
                                        </a>
                                        : null}
                                </td> */}
                                <td>
                                    {v.fileData ?
                                        <a href={`${globalData.url}/downloadB/${v.fileName}`} target="_blank" rel="noreferrer" >
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

export default ShowDataB;