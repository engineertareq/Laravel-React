import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create(props) {
    // 1. Initialize the form with empty fields
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        body: '',
    });

    // 2. Handle Form Submission
    function submit(e) {
        e.preventDefault();
        post(route('posts.store'));
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Post</h2>}
        >
            <Head title="Create Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            
                            <form onSubmit={submit}>
                                {/* Title Input */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.title && <div className="text-red-600 mt-1">{errors.title}</div>}
                                </div>

                                {/* Body Textarea */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                                        Body
                                    </label>
                                    <textarea
                                        id="body"
                                        value={data.body}
                                        onChange={(e) => setData('body', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                                    ></textarea>
                                    {errors.body && <div className="text-red-600 mt-1">{errors.body}</div>}
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Create Post
                                    </button>
                                    
                                    <Link
                                        href={route('posts.index')}
                                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}