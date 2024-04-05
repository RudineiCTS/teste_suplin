<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faixa extends Model
{
    use HasFactory;
    protected $table = 'faixa'; // Defina o nome da sua tabela aqui
    protected $fillable=[
        'faixa_name',
        'url_faixa',
        'album_id',
    ];

    public function album(){
        return $this->belongsTo('App\Models\Album');
    }
}
