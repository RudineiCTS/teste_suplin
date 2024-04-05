<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Album;

class AlbumController extends Controller
{
    public function index(){

        return Album::all();
    }
    public function store(Request $request){
        // Album::create($request->all());

        $file = $request->file('album_image')->store('albumImages');
        if($file === false){
            return response()->json(['message'=>'Nenhum album encontrado'],404);
        };

        $album = Album::create([
            'album_name'=> $request->input('album_name'),
            'album_image' => $file
        ]);
        return response()->json(['message'=>'album criado'],201);


    }
    public function show($id){
        return Album::find($id);
    }
    public function update(Request $request, $id){
        Album::find($id)->update($request->all());
    }
    public function destroy($id){
        Album::find($id)->delete();
    }
    public function searchByName(Request $request){
        info($request);
        $request-> validate([
            'nome' => 'required|string',
        ]);

        $nome = $request->input('nome');

        $albums = Album::where('album_name', 'like', "%$nome%")->get();

        if($albums ->isEmpty()){
            return response()->json(['message'=>'Nenhum album encontrado'],404);

        }
        return response()->json($albums,200);
    }

}
