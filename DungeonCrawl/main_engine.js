function processKey(event){
	console.log(event.keyCode);
	switch(event.keyCode){
		// movement keys
		case 56:
			player_character.moveUp(10);
			break;
		case 50:
			player_character.moveDown(10);
			break;
		case 52:
			player_character.moveLeft(10);
			break;
		case 54:
			player_character.moveRight(10);
			break;
		case 55:
			player_character.moveUpLeft(10);
			break;
		case 49:
			player_character.moveDownLeft(10);
			break;
		case 51:
			player_character.moveDownRight(10);
			break;
		case 57:
			player_character.moveUpRight(10);
			break;
		//inventory
		case 105:
			if (player_inventory_window.isOpen){
			close_inventory();
			} else {open_inventory()};
			break;			
	}
}

d3.select("body").on("keydown", processKey(d3.event));

