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
        //$user = $context->user();
        //$user_id = $user->id;
        $project = Project::create([
            'name' => $args['name'],
            'description' => $args['description'],
            'created_by' => 1,
        ]);

        return $project;
    }
}
