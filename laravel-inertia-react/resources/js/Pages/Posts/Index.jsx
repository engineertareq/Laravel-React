
import React from 'react';
import Layout from '@/Layouts/layout/layout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, router } from '@inertiajs/react'; // Ensure using @inertiajs/react

export default function Index(props) {
    // Destructure posts and flash from props
    const { posts, flash } = usePage().props;

    function destroy(id) {
        if (confirm("Are you sure you want to delete this post?")) {
            router.delete(route("posts.destroy", id));
        }
    }

    return (
        <AuthenticatedLayout
            // IMPORTANT: passing auth.user to the layout to prevent "name of undefined" error
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    {/* Success Message Alert */}
                    {flash?.message && (
                        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                            <span className="block sm:inline">{flash.message}</span>
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none hover:bg-green-600 transition"
                                    href={route("posts.create")}
                                >
                                    Create Post
                                </Link>
                            </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20 text-left">No.</th>
                                        <th className="px-4 py-2 text-left">Title</th>
                                        <th className="px-4 py-2 text-left">Body</th>
                                        <th className="px-4 py-2 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts && posts.length > 0 ? (
                                        posts.map(({ id, title, body }) => (
                                            <tr key={id} className="hover:bg-gray-50">
                                                <td className="border px-4 py-2">{id}</td>
                                                <td className="border px-4 py-2">{title}</td>
                                                <td className="border px-4 py-2 truncate max-w-xs">{body}</td>
                                                <td className="border px-4 py-2">
                                                    <Link
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition mr-2"
                                                        href={route("posts.edit", id)}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => destroy(id)}
                                                        tabIndex="-1"
                                                        type="button"
                                                        className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-4 border-t text-center text-gray-500">
                                                No posts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}