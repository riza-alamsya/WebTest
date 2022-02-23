<?php

use \Illuminate\Http\Request;
/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
$router->group(['prefix' => 'api'], function () use ($router) {

  $router->post('/login', function (Request $request) {
    $this->validate($request, [
      'email' => 'required|string',
      'password' => 'required|string',
  ]);
  $credentials = $request->only(['email', 'password']);
    if (! $token = Auth::attempt($credentials)) {
      return response()->json(['message' => 'Unauthorized'], 200 );
    }
    return response()->json(compact('token'));
  });

    $router->group(['middleware' => 'auth'], function() use ($router){
      $router->get('/quotes/{number}', function ($number) {
        $json = file_get_contents('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json');
        $toarray = json_decode($json);
        shuffle($toarray);
        $result = [];
        for ($i=0; $i < $number; $i++) { 
          array_push($result,$toarray[$i]);
        }
        return json_encode($result);
      });
    });
  
});
   
