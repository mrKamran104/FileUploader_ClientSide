import React, { useEffect, useState } from 'react';

function ShowDataP(props) {

    const [data, setData] = useState(null)


    useEffect(() => {
        //(async ()=>
        fetch('http://localhost:3001/p')
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
                                        <img src={`http://localhost:3001/uploads/${v.fileName}`} alt='monogo_images' height='220' width='240' />
                                        : null}
                                    {v.filePath.contentType.includes('application') ?
                                        <embed src={`http://localhost:3001/uploads/${v.fileName}`} width="200px" height="240px" />
                                        : null}
                                    {v.filePath.contentType.includes('audio') ?
                                        <audio src={`http://localhost:3001/uploads/${v.fileName}`} width="200px" height="240px" controls/>
                                        : null}
                                    {v.filePath.contentType.includes('video') ?
                                        <video src={`http://localhost:3001/uploads/${v.fileName}`} width="200px" height="240px" controls/>
                                        : null}

                                </td>
                                <td>
                                    {v.filePath ?
                                        <a href={`http://localhost:3001/downloadP/${v.fileName}`} target="_blank" rel="noreferrer" >
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