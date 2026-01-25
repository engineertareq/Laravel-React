<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 1. Fetch posts (Optional: use paginate() instead of all() for large lists)
        $posts = Post::all(); 
        return Inertia::render('Posts/Index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // 2. Render the Create Post form (React component)
        return Inertia::render('Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // 3. Validate input
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        // 4. Create the post
        Post::create($validated);

        // 5. Redirect back to the index page
        return redirect()->route('posts.index')
            ->with('message', 'Post created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        // Usually not needed if you list everything in index, 
        // but useful if you have a "Read More" page.
        return Inertia::render('Posts/Show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        // 6. Pass the specific post to the Edit component
        return Inertia::render('Posts/Edit', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        // 7. Validate
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        // 8. Update
        $post->update($validated);

        // 9. Redirect
        return redirect()->route('posts.index')
            ->with('message', 'Post updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        // 10. Delete the post
        $post->delete();

        // 11. Redirect (Inertia automatically handles the page refresh)
        return redirect()->route('posts.index')
            ->with('message', 'Post deleted successfully');
    }
}