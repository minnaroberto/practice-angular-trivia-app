import { Injectable } from '@angular/core';
import { Questions } from '../questions/questions.model';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryMenuService {
  private categories: Category[] = [
    new Category('General Pokemon Quiz', [
      new Questions(
        ['What is the most effective Pokeball in the game?'],
        'Master Ball',
        ['Ultra Ball', 'Great Ball', 'Master Ball', 'Timer Ball']
      ),
      new Questions(['Which of these is a legendary Pokemon?'], 'Mewtwo', [
        'Mewtwo',
        'Greninja',
        'Pikachu',
        'Charizard',
      ]),
      new Questions(['Which of these is a fossil Pokemon?'], 'Aerodactyl', [
        'Aerodactyl',
        'Decidueye',
        'Blaziken',
        'Venasaur',
      ]),
      new Questions(['Which of these is not a starter?'], 'Arcanine', [
        'Squirtle',
        'Cindaquil',
        'Sobble',
        'Arcanine',
      ]),
      new Questions(
        [
          'What device do trainers use to keep a record of their Pokemon encounters?',
        ],
        'Pokedex',
        ['Pokecounter', 'Pokedex', 'Pokefinder', 'Pokephone']
      ),
    ]),
    new Category('Pokemon Types', [
      new Questions(['What type is super effective against fire?'], 'Ground', [
        'Steel',
        'Ground',
        'Electric',
        'Flying',
      ]),
      new Questions(['What type is super effective against ghost?'], 'Dark', [
        'Fairy',
        'Bug',
        'Normal',
        'Dark',
      ]),
      new Questions(['Which Pokemon is a fairy type?'], 'Togekiss', [
        'Togekiss',
        'Chansey',
        'Auroros',
        'Audino',
      ]),
      new Questions(
        ['What type has never been paired with electric type before?'],
        'Fighting',
        ['Ground', 'Fire', 'Fighting', 'Rock']
      ),
      new Questions(['Which Pokemon is a pure steel type?'], 'Registeel', [
        'Registeel',
        'Lairon',
        'Bisharp',
        'Steelix',
      ]),
    ]),
    new Category('Evolutions', [
      new Questions(['What Pokemon is not a middle evolution?'], 'Linoone', [
        'Lioone',
        'Roselia',
        'Jigglypuff',
        'Kadabra',
      ]),
      new Questions(['How many evolutions does eevee have?'], '8', [
        '5',
        '6',
        '7',
        '8',
      ]),
      new Questions(
        ['Which of these is not a first evolution Pokemon?'],
        'Elekid',
        ['Pichu', 'Eevee', 'Elekid', 'Togepi']
      ),
      new Questions(['Which of these is not an Eeeveelution?'], 'Empoleon', [
        'Leafeon',
        'Sylveon',
        'Empoleon',
        'Jolteon',
      ]),
      new Questions(['What is the evolution of Vulpix?'], 'Ninetales', [
        'Ninetales',
        'Fennekin',
        'Braixen',
        'Delphox',
      ]),
    ]),
    new Category('Pokemon Spelling', [
      new Questions(['What Pokemon is correctly spelled?'], 'Zigzagoon', [
        'Eggsecutor',
        'Zigzagoon',
        'Lioone',
        'Gyardios',
      ]),
      new Questions(['What is the correct spelling?'], 'Cyndaquil', [
        'Cindaquil',
        'Cyndaquil',
        'Cyndaquyl',
        'Cinderquil',
      ]),
      new Questions(['What Pokemon is correctly spelled?'], 'Lycanroc', [
        'Kildeo',
        'Chardizard',
        'Lycanroc',
        'Togapix',
      ]),
      new Questions(['What Pokemon is correctly spelled?'], 'Wailord', [
        'Wailord',
        'Silveon',
        'Mimakyu',
        'Zapados',
      ]),
      new Questions(
        ['What is the correct spelling of this legendary pokemon?'],
        'Rayquaza',
        ['Ryquaza', 'Rayquaza', 'Ryaquaza', 'Rayquazah']
      ),
    ]),
  ];

  constructor() {}

  getCategories() {
    return this.categories.slice();
  }

  getCategory(index: number) {
    return this.categories[index - 1];
  }
}
