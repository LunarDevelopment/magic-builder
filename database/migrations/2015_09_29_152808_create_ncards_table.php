<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNcardsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ncards', function(Blueprint $table)
		{
          $table->increments('Nid');
          $table->string('Nname');
          $table->string('Nset');
          $table->string('Ntype');
          $table->string('Nrarity');
          $table->string('Nmanacost');
          $table->string('Nconverted_manacost');
          $table->string('Npower');
          $table->string('Ntoughness');
          $table->string('Nloyalty');
          $table->string('Nability');
          $table->string('Nflavor');
          $table->string('Nvariation');
          $table->string('Nartist');
          $table->string('Nnumber');
          $table->string('Nrating');
          $table->string('Nruling');
          $table->string('Ncolor');
          $table->string('Ngenerated_mana');
          $table->string('Npricing_low');
          $table->string('Npricing_mid');
          $table->string('Npricing_high');
          $table->string('Nback_id');
          $table->string('Nwatermark');
          $table->string('Nprint_number');
          $table->string('Nis_original');
          $table->string('Nname_CN');
          $table->string('Nname_TW');
          $table->string('Nname_FR');
          $table->string('Nname_DE');
          $table->string('Nname_IT');
          $table->string('Nname_JP');
          $table->string('Nname_PT');
          $table->string('Nname_RU');
          $table->string('Nname_ES');
          $table->string('Nname_KO');
          $table->string('Ntype_CN');
          $table->string('Ntype_TW');
          $table->string('Ntype_FR');
          $table->string('Ntype_DE');
          $table->string('Ntype_IT');
          $table->string('Ntype_JP');
          $table->string('Ntype_PT');
          $table->string('Ntype_RU');
          $table->string('Ntype_ES');
          $table->string('Ntype_KO');
          $table->string('Nability_CN');
          $table->string('Nability_TW');
          $table->string('Nability_FR');
          $table->string('Nability_DE');
          $table->string('Nability_IT');
          $table->string('Nability_JP');
          $table->string('Nability_PT');
          $table->string('Nability_RU');
          $table->string('Nability_ES');
          $table->string('Nability_KO');
          $table->string('Nflavor_CN');
          $table->string('Nflavor_TW');
          $table->string('Nflavor_FR');
          $table->string('Nflavor_DE');
          $table->string('Nflavor_IT');
          $table->string('Nflavor_JP');
          $table->string('Nflavor_PT');
          $table->string('Nflavor_RU');
          $table->string('Nflavor_ES');
          $table->string('Nflavor_KO');
          $table->string('Nlegality_Block');
          $table->string('Nlegality_Standard');
          $table->string('Nlegality_Modern');
          $table->string('Nlegality_Legacy');
          $table->string('Nlegality_Vintage');
          $table->string('Nlegality_Highlander');
          $table->string('Nlegality_French_Commander');
          $table->string('Nlegality_Tiny_Leaders_Commander');
          $table->string('Nlegality_Modern_Duel_Commander');
          $table->string('Nlegality_Commander');
          $table->string('Nlegality_Peasant');
          $table->string('Nlegality_Pauper');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ncards');
	}

}
