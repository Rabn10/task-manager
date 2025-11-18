<?php

use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('welcome');
//});

Route::any("{all}", function () {
    return view("welcome");
})->where("all", '^(?!graphql).*$');
