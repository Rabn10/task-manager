<?php

namespace App\GraphQL\Mutations;

use Nuwave\Lighthouse\Execution\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
//use Joselfonseca\LighthouseGraphQLPassport\GraphQL\Mutations\BaseAuthResolver;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
class Register
{
    public function create($root, array $args): User
    {
        $user = User::create([
            'name' => $args['name'],
            'email' => $args['email'],
            'password' => Hash::make($args['password']),
        ]);

        return $user;
    }

    public function login($root, array $args)
    {
        //Find user by email
        $user = User::where('email',$args['email'])->first();
       // dd($user);

        if(! $user || ! Hash::check($args['password'], $user->password)) {
            return [
                'status' => 0,
                'message' => 'Invalid credentials',
                'user' => null,
                'token' => null,
            ];
        }

        $token = $user->createToken('auth_token')->accessToken;

        return [
            'status' => 1,
            'message' => 'Login successful',
            'token' => $token,
            'user' => $user
        ];
    }
}