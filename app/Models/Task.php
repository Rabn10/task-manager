<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    
    public function project() {
        return $this->belongsTo(Project::class);
    }

    public function status() {
        return $this->belongsTo(TaskStatus::class);
    }

    public function assignees() {
        return $this->belongsToMany(User::class, 'task_assignees');
    }
}
