<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        //User::factory()->create([
        //    'name' => 'Test User',
        //    'email' => 'test@example.com',
        //]);

        $now = Carbon::now();

        DB::table('task_statuses')->insert([
            [
                'name' => 'To Do',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'In Progress',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'Done',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);


    }
}
