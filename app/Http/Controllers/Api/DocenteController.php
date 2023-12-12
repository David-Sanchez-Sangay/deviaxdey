<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Docente;

class DocenteController extends Controller
{

    public function index()
    {
        $docentes = Docente::all();
        return $docentes;
    }

    public function store(Request $request)
    {
        $docentes = new Docente();
        $docentes->nombre = $request->nombre;
        $docentes->grado = $request->grado;
        $docentes->seccion = $request->seccion;
        $docentes->cargo = $request->cargo;
        $docentes->categoria = $request->categoria;

        $docentes->save();
    }

    public function show(string $id)
    {
        $docentes = Docente::find($id);
        return $docentes;
    }

    public function update(Request $request, string $id)
    {
        $docentes = Docente::findOrFail($request->id);
        $docentes->nombre = $request->nombre;
        $docentes->grado = $request->grado;
        $docentes->seccion = $request->seccion;
        $docentes->cargo = $request->cargo;
        $docentes->categoria = $request->categoria;
        
        $docentes->save();
        return $docentes;
    }

    public function destroy(string $id)
    {
        $docentes = Docente::destroy($id);
        return $docentes;
    }
}
