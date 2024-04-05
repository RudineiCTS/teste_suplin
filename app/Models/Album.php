<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;
    protected $table = 'album';
    protected $fillable=[
        'album_name',
        'album_image',
    
    ];

    public function faixas(){
        return $this->hasMany('App\Models\Faixa');
    }
}
