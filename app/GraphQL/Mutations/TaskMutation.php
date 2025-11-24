<?php

namespace App\GraphQL\Mutations;
use Nuwave\Lighthouse\Execution\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use App\Models\Task;
use App\Models\TaskAssignee;

class TaskMutation
{
    public function create($root, array $args, GraphQLContext $context): Task
    {
        $user = $context->user();
        $user_id = $user->id;
        $task = Task::create([
            'name' => $args['name'],
            'description' => $args['description'],
            'project_id' => $args['project_id'],
            'status_id' => $args['status_id'],
            'priority' => $args['priority'],
            'due_date' => $args['due_date'],
            'created_by' => $user_id,
        ]);

        TaskAssignee::create([
            'task_id' => $task->id,
            'user_id' => $user_id
        ]);

        return $task;
    }

    public function update($root, array $args, GraphQLContext $context): Task
    {
        //$user = $context->user();
        //$user_id = $user->id;
        $task = Task::find($args['id']);
        $task->name = $args['name'];
        $task->description = $args['description'];
        $task->project_id = $args['project_id'];
        $task->status_id = $args['status_id'];
        $task->priority = $args['priority'];
        $task->due_date = $args['due_date'];
        $task->save();


        TaskAssignee::updateOrCreate(
        [    
            'task_id' => $task->id,
            'user_id' => $args['user_id']
        ]);

        return $task;
    }

    public function delete($root, array $args, GraphQLContext $context): Task
    {
        $task = Task::find($args['id']);
        $task->is_deleted = true;
        $task->save();

        return $task;
    }
}
