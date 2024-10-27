import React from 'react';

const getDetailsPage = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json()
    return data;
}

const PostDetailsPage = async ({ params }) => {
    const { title, body } = await getDetailsPage(params.id)
    console.log(params.id)
    return (
        <div className='p-10'>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Update title</span>
                </div>
                <input type="text" placeholder={title} className="input input-bordered w-full max-w-xs" />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Update body</span>
                </div>
                <input type="text" placeholder={body} className="input input-bordered w-full max-w-xs" />
            </label>
            <button>Update</button>
        </div>
    );
};

export default PostDetailsPage