'use client'
import React, { useEffect, useState } from 'react';

const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json(); // Await the JSON parsing
    return data;
}

const ApiPages = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPost();
            setPostData(data);
        };
        fetchPosts();
    }, []);

    const handleDelete = (id) => {
        // Filter out the post with the given id
        setPostData((prevPosts) => prevPosts.filter(post => post.id !== id));
    };

    return (
        <div className='grid grid-cols-1 p-10 lg:grid-cols-3 gap-6'>
            {postData?.slice(0, 10).map((data) => (
                <div key={data.id} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{data.title}</h2>
                        <p>{data.body.slice(0, 100)}</p>
                        <div className="card-actions flex justify-around">
                            <button className="btn btn-primary" onClick={() => handleDelete(data.id)}>Delete</button>
                            <button className="btn btn-primary">Update</button>
                            <a href={`/posts/${data.id}`} className="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ApiPages;
