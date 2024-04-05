<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Faixa;
use Illuminate\Http\Request;

class FaixaController extends Controller
{
    public function index(){
        return Faixa::all();
    }

    public function store(Request $request){

        $file = $request->file('url_faixa')->store('faixaUrls');

        if($file === false){
            return response()->json(['message'=>'Nenhum faixa encontrado'],404);
        };

        $faixa = Faixa::create([
            'faixa_name' => $request->input('faixa_name'),
            'url_faixa' => $file,
            'album_id' => $request->input('album_id')
        ]);

         return response()->json(['message'=>'faixa adicionada'],201);
    }
    public function searchByName(Request $request){
        info($request);
        $request-> validate([
            'nome' => 'required|string',
        ]);

        $nome = $request->input('nome');

        $faixas = Faixa::where('faixa_name', 'like', "%$nome%")->with('album')->get();

        if($faixas ->isEmpty()){
            return response()->json(['message'=>'Nenhum album encontrado'],404);

        }
        return response()->json($faixas,200);
    }

    public function destroy($id){
        Faixa::find($id)->delete();
    }
}
