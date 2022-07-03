<?php
/**
 * @return array
 */
function getPokemon(){
    return [
        [
            "id" => 1,
            "name" => "Houndoom",
            "detailsImg" => "images/Houndoom.png",
        ],
        [
            "id" => 2,
            "name" => "Alolan Raichu",
            "detailsImg" => "images/raichu.png",
        ],
        [
            "id" => 3,
            "name" => "Serperior",
            "detailsImg" => "images/serperior.png",
        ],
        [
            "id" => 4,
            "name" => "Infernape",
            "detailsImg" => "images/infernape.png",
        ],
        [
            "id" => 5,
            "name" => "Empoleon",
            "detailsImg" => "images/empoleon.png",
        ],
        [
            "id" => 6,
            "name" => "Sobble",
            "detailsImg" => "images/sobble.png",
        ],
        [
            "id" => 7,
            "name" => "Excadrill",
            "detailsImg" => "images/excadrill.png",
        ],
        [
            "id" => 8,
            "name" => "Dratini",
            "detailsImg" => "images/dratini.png",
        ],
        [
            "id" => 9,
            "name" => "Dialga",
            "detailsImg" => "images/dialga.png",
        ]
        ];
}

/**
 * @param $id
 * @return mixed
 */
function getPokemonDetails($id){
    $stats = [
        1 => [
            "detailsId" => 1,
            "types" => ['dark','fire'],
            "dexNumber" => "Nr.229",
            "detailsName" => "Houndoom",
            "detailsNickName" => "Dark pokemon",
            "abilities" => ['Early Bird','Flash Fire','Unnerve'],
        ],
        2 => [
            "detailsId" => 2,
            "types" => ['electric','psychic'],
            "dexNumber" => "Nr.26",
            "detailsName" => "Alolan Raichu",
            "detailsNickName" => "Mouse pokemon",
            "abilities" => ['Surge Surfer'],
        ],
        3 => [
            "detailsId" => 3,
            "types" => ['grass'],
            "dexNumber" => "Nr.497",
            "detailsName" => "Serperior",
            "detailsNickName" => "Regal pokemon",
            "abilities" => ['Contrary','Overgrow'],
        ],
        4 => [
            "detailsId" => 4,
            "types" => ['fire','fighting'],
            "dexNumber" => "Nr.392",
            "detailsName" => "Infernape",
            "detailsNickName" => "Flame pokemon",
            "abilities" => ['Blaze','Iron Fist'],
        ],
        5 => [
            "detailsId" => 5,
            "types" => ['water','steel'],
            "dexNumber" => "Nr.395",
            "detailsName" => "Empoleon",
            "detailsNickName" => "Emperor pokemon",
            "abilities" => ['Torrent','Defiant'],
        ],
        6 => [
            "detailsId" => 6,
            "types" => ['Sobble'],
            "dexNumber" => "Nr.816",
            "detailsName" => "Sobble",
            "detailsNickName" => "Water Lizard pokemon",
            "abilities" => ['Torrent','Sniper'],
        ],
        7 => [
            "detailsId" => 7,
            "types" => ['ground','steel'],
            "dexNumber" => "Nr.530",
            "detailsName" => "Excadrill",
            "detailsNickName" => "Subterrene pokemon",
            "abilities" => ['Sand Rush','Sand Force','Mold Breaker'],
        ],
        8 => [
            "detailsId" => 8,
            "types" => ['dragon'],
            "dexNumber" => "Nr.147",
            "detailsName" => "Dratini",
            "detailsNickName" => "Dragon pokemon",
            "abilities" => ['Shed Skin','Marvel Scale'],
        ],
        9 => [
            "detailsId" => 9,
            "types" =>['steel','dragon'],
            "dexNumber" => "Nr.483",
            "detailsName" => "Dialga",
            "detailsNickName" => "Temporal pokemon",
            "abilities" => ['Pressure','Telepathy'],
        ]
        ];

        return $stats[$id];
}