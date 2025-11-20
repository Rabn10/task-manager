<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    
    protected $fillable = [
        'name',
        'description',
        'project_id',
        'status_id',
        'priority',
        'due_date',
        'created_by',
    ];

    public function scopeDeleted($query) {
        return $query->where('is_deleted', false);
    }

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
