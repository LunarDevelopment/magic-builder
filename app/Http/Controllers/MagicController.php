<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Config;
use JWT;
use App\User;
use App\Set;
use App\Card;
use App\Deck;
use DB;

class MagicController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function getSets()
	{
		//
      $sets = Set::all();
      return $sets;
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
    public function getCards()
	{
      //
      $cards = Card::all();
      return $cards;
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
    public function getDecks()
	{
      //
      $decks = Deck::all();
      return $decks;
	}
    public function createDeck(Request $request)
	{
      Deck::updateOrCreate(
        ['id' => $request->id],
        ['name' => $request->name,
         'color' => $request->color,
         'favourite' => $request->favourite,
         'cards' => json_encode($request->cards)]
      );
	}
    public function deleteDeck(Request $request)
	{
      //
      DB::table('decks')->where('name', '=', $request->name)->delete();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
