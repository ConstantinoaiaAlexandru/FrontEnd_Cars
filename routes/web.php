<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','CarsController@index');
Route::get('/cars/post','CarsController@create');
Route::get('/cars/{id}','CarsController@show');
Route::post('/cars/post','CarsController@store');
Route::get('/cars/{id}/edit','CarsController@edit');

Route::get('/manufacturers','ManufacturersController@index');
Route::get('/manufacturers/post','ManufacturersController@create');
Route::post('/manufacturers/post','ManufacturersController@store');
Route::get('/manufacturers/{id}/edit','ManufacturersController@edit');
