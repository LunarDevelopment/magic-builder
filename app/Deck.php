<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Deck extends Model {

  /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
  protected $table = 'decks';
  protected $fillable = array('name', 'color', 'favourite', 'cards');
}
