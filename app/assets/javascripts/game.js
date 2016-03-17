class Map {
  constructor() {
    this.first_map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                      [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
  }

  draw() {
    return this.first_map.map((row) => '<div class="row">' + this.drawRow(row) + '</div>').join('')
  }

  drawRow(row) {
    return row.map((tile) => this.drawTile(tile)).join('')
  }

  drawTile(tile) {
    if (tile == 0) {
      return '<div class="tile grass"></div>'
    } else {
      return '<div class="tile stone"></div>'
    }
  }
}

var game_map = new Map

document.addEventListener('DOMContentLoaded', function(event) { 
  $('[data-hook="game"]').html(game_map.draw())
});
