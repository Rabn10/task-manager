<?php

namespace App\GraphQL\Mutations;
use Nuwave\Lighthouse\Execution\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use App\Models\Project;
use Auth;

class ProjectMutation
{
    public function create($root, array $args, GraphQLContext $context): Project
    {
        $user = $context->user();
        $user_id = $user->id;
        $project = Project::create([
            'name' => $args['name'],
            'description' => $args['description'],
            'created_by' => $user_id,
        ]);

        return $project;
    }

    public function update($root, array $args, GraphQLContext $context): Project
    {
        $project = Project::find($args['id']);
        $project->name = $args['name'];
        $project->description = $args['description'];
        $project->save();

        return $project;
    }

    public function delete($root, array $args, GraphQLContext $context): Project
    {
        $project = Project::find($args['id']);
        $project->delete_flag = true;
        $project->save();

        return $project;
    }
}
