<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'description', 'created_by'];

    public function scopeDeleted($query) {
        return $query->where('delete_flag', false);
    }
}
