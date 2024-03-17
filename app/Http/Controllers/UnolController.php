<?php

namespace App\Http\Controllers;

use App\Http\Requests\WishRequest;
use App\Services\WishesService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UnolController extends Controller
{
    public function __construct(protected WishesService $wishService)
    {}
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fileNames = [];
        $path = public_path('unol/img'); // Use forward slash (/) for directory separator
        $files = \File::allFiles($path);

        foreach ($files as $file) {
            $fileNames[] = pathinfo($file, PATHINFO_FILENAME) . '.' . pathinfo($file, PATHINFO_EXTENSION);
        }

        return Inertia::render('UnolClient1', [
            'image' => $fileNames,
            'wishes' => $this->wishService->getWhere(),
        ]);
    }

    public function index2(){

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(WishRequest $request)
    {
        // return $request->validated();
        $this->wishService->storeData($request->validated());
        if($request->queryString != null) {
            return redirect(route('dekadi-dira-14') . $request->queryString);
        } else {
            return redirect(route('dekadi-dira-14'));
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store2(WishRequest $request)
    {
        // return $request->validated();
        $this->wishService->storeData($request->validated());
        if($request->queryString != null) {
            return redirect(route('dekadi-dira-14') . $request->queryString);
        } else {
            return redirect(route('dekadi-dira-14'));
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
