<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function home (){
         return Inertia::render('home');
    }
    public function contact (){
         return Inertia::render('contact');
    }
}
