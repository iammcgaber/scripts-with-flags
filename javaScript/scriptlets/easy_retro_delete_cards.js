//Delete all cards from an easyretro board.
javascript:(function() {let cards = document.getElementsByClassName("ri-more-2-fill"); for(let card of cards) { card.click(); let dropDowns = document.getElementsByClassName("dropdown-menu-card"); for(let dropDown of dropDowns) { if (dropDown.children[0]) { dropDown.children[0].children[2].click(); document.getElementsByClassName("swal2-confirm")[0].click();}}}})();