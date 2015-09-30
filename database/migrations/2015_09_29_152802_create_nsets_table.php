<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNsetsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('nsets', function(Blueprint $table)
		{
          $table->string('Nname');
          $table->string('Ncode');
          $table->string('Ncode_magiccards');
          $table->string('Ndate');
          $table->string('Nis_promo');
          $table->string('Nboosterpack_nM');
          $table->string('Nboosterpack_nR');
          $table->string('Nboosterpack_nU');
          $table->string('Nboosterpack_nC');
          $table->string('Nboosterpack_nE');
          $table->string('Nboosterpack_pM');
          $table->string('Nboosterpack_pR');
          $table->string('Nboosterpack_typeExtra1');
          $table->string('Nboosterpack_typeExtra2');
          $table->string('Nboosterpack_listExtra1');
          $table->string('Nboosterpack_listExtra2');
          $table->string('Nboosterpack_has_foil');
          $table->string('Nboosterpack_pF');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('nsets');
	}

}
