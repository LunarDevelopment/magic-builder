<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Card extends Model {

    /**
	 * The database table used by the model.
	 *
	 * @var string
     */
    protected $table = 'ncards';
    protected $primaryKey = 'Nid';

}
