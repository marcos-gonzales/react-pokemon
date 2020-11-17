import React, { useEffect, useState } from 'react'

import axios from 'axios'
import classes from './PokemonCard.module.css'

const PokemonCard = ({ id }) => {
  const [getPokemon, setPokemon] = useState(null)
  const [pokemonId, setPokemonId] = useState(null)

  const pokeInfo = {
    1: {
      evolutions: ['ivysaur', 'venusaur'],
      moves: {
        one: 'Ram',
        two: 'Vine Whip',
      },
      manaCost: {
        one: 'colorless',
        two: 'grass grass colorless',
      },
      description: {
        one: null,
        two: null,
      },
      damage: {
        one: 10,
        two: 50,
      },
      hp: 70,
    },

    2: {
      evolutions: ['bulbasaur', 'venusaur'],
      moves: {
        one: 'Sleep Powder',
        two: 'Poison Powder',
      },
      manaCost: {
        one: 'grass colorless',
        two: 'grass grass colorless',
      },
      damage: {
        one: 20,
        two: 50,
      },
      description: {
        one: 'The Defending Pokémon is now Asleep.',
        two: 'The Defending Pokémon is now Poisoned.',
      },
      hp: 90,
    },

    3: {
      evolutions: ['ivysaur', 'venusaur'],
      moves: {
        one: 'Pollen Bomb',
        two: 'Solar Typhoon',
      },
      manaCost: {
        one: 'grass grass colorless',
        two: 'grass grass grass colorless',
      },
      damage: {
        one: 80,
        two: 220,
      },
      description: {
        one: 'Your opponent’s Active Pokémon is now Asleep and Poisoned.',
        two: 'During your next turn, this Pokémon can’t use Solar Typhoon.',
      },
      hp: 220,
    },

    4: {
      evolutions: ['charmeleon', 'charizard'],
      moves: {
        one: 'Scratch',
        two: 'Reprisal',
      },
      manaCost: {
        one: 'fire',
        two: 'colorless colorless',
      },
      damage: {
        one: 10,
        two: '20x',
      },
      description: {
        one: null,
        two:
          'This attack does 20 damage for each damage counter on this Pokémon.',
      },
      hp: 50,
    },

    5: {
      evolutions: ['charmander', 'charizard'],
      moves: {
        one: 'Slash',
        two: 'Flamethrower',
      },
      manaCost: {
        one: 'fire colorless',
        two: 'fire fire colorless',
      },
      damage: {
        one: 30,
        two: 80,
      },
      description: {
        one: null,
        two: null,
      },
      hp: 100,
    },

    6: {
      evolutions: ['charmander', 'charmeleon'],
      moves: {
        one: 'Claw Slash',
        two: 'Fire Spin',
      },
      manaCost: {
        one: 'colorless colorless colorless',
        two: 'fire fire normal normal',
      },
      description: {
        one: null,
        two: 'Discard 2 Energy from this Pokémon.',
      },
      damage: {
        one: 80,
        two: 220,
      },
      hp: 220,
    },

    7: {
      evolutions: ['wartortle', 'blastoise'],
      moves: {
        one: 'Tackle',
        two: 'Rain Splash',
      },
      manaCost: {
        one: 'colorless',
        two: 'water colorless',
      },
      description: {
        one: null,
        two: null,
      },
      damage: {
        one: 10,
        two: 20,
      },
      hp: 70,
    },

    8: {
      evolutions: ['squirtle', 'blastoise'],
      moves: {
        one: 'Tackle',
        two: 'Waterfall',
      },
      damage: {
        one: 30,
        two: 70,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'water water normal',
      },
      description: {
        one: null,
        two: null,
      },
      hp: 90,
    },

    9: {
      evolutions: ['squirtle', 'wartortle'],
      moves: {
        one: 'Powerful Squall',
        two: 'Hydro Tackle',
      },
      damage: {
        one: null,
        two: 150,
      },
      description: {
        one:
          'Once during your turn (before your attack), you may look at the top 6 cards of your deck and attach any number of Water Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.',
        two: 'This Pokémon does 30 damage to itself.',
      },
      manaCost: {
        one: null,
        two: 'water water water',
      },
      hp: 160,
    },

    10: {
      evolutions: ['metapod', 'butterfree'],
      moves: {
        one: 'Pupate',
        two: 'Hook',
      },
      damage: {
        one: null,
        two: 10,
      },
      description: {
        one:
          'Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.',
        two: null,
      },
      manaCost: {
        one: null,
        two: 'colorless colorless',
      },
      hp: 40,
    },

    11: {
      evolutions: ['caterpie', 'butterfree'],
      moves: {
        one: 'Emerge',
        two: 'Bug Bite',
      },
      damage: {
        one: null,
        two: 30,
      },
      description: {
        one:
          'Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.',
        two: null,
      },
      manaCost: {
        one: null,
        two: 'grass colorless colorless',
      },
      hp: 70,
    },

    12: {
      evolutions: ['caterpie', 'metapod'],
      moves: {
        one: 'Panic Poison',
        two: 'Cutting Wind',
      },
      damage: {
        one: 30,
        two: 80,
      },
      description: {
        one:
          'Your opponent’s Active Pokémon is now Burned, Confused, and Poisoned.',
        two: null,
      },
      manaCost: {
        one: 'grass',
        two: 'colorless colorless',
      },
      hp: 140,
    },

    13: {
      evolutions: ['kakuna', 'beedrill'],
      moves: {
        one: 'Tangle Drag',
        two: 'Bug Bite',
      },
      damage: {
        one: null,
        two: 10,
      },
      description: {
        one:
          'Switch 1 of your opponents Benched Pokémon with their Active Pokémon.',
        two: null,
      },
      manaCost: {
        one: 'grass',
        two: 'grass',
      },
      hp: 40,
    },

    14: {
      evolutions: ['weedle', 'beedrill'],
      moves: {
        one: 'Grass Cushion',
        two: 'Bug Bite',
      },
      damage: {
        one: null,
        two: 20,
      },
      description: {
        one:
          'If this Pokémon has any Grass Energy attached to it, it takes 30 less damage from attacks (after applying Weakness and Resistance).',
        two: null,
      },
      manaCost: {
        one: null,
        two: 'colorless colorless',
      },
      hp: 80,
    },

    15: {
      evolutions: ['weedle', 'kakuna'],
      moves: {
        one: 'Destiny Stinger',
        two: 'Reckless Charge',
      },
      damage: {
        one: null,
        two: 90,
      },
      description: {
        one:
          'You can use this attack only if this Pokémon has any damage counters on it. Both Active Pokémon are Knocked Out.',
        two: 'This Pokémon does 10 damage to itself.',
      },
      manaCost: {
        one: 'grass',
        two: 'colorless colorless',
      },
      hp: 130,
    },

    16: {
      evolutions: ['pidgeotto', 'pidgeot'],
      moves: {
        one: 'Collect',
        two: 'Gust',
      },
      damage: {
        one: null,
        two: 20,
      },
      description: {
        one: 'Draw a card.',
        two: null,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 50,
    },

    17: {
      evolutions: ['pidgey', 'pidgeot'],
      moves: {
        one: 'Air Mail',
        two: 'Gust',
      },
      damage: {
        one: null,
        two: 30,
      },
      description: {
        one:
          'Once during your turn (before your attack), you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card on the bottom of your deck.',
        two: null,
      },
      manaCost: {
        one: null,
        two: 'colorless colorless',
      },
      hp: 60,
    },

    18: {
      evolutions: ['pidgey', 'pidgeotto'],
      moves: {
        one: 'Whirlwind',
        two: 'Spin Storm',
      },
      damage: {
        one: 60,
        two: null,
      },
      description: {
        one:
          'Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.',
        two:
          'Your opponent puts their Active Pokémon and all cards attached to it into their hand.',
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'colorless colorless colorless',
      },
      hp: 130,
    },

    19: {
      evolutions: ['raticate'],
      moves: {
        one: 'Gnar',
      },
      damage: {
        one: 30,
      },
      description: {
        one: null,
      },
      manaCost: {
        one: 'colorless',
      },
      hp: 30,
    },

    20: {
      evolutions: ['rattata'],
      moves: {
        one: 'Escaping Incisors',
      },
      damage: {
        one: 70,
      },
      description: {
        one:
          'If your opponents Active Pokémon is an Evolution Pokémon, switch this Pokémon with 1 of your Benched Pokémon.',
      },
      manaCost: {
        one: 'colorless colorless',
      },
      hp: 70,
    },

    21: {
      evolutions: ['fearow'],
      moves: {
        one: 'Glide',
        two: 'Speed Dive',
      },
      damage: {
        one: 10,
        two: 20,
      },
      description: {
        one: null,
        two: null,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    22: {
      evolutions: ['spearow'],
      moves: {
        one: 'Drill Run Double',
      },
      damage: {
        one: 70,
      },
      description: {
        one:
          'Flip a coin. If heads, discard 2 Energy from your opponents Active Pokémon.',
      },
      manaCost: {
        one: 'colorless colorless',
      },
      hp: 100,
    },

    23: {
      evolutions: ['arbok'],
      moves: {
        one: 'Glare',
        two: 'Tail Smack',
      },
      damage: {
        one: null,
        two: 20,
      },
      description: {
        one:
          'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
        two: null,
      },
      manaCost: {
        one: 'colorless',
        two: 'Pyschic',
      },
      hp: 70,
    },

    24: {
      evolutions: ['ekans'],
      moves: {
        one: 'Wrap',
        two: 'Heavy Choke',
      },
      damage: {
        one: 30,
        two: '50+',
      },
      description: {
        one:
          'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
        two:
          'If this Pokémon used Wrap during your last turn, this attack does 120 more damage.',
      },
      manaCost: {
        one: 'colorless',
        two: 'Pyschic colorless',
      },
      hp: 120,
    },

    25: {
      evolutions: ['raichu'],
      moves: {
        one: 'Quick Attack',
        two: 'Volt Tackle',
      },
      damage: {
        one: '10+',
        two: 60,
      },
      description: {
        one: 'Flip a coin. If heads, this attack does 10 more damage.',
        two: 'This Pokémon does 10 damage to itself.',
      },
      manaCost: {
        one: 'colorless',
        two: 'lightning colorless colorless',
      },
      hp: 70,
    },

    26: {
      evolutions: ['pikachu'],
      moves: {
        one: 'Electro Rain',
        two: 'Electric Ball',
      },
      damage: {
        one: null,
        two: 90,
      },
      description: {
        one: `Discard any amount of Lightning Energy from this Pokémon. Then, for each Energy you discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. (You can choose the same Pokémon more than once.) This damage isn't affected by Weakness or Resistance.`,
      },
      manaCost: {
        one: 'lightning',
        two: 'lightning colorless colorless',
      },
      hp: 110,
    },

    27: {
      evolutions: ['sandslash'],
      moves: {
        one: 'Collect',
        two: 'Rolling Tackle',
      },
      damage: {
        one: null,
        two: 30,
      },
      description: {
        one: 'Draw a card.',
      },
      manaCost: {
        one: 'colorless',
        two: 'fighting colorless colorless',
      },
      hp: 70,
    },

    28: {
      evolutions: ['sandshrew'],
      moves: {
        one: 'Continous Scratch',
        two: 'Sand Tomb',
      },
      description: {
        one: 'Flip 4 coins. This attack does 30 damage for each heads.',
        two: `The Defending Pokémon can't retreat during your opponent's next turn.`,
      },
      damage: {
        one: '30x',
        two: 90,
      },
      manaCost: {
        one: 'colorless',
        two: 'fighting colorless colorless',
      },
      hp: 110,
    },

    29: {
      evolutions: ['nidorina', 'nidoqueen'],
      moves: {
        one: 'Call for family',
        two: 'Scratch',
      },
      description: {
        one:
          'Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.',
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    30: {
      evolutions: ['nidoran-f', 'nidoqueen'],
      moves: {
        one: 'Family Rescue',
        two: 'Bite',
      },
      description: {
        one: 'Shuffle 5 Psychic Pokémon from your discard pile into your deck.',
      },
      damage: {
        two: 30,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 90,
    },

    31: {
      evolutions: ['nidoran-f', 'nidorina'],
      moves: {
        one: `Queen's Call`,
        two: 'Power Lariat',
      },
      description: {
        one:
          'Once during your turn (before your attack), you may search your deck for a Pokémon that isn’t a Pokémon-GX or Pokémon-{EX}, reveal it, and put it into your hand. Then, shuffle your deck.',
        two:
          'This attack does 50 more damage for each Evolution Pokémon on your Bench.',
      },
      damage: {
        two: '10+',
      },
      manaCost: {
        two: 'colorless colorless colorless',
      },
      hp: 160,
    },

    32: {
      evolutions: ['nidorino', 'nidoking'],
      moves: {
        one: 'Peck',
        two: 'Horn Attack',
      },
      description: {
        one: null,
        two: null,
      },
      damage: {
        one: 10,
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'psychic colorless',
      },
      hp: 60,
    },

    33: {
      evolutions: ['nidoran-m', 'nidoking'],
      moves: {
        one: 'Peck',
        two: 'Horn Drill',
      },
      description: {
        one: null,
        two: null,
      },
      damage: {
        one: 20,
        two: 60,
      },
      manaCost: {
        one: 'colorless',
        two: 'pyschic colorless colorless',
      },
      hp: 90,
    },

    34: {
      evolutions: ['nidoran-m', 'nidorino'],
      moves: {
        one: 'Drag Off',
        two: `King's Drum`,
      },
      description: {
        one: `Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 50 damage to the new Active Pokémon.`,
        two: `If Nidoqueen is on your Bench, this attack does 100 more damage.`,
      },
      damage: {
        two: '100+',
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'pyschic colorless colorless',
      },
      hp: 160,
    },

    35: {
      evolutions: ['clefable'],
      moves: {
        one: 'Lead',
        two: 'Pound',
      },
      description: {
        one: `Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.`,
        two: null,
      },
      damage: {
        two: 10,
      },
      manaCost: {
        one: 'colorless',
        two: 'fairy',
      },
      hp: 60,
    },
    36: {
      evolutions: ['clefairy'],
      moves: {
        one: 'Pound',
        two: 'Moon Impract',
      },
      description: {
        one: null,
        two: null,
      },
      damage: {
        one: 40,
        two: 90,
      },
      manaCost: {
        one: 'fairy colorless',
        two: 'fairy fairy colorless',
      },
      hp: 120,
    },

    37: {
      evolutions: ['ninetales'],
      moves: {
        one: 'Confuse Ray',
        two: 'Smash Kick',
      },
      description: {
        one: `Your opponent’s Active Pokémon is now Confused.`,
        two: null,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'fire',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    38: {
      evolutions: ['vulpix'],
      moves: {
        one: 'Hex',
        two: 'Flickering Flames',
      },
      description: {
        one: `If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 90 more damage.`,
        two: `Your opponent’s Active Pokémon is now Asleep.`,
      },
      damage: {
        one: '30+',
        two: 90,
      },
      manaCost: {
        one: 'fire',
        two: 'fire colorless colorless',
      },
      hp: 120,
    },

    39: {
      evolutions: ['wigglytuff'],
      moves: {
        one: 'Singing Voice',
        two: 'Rollout',
      },
      description: {
        one: null,
        two: null,
      },
      damage: {
        one: 10,
        two: 30,
      },
      manaCost: {
        one: 'fairy',
        two: 'fairy colorless',
      },
      hp: 70,
    },

    40: {
      evolutions: ['jigglypuff'],
      moves: {
        one: 'Orb Polish',
        two: 'Sleepy Ball',
      },
      description: {
        one: `Put 3 Energy cards from your discard pile into your hand.`,
        two: `Your opponent's Active Pokémon is now Asleep.`,
      },
      damage: {
        two: 80,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless colorless',
      },
      hp: 110,
    },

    41: {
      evolutions: ['golbat'],
      moves: {
        one: 'Bite',
        two: 'Venoshock',
      },
      description: {
        two: `If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage.`,
      },
      damage: {
        one: 10,
        two: '20+',
      },
      manaCost: {
        one: 'psychic',
        two: 'colorless colorless',
      },
      hp: 50,
    },

    42: {
      evolutions: ['zubat'],
      moves: {
        one: 'Bite',
        two: 'Leech Life',
      },
      description: {
        two: `Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.`,
      },
      damage: {
        one: 20,
        two: 40,
      },
      manaCost: {
        one: 'psychic',
        two: 'colorless colorless colorless',
      },
      hp: 80,
    },

    43: {
      evolutions: ['gloom', 'vileplume'],
      moves: {
        one: 'Stun Spore',
        two: 'Seed Bomb',
      },
      description: {
        one: `Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'grass colorless',
      },
      hp: 50,
    },

    44: {
      evolutions: ['oddish', 'vileplume'],
      moves: {
        one: 'Irresistible Aroma',
        two: 'Drool',
      },
      description: {
        one: `Once during your turn (before your attack), if your opponent's Bench isn't full, you may flip a coin. If heads, your opponent reveals their hand. Put a Basic Pokémon you find there onto their Bench.`,
      },
      damage: {
        two: 30,
      },
      manaCost: {
        two: 'grass colorless',
      },
      hp: 80,
    },

    45: {
      evolutions: ['oddish', 'gloom'],
      moves: {
        one: 'Varied Pollen',
        two: 'Giant Bloom',
      },
      description: {
        one: `Once during your turn (before your attack), you may flip a coin. If heads, choose Asleep, Burned, Confused, or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.`,
        two: `Heal 30 damage from this Pokémon.`,
      },
      damage: {
        two: 90,
      },
      manaCost: {
        two: 'grass grass colorless',
      },
      hp: 140,
    },

    46: {
      evolutions: ['parasect'],
      moves: {
        one: 'Scratch',
        two: 'Slash',
      },
      description: {
        one: null,
        two: null,
      },
      damage: {
        one: 10,
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'grass colorless',
      },
      hp: 120,
    },

    47: {
      evolutions: ['paras'],
      moves: {
        one: 'Mushroom Tackle',
        two: 'Solar Beam',
      },
      description: {
        one: `Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.`,
      },
      damage: {
        one: 30,
        two: 110,
      },
      manaCost: {
        one: 'grass',
        two: 'grass grass colorless',
      },
      hp: 120,
    },

    48: {
      evolutions: ['venomoth'],
      moves: {
        one: 'Radar Eyes',
        two: 'Flop',
      },
      description: {
        one: `Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'grass',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    49: {
      evolutions: ['venonat'],
      moves: {
        one: 'Dizzying Wind',
        two: 'Noxious Scales',
      },
      description: {
        one: `Whenever your opponent plays a Trainer card from his or her hand during his or her next turn, your opponent flips a coin. If tails, that card has no effect. (Your opponent still discards that card.)`,
        two: `Your opponent's Active Pokémon is now Confused and Poisoned.`,
      },
      damage: {
        two: 50,
      },
      manaCost: {
        one: 'grass',
        two: 'grass colorless colorless',
      },
      hp: 90,
    },

    50: {
      evolutions: ['dugtrio'],
      moves: {
        one: 'Mine',
        two: 'Mud-Slap',
      },
      description: {
        one: `Look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'fighting',
        two: 'fighting colorless',
      },
      hp: 50,
    },

    51: {
      evolutions: ['diglett'],
      moves: {
        one: 'Earthquake',
        two: 'Rock Tumble',
      },
      description: {
        one: `This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)`,
        two: `This attack's damage isn't affected by Resistance.`,
      },
      damage: {
        one: 60,
        two: 60,
      },
      manaCost: {
        one: 'fighting',
        two: 'fighting colorless colorless',
      },
      hp: 90,
    },

    52: {
      evolutions: ['persian'],
      moves: {
        one: 'Nap',
        two: 'Jump On',
      },
      description: {
        one: `Heal 20 damage from this Pokémon.`,
        two: `Flip a coin. If heads, this attack does 10 more damage.`,
      },
      damage: {
        two: '20+',
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 60,
    },
    53: {
      evolutions: ['meowth'],
      moves: {
        one: 'Screech',
        two: 'Slash',
      },
      description: {
        one: `During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance).`,
      },
      damage: {
        two: 40,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless',
      },
      hp: 90,
    },

    54: {
      evolutions: ['golduck'],
      moves: {
        one: 'Bubble',
        two: 'Confuse Ray',
      },
      description: {
        one: `Flip a coin. If heads, the Defending Pokémon is now Paralyzed.`,
        two: `Flip a coin. If heads, the Defending Pokémon is now Confused.`,
      },
      damage: {
        one: 10,
        two: 10,
      },
      manaCost: {
        one: 'water',
        two: 'psychic',
      },
      hp: 40,
    },

    55: {
      evolutions: ['psyduck'],
      moves: {
        one: 'Scratch',
        two: 'Double Jet',
      },
      description: {
        two: `Discard up to 2 Water Energy cards from your hand. This attack does 60 damage for each card you discarded in this way.`,
      },
      damage: {
        one: 20,
        two: '60+',
      },
      manaCost: {
        one: 'colorless',
        two: 'water',
      },
      hp: 90,
    },

    56: {
      evolutions: ['primeape'],
      moves: {
        one: 'Scout',
        two: 'Low Kick',
      },
      description: {
        one: `Your opponent reveals their hand.`,
      },
      damage: {
        two: 30,
      },
      manaCost: {
        one: 'colorless',
        two: 'fighting colorless',
      },
      hp: 50,
    },

    57: {
      evolutions: ['mankey'],
      moves: {
        one: 'Low Kick',
        two: 'Lucha Fight',
      },
      description: {
        two: `During your opponent's next turn, the Defending Pokémon's attacks do 30 more damage (before applying Weakness and Resistance).`,
      },
      damage: {
        one: 30,
        two: 90,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'fighting fighting',
      },
      hp: 90,
    },

    58: {
      evolutions: ['arcanine'],
      moves: {
        one: 'Live Coal',
        two: 'Combustion',
      },
      description: {
        one: null,
        two: null,
      },
      damage: {
        one: 10,
        two: 30,
      },
      manaCost: {
        one: 'fire',
        two: 'fire fire',
      },
      hp: 80,
    },

    59: {
      evolutions: ['growlithe'],
      moves: {
        one: 'Searing Flame',
        two: 'Firestorm',
      },
      description: {
        one: `Your opponent's Active Pokémon is now Burned.`,
        two: `Discard 3 Fire Energy from this Pokémon.`,
      },
      damage: {
        one: 60,
        two: 190,
      },
      manaCost: {
        one: 'fire colorless colorless',
        two: 'fire fire fire colorless',
      },
      hp: 130,
    },

    60: {
      evolutions: ['poliwhirl', 'poliwrath'],
      moves: {
        one: 'Water Gun',
        two: 'Hydro Pump',
      },
      description: {
        two: `This attack does 10 more damage times the amount of Water Energy attached to this Pokémon.`,
      },
      damage: {
        one: 10,
        two: '30+',
      },
      manaCost: {
        one: 'water',
        two: 'colorless colorless colorless',
      },
      hp: 60,
    },

    61: {
      evolutions: ['poliwag', 'poliwrath'],
      moves: {
        one: 'Double Slap',
        two: 'Wave Splash',
      },
      description: {
        two: `Flip 2 coins. This attack does 30 damage for each heads.`,
      },
      damage: {
        one: '30+',
        two: 60,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'water colorless colorless',
      },
      hp: 90,
    },

    62: {
      evolutions: ['poliwag', 'poliwhirl'],
      moves: {
        one: 'Split Spiral Punch',
        two: 'Wake-up Slap',
      },
      description: {
        one: `Your opponent's Active Pokémon is now Confused.`,
        two: `If your opponent's Active Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from that Pokémon.`,
      },
      damage: {
        one: 30,
        two: '80+',
      },
      manaCost: {
        one: 'water',
        two: 'water colorless colorless',
      },
      hp: 150,
    },

    63: {
      evolutions: ['kadabra', 'alakazam'],
      moves: {
        one: 'Play Search',
        two: 'Ultra Evolution',
      },
      description: {
        one: `Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Put the 4 other cards back on top of your deck. Shuffle your deck afterward.`,
        two: `Search your deck for Alakazam and put it onto Abra (this counts as evolving Abra). Shuffle your deck afterward.`,
      },
      damage: {
        one: null,
        two: null,
      },
      manaCost: {
        one: 'psychic',
        two: 'psychic',
      },
      hp: 50,
    },

    64: {
      evolutions: ['abra', 'alakazam'],
      moves: {
        one: 'Recover',
        two: 'Super Psy',
      },
      description: {
        one: `Recover: Discard 1 Energy card attached to Kadabra in order use this attack. Remove all damage counters from Kadabra.`,
      },
      damage: {
        two: 50,
      },
      manaCost: {
        one: 'psychic psychic',
        two: 'psychic psychic colorless',
      },
      hp: 60,
    },

    65: {
      evolutions: ['abra', 'kadabra'],
      moves: {
        one: 'Recover',
        two: 'Mysterious Beam',
      },
      description: {
        one: `Discard a   Psychic Energy attached to  Alakazam  [四] and  remove 4 damage counters from Alakazam   [四].`,
        two: `Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.`,
      },
      damage: {
        two: 30,
      },
      manaCost: {
        one: 'psychic',
        two: 'psychic colorless colorless',
      },
      hp: 80,
    },

    66: {
      evolutions: ['machoke', 'machamp'],
      moves: {
        one: 'Low Kick',
        two: 'Steady Punch',
      },
      description: {
        two: 'Flip a coin. If heads, this attack does 40 more damage.',
      },
      damage: {
        one: 10,
        two: '20+',
      },
      manaCost: {
        one: 'fighting',
        two: 'fighting colorless',
      },
      hp: 70,
    },

    67: {
      evolutions: ['machop', 'machamp'],
      moves: {
        one: 'Low Kick',
        two: 'Pummel',
      },
      description: {
        two: 'Flip a coin. If heads, this attack does 70 more damage.',
      },
      damage: {
        one: 30,
        two: '50+',
      },
      manaCost: {
        one: 'fighting',
        two: 'fighting fighting colorless',
      },
      hp: 110,
    },

    68: {
      evolutions: ['machop', 'machoke'],
      moves: {
        one: 'Macho Revenge',
        two: 'Dynamite Punch',
      },
      description: {
        one: `This attack does 20 damage for each Fighting Pokémon in your discard pile.`,
        two: `This Pokémon also does 50 damage to itself.`,
      },
      damage: {
        one: '20x',
        two: 200,
      },
      manaCost: {
        one: 'fighting colorless',
        two: 'fighting fighting colorless',
      },
      hp: 170,
    },

    69: {
      evolutions: ['weepinbell', 'victreebel'],
      moves: {
        one: 'Vine Whip',
        two: 'Knock Off',
      },
      description: {
        two: `Discard a random card from your opponent's hand.`,
      },
      damage: {
        one: 10,
      },
      manaCost: {
        one: 'grass',
        two: 'grass colorless',
      },
      hp: 50,
    },

    70: {
      evolutions: ['bellsprout', 'victreebel'],
      moves: {
        one: 'Vine Whip',
        two: 'Spit Poison',
      },
      description: {
        two: `Your opponent's Active Pokémon is now Poisoned.`,
      },
      damage: {
        one: 20,
        two: 40,
      },
      manaCost: {
        one: 'grass colorless',
        two: 'grass colorless colorless',
      },
      hp: 80,
    },

    71: {
      evolutions: ['bellsprout', 'weepinbell'],
      moves: {
        one: 'Pollen Hazard',
        two: 'Stick and Absorb',
      },
      description: {
        one: `Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.`,
        two: `Heal 20 damage from this Pokémon. The Defending Pokémon can't retreat during your opponent's next turn.`,
      },
      damage: {
        one: 20,
        two: 80,
      },
      manaCost: {
        one: 'grass',
        two: 'grass colorless colorless',
      },
      hp: 140,
    },

    72: {
      evolutions: ['tentacruel'],
      moves: {
        one: 'Crystal Barrier',
        two: 'Mysterious Beam',
      },
      description: {
        one: `Flip a coin. If heads, prevent all effects of an attack, including damage, done to Tentacool during  your opponent's next turn.`,
        two: `Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.`,
      },
      damage: {
        one: null,
        two: null,
      },
      manaCost: {
        one: 'colorless',
        two: 'water',
      },
      hp: 50,
    },

    73: {
      evolutions: ['tentacool'],
      moves: {
        one: 'Poison Sting',
        two: 'Seething Tentacles',
      },
      description: {
        one: `Your opponent's Active Pokémon is now Poisoned.`,
        two: `Flip a coin. If heads, this attack does 40 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.`,
      },
      damage: {
        one: 30,
        two: '40+',
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'colorless colorless colorless',
      },
      hp: 110,
    },

    74: {
      evolutions: ['graveler', 'golem'],
      moves: {
        one: 'Rollout',
        two: 'Flail',
      },
      description: {
        two: `This attack does 10 damage times the number of damage counters on this Pokémon.`,
      },
      damage: {
        one: 10,
        two: '10x',
      },
      manaCost: {
        one: 'fighting',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    75: {
      evolutions: ['geodude', 'golem'],
      moves: {
        one: 'Magnitude',
        two: 'Rollout',
      },
      description: {
        one: `Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)`,
      },
      damage: {
        one: 20,
        two: 40,
      },
      manaCost: {
        one: 'fighting colorless',
        two: 'fighting colorless colorless',
      },
      hp: 80,
    },

    76: {
      evolutions: ['geodude', 'graveler'],
      moves: {
        one: 'Stone Edge',
        two: 'Explosion',
      },
      description: {
        one: `Flip a coin. If heads, this attack does 30 more damage.`,
        two: `This Pokémon does 100 damage to itself.`,
      },
      damage: {
        one: '60+',
        two: 150,
      },
      manaCost: {
        one: 'fighting fighting colorless',
        two: 'fighting fighting colorless colorless',
      },
      hp: 150,
    },

    77: {
      evolutions: ['rapidash'],
      moves: {
        one: 'Agility',
        two: 'Flame Tail',
      },
      description: {
        one: `Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.`,
      },
      damage: {
        one: 10,
        two: 20,
      },
      manaCost: {
        one: 'fire',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    78: {
      evolutions: ['ponyta'],
      moves: {
        one: 'Agility',
        two: 'Overrun',
      },
      description: {
        one: `Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.`,
        two: `This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)`,
      },
      damage: {
        one: 20,
        two: 40,
      },
      manaCost: {
        one: 'fire',
        two: 'colorless colorless',
      },
      hp: 90,
    },

    79: {
      evolutions: ['slowbro'],
      moves: {
        one: 'Headbutt',
        two: 'Whimsy Tail',
      },
      description: {
        two: `Flip a coin. If tails, this attack does nothing.`,
      },
      damage: {
        one: 10,
        two: 60,
      },
      manaCost: {
        one: 'colorless',
        two: 'psychic colorless colorless',
      },
      hp: 70,
    },

    80: {
      evolutions: ['slowpoke'],
      moves: {
        one: 'Amnesia',
        two: 'Facade',
      },
      description: {
        one: `Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.`,
        two: `If this Pokémon is Burned or Poisoned, this attack does 80 more damage.`,
      },
      damage: {
        one: 20,
        two: '50+',
      },
      manaCost: {
        one: 'colorless',
        two: 'psychic colorless colorless',
      },
      hp: 110,
    },

    81: {
      evolutions: ['magneton'],
      moves: {
        one: 'Shock Generator',
        two: 'Lightning Ball',
      },
      description: {
        one: `Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'lightning',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    82: {
      evolutions: ['magnemite'],
      moves: {
        one: 'Ram',
        two: 'Zap Cannon',
      },
      description: {
        two: `This Pokémon can't use Zap Cannon during your next turn.`,
      },
      damage: {
        one: 20,
        two: 80,
      },
      manaCost: {
        one: 'lightning',
        two: 'lightning lightning colorless',
      },
      hp: 90,
    },

    83: {
      evolutions: [],
      moves: {
        one: 'Leek Slap',
      },
      description: {
        one: null,
      },
      damage: {
        one: 30,
      },
      manaCost: {
        one: 'colorless colorless',
      },
      hp: 80,
    },

    84: {
      evolutions: ['dodrio'],
      moves: {
        one: 'Double Stab',
        two: 'Doduo Delivery',
      },
      description: {
        one: `Flip 2 coins. This attack does 10 damage times the number of heads.`,
        two: `Draw 2 cards.`,
      },
      damage: {
        one: '10x',
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    85: {
      evolutions: ['doduo'],
      moves: {
        one: 'Tri Attack',
        two: 'Accelerating Stab',
      },
      description: {
        one: `Flip 3 coins. This attack does 60 damage for each heads.`,
        two: `This Pokémon can’t use Accelerating Stab during your next turn.`,
      },
      damage: {
        one: '60x',
        two: 90,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'colorless colorless',
      },
      hp: 100,
    },

    86: {
      evolutions: ['dewgong'],
      moves: {
        one: 'Tail Slap',
        two: 'Icy Wind',
      },
      description: {
        two: `Flip a coin. If heads, the Defending Pokémon is now Asleep.`,
      },
      damage: {
        one: 10,
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'water colorless',
      },
      hp: 60,
    },

    87: {
      evolutions: ['seel'],
      moves: {
        one: 'Ice Shard',
        two: 'Aurora Beam',
      },
      description: {
        one: `If the Defending Pokémon is a 
        Fighting Pokémon, this attack's base damage is 80 instead of 30.`,
      },
      damage: {
        one: 30,
        two: 70,
      },
      manaCost: {
        one: 'water colorless',
        two: 'water water colorless colorless',
      },
      hp: 100,
    },

    88: {
      evolutions: ['muk'],
      moves: {
        one: 'Super Poison Breath',
        two: 'Pound',
      },
      description: {
        one: `Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.`,
      },
      damage: {
        two: 40,
      },
      manaCost: {
        two: 'psychic colorless colorless',
      },
      hp: 80,
    },

    89: {
      evolutions: ['grimer'],
      moves: {
        one: 'Sludge Festival',
        two: 'Pester',
      },
      description: {
        one: `The Retreat Cost of each Pokémon in play (except for Team Aqua Pokémon) is Colorless more.`,
        two: `If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage.`,
      },
      damage: {
        two: '60+',
      },
      manaCost: {
        two: 'psychic colorless colorless',
      },
      hp: 110,
    },

    90: {
      evolutions: ['cloyster'],
      moves: {
        one: 'Shell Rest',
        two: 'Tongue Slap',
      },
      description: {
        one: `Remove 2 damage counters from Shellder.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'water colorless',
      },
      hp: 50,
    },

    91: {
      evolutions: ['shellder'],
      moves: {
        one: 'Headlock',
        two: 'Guard Press',
      },
      description: {
        one: `Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.`,
        two: `During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).`,
      },
      damage: {
        one: '30+',
        two: 80,
      },
      manaCost: {
        one: 'water colorless',
        two: 'water water colorless',
      },
      hp: 120,
    },

    92: {
      evolutions: ['haunter', 'gengar'],
      moves: {
        one: 'Sleep poison',
      },
      description: {
        one: `Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.`,
      },
      damage: {
        one: null,
      },
      manaCost: {
        one: 'psychic',
      },
      hp: 50,
    },

    93: {
      evolutions: ['gastly', 'gengar'],
      moves: {
        one: 'Nightmare',
        two: 'Spooky Shot',
      },
      description: {
        one: `Your opponent’s Active Pokémon is now Asleep.`,
      },
      damage: {
        one: 20,
        two: 40,
      },
      manaCost: {
        one: 'colorless',
        two: 'psychic colorless',
      },
      hp: 70,
    },

    94: {
      evolutions: ['gastly', 'haunter'],
      moves: {
        one: 'Life Shaker',
        two: 'Hypnoblast',
      },
      description: {
        one: `As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.`,
        two: `Your opponent’s Active Pokémon is now Asleep.`,
      },
      damage: {
        two: 90,
      },
      manaCost: {
        two: 'psychic psychic colorless',
      },
      hp: 110,
    },

    95: {
      evolutions: [],
      moves: {
        one: 'Rock Throw',
        two: 'Tunneling',
      },
      description: {
        two: `Choose up to 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Onix can't attack during your next turn.`,
      },
      damage: {
        one: 10,
      },
      manaCost: {
        one: 'fighting',
        two: 'fighting colorless',
      },
      hp: 80,
    },

    96: {
      evolutions: ['hypno'],
      moves: {
        one: 'Psychic Boom',
        two: 'Headbutt',
      },
      description: {
        one: `This attack does 10 damage times the amount of Energy attached to your opponent's Active Pokémon.`,
      },
      damage: {
        one: '10x',
        two: 20,
      },
      manaCost: {
        one: 'psychic',
        two: 'colorless colorless',
      },
      hp: 70,
    },

    97: {
      evolutions: ['drowzee'],
      moves: {
        one: 'Meditate',
        two: 'Hypnoblast',
      },
      description: {
        one: `This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.`,
        two: `Your opponent's Active Pokémon is now Asleep.`,
      },
      damage: {
        one: '20+',
        two: 70,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'psychic colorless colorless',
      },
      hp: 110,
    },

    98: {
      evolutions: ['kingler'],
      moves: {
        one: 'Aqua Shower',
        two: 'Vise Grip',
      },
      description: {
        one: `This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)`,
      },
      damage: {
        two: 30,
      },
      manaCost: {
        one: 'water',
        two: 'water colorless',
      },
      hp: 80,
    },

    99: {
      evolutions: ['krabby'],
      moves: {
        one: 'Heavy Pincers',
        two: 'Claw Rend',
      },
      description: {
        one: `Discard the top card of your opponent’s deck.`,
        two: `If your opponent’s Active Pokémon already has any damage counters on it, this attack does 60 more damage.`,
      },
      damage: {
        one: 40,
        two: '90+',
      },
      manaCost: {
        one: 'water',
        two: 'water colorless colorless',
      },
      hp: 130,
    },

    100: {
      evolutions: ['electrode'],
      moves: {
        one: 'Floating Electrons',
        two: 'Thunder Shock',
      },
      description: {
        one: `If this Pokémon has any Energy attached to it, it has no Retreat Cost.`,
        two: `Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        two: 'lightning colorless',
      },
      hp: 50,
    },

    101: {
      evolutions: ['voltorb'],
      moves: {
        one: 'Electribeam',
        two: 'Self Destruct',
      },
      description: {
        one: `Flip a coin. If heads, the Defending Pokémon is now Paralyzed.`,
        two: `This Pokémon does 100 damage to itself.`,
      },
      damage: {
        one: 20,
        two: 100,
      },
      manaCost: {
        one: 'lightning',
        two: 'lightning colorless colorless',
      },
      hp: 100,
    },

    102: {
      evolutions: ['exeggutor'],
      moves: {
        one: 'Psy Bolt',
      },
      description: {
        one: `Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.`,
      },
      damage: {
        one: 10,
      },
      manaCost: {
        one: 'colorless colorless',
      },
      hp: 50,
    },

    103: {
      evolutions: ['exeggcute'],
      moves: {
        one: 'Head Crack',
        two: 'Solar Beam',
      },
      description: {
        one: `Choose 1 of your opponent’s Active Pokémon’s attacks. During your opponent’s next turn, that Pokémon can’t use that attack.`,
      },
      damage: {
        one: 30,
        two: 90,
      },
      manaCost: {
        one: 'grass',
        two: 'grass colorless colorless',
      },
      hp: 140,
    },

    104: {
      evolutions: ['marowak'],
      moves: {
        one: 'Beat',
        two: 'Linear Attack',
      },
      description: {
        two: `Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)`,
      },
      damage: {
        one: 10,
      },
      manaCost: {
        one: 'colorless',
        two: 'fighting colorless',
      },
      hp: 50,
    },

    105: {
      evolutions: ['marowak'],
      moves: {
        one: 'Dance of Flames',
        two: 'Burning Bonemerange',
      },
      description: {
        one: `For each Energy attached to your opponent's Pokémon, attach a Fire Energy card from your discard pile to your Pokémon in any way you like.`,
        two: `Flip 2 coins. This attack does 70 damage for each heads. If either of them is heads, your opponent's Active Pokémon is now Burned.`,
      },
      damage: {
        two: '70x',
      },
      manaCost: {
        two: 'fighting fighting colorless',
      },
      hp: 100,
    },

    106: {
      evolutions: [],
      moves: {
        one: 'Kick',
        two: 'High Jump Kick',
      },
      description: {
        one: null,
      },
      damage: {
        one: 20,
        two: 60,
      },
      manaCost: {
        one: 'fightning',
        two: 'fightning fightning colorless',
      },
      hp: 80,
    },

    107: {
      evolutions: [],
      moves: {
        one: 'Detect',
        two: 'Sky Uppercut',
      },
      description: {
        one: `Flip a coin. If heads, prevent all effects of attacks, including damage, done to Hitmonchan during your opponent's next turn.`,
        two: `This attack's damage isn't affected by Resistance.`,
      },
      damage: {
        two: 30,
      },
      manaCost: {
        one: 'colorless',
        two: 'fightning colorless',
      },
      hp: 70,
    },

    108: {
      evolutions: [],
      moves: {
        one: 'Lap Up',
        two: 'Slam',
      },
      description: {
        one: `Draw 3 cards.`,
        two: `Flip 2 coins. This attack does 50 damage for each heads.`,
      },
      damage: {
        two: '50x',
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'colorless colorless colorless',
      },
      hp: 100,
    },

    109: {
      evolutions: ['weezing'],
      moves: {
        one: 'Confusion Gas',
        two: 'Ram',
      },
      description: {
        one: `The Defending Pokémon is now Confused.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'grass',
        two: 'colorless colorless',
      },
      hp: 50,
    },

    110: {
      evolutions: ['koffing'],
      moves: {
        one: 'Confusion Gas',
        two: 'Posion Smog',
      },
      description: {
        one: `The Defending Pokémon is now Confused.`,
        two: `Each Defending Pokémon is now Poisoned.  Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)`,
      },
      damage: {
        one: 10,
      },
      manaCost: {
        one: 'grass',
        two: 'grass colorless',
      },
      hp: 80,
    },

    111: {
      evolutions: ['rhydon'],
      moves: {
        one: 'Stomp Off',
        two: 'Land Crush',
      },
      description: {
        one: `Discard the top 2 cards of your opponent’s deck.`,
      },
      damage: {
        two: 70,
      },
      manaCost: {
        one: 'fightning colorless',
        two: 'fighting fighting colorless',
      },
      hp: 90,
    },

    112: {
      evolutions: ['rhyhorn'],
      moves: {
        one: 'Horn Drill',
        two: 'Rock Slide',
      },
      description: {
        two: `This attack also does 10 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)`,
      },
      damage: {
        one: 50,
        two: 100,
      },
      manaCost: {
        one: 'fighting colorless colorless',
        two: 'fighting fighting colorless colorless',
      },
      hp: 120,
    },

    113: {
      evolutions: [],
      moves: {
        one: 'Bind Wound',
        two: 'Hammer In',
      },
      description: {
        one: `Flip a coin. If heads, heal 30 damage from 1 of your Pokémon.`,
      },
      damage: {
        two: 80,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'colorless colorless colorless colorless',
      },
      hp: 110,
    },

    114: {
      evolutions: [],
      moves: {
        one: 'Absorb',
        two: 'Vine Whip',
      },
      description: {
        one: `Heal 20 damage from this Pokémon.`,
      },
      damage: {
        one: 20,
        two: 30,
      },
      manaCost: {
        one: 'grass colorless',
        two: 'grass grass colorless',
      },
      hp: 80,
    },

    115: {
      evolutions: [],
      moves: {
        one: 'Rally Back',
        two: 'Hammer In',
      },
      description: {
        one: `If any of your Pokémon were Knocked Out by damage from an attack from your opponent’s Pokémon during their last turn, this attack does 90 more damage.`,
      },
      damage: {
        one: '30+',
        two: 100,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'colorless colorless colorless',
      },
      hp: 130,
    },

    116: {
      evolutions: ['seadra'],
      moves: {
        one: 'Paralyzing Gaze',
        two: 'Wave Splash',
      },
      description: {
        one: `Flip a coin. If heads, the Defending Pokémon is now Paralyzed.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 50,
    },

    117: {
      evolutions: ['horsea'],
      moves: {
        one: 'Aqua Pump',
        two: 'Waterfall',
      },
      description: {
        one: `You may discard up to 2   Water  Energy cards from your hand. If you do, this attack does 30 damage plus 10 more damage for each  Energy card you discarded.`,
      },
      damage: {
        one: '30+',
        two: 50,
      },
      manaCost: {
        one: 'water',
        two: 'water water colorless',
      },
      hp: 80,
    },

    118: {
      evolutions: ['seaking'],
      moves: {
        one: 'Collect',
        two: 'Waterfall',
      },
      description: {
        one: `Draw a card.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'water colorless',
      },
      hp: 70,
    },

    119: {
      evolutions: ['goldeen'],
      moves: {
        one: 'Soaking Horn',
        two: 'Reckless Charge',
      },
      description: {
        one: `If this Pokémon was healed during this turn, this attack does 80 more damage.`,
        two: `This Pokémon does 10 damage to itself.`,
      },
      damage: {
        one: '10+',
        two: 40,
      },
      manaCost: {
        one: 'water',
        two: 'colorless',
      },
      hp: 90,
    },

    120: {
      evolutions: ['starmie'],
      moves: {
        one: 'Tackle',
        two: 'Spinning Attack',
      },
      description: {
        one: null,
      },
      damage: {
        one: 10,
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'water colorless',
      },
      hp: 50,
    },

    121: {
      evolutions: ['staryu'],
      moves: {
        one: 'Recover',
        two: 'Core Splash',
      },
      description: {
        one: `Discard an Energy attached to this Pokémon and heal all damage from it.`,
        two: `If this Pokémon has any Psychic Energy attached to it, this attack does 30 more damage.`,
      },
      damage: {
        two: '60+',
      },
      manaCost: {
        one: 'water',
        two: 'water colorless colorless',
      },
      hp: 90,
    },

    122: {
      evolutions: [],
      moves: {
        one: 'Massage',
        two: 'Slap Down',
      },
      description: {
        one: `Heal 60 damage from 1 of your Benched Pokémon.`,
        two: `Flip 2 coins. This attack does 20 more damage for each heads.`,
      },
      damage: {
        two: '40+',
      },
      manaCost: {
        one: 'fairy colorless',
        two: 'fairy colorless colorless',
      },
      hp: 80,
    },
    123: {
      evolutions: [],
      moves: {
        one: 'Agility',
        two: 'Slash',
      },
      description: {
        one: `Flip a coin. If heads, prevent all effects of an attack, including damage, done to Scyther ex during your opponent's next turn.`,
      },
      damage: {
        one: 10,
        two: 50,
      },
      manaCost: {
        one: 'grass',
        two: 'grass grass colorless',
      },
      hp: 80,
    },

    124: {
      evolutions: [],
      moves: {
        one: 'Icy Kiss',
        two: 'Lovely Kiss',
      },
      description: {
        one: `If Jynx was damaged by an attack during your opponent's last turn, the Defending Pokémon is now  Paralyzed.`,
        two: `Move 2 damage counters from Jynx to the Defending Pokémon. If Smoochum is anywhere under Jynx, move  4 damage counters instead.`,
      },
      damage: {
        one: 30,
      },
      manaCost: {
        one: 'water colorless',
        two: 'psychic colorless',
      },
      hp: 70,
    },

    125: {
      evolutions: [],
      moves: {
        one: 'Thundershock',
        two: 'Quick Attack',
      },
      description: {
        one: `Flip a coin. If heads, the Defending Pokémon is now Paralyzed.`,
        two: `Flip a coin. If heads, this attack does 40 damage plus 20 more damage.`,
      },
      damage: {
        one: 10,
        two: '40+',
      },
      manaCost: {
        one: 'lightning',
        two: 'lightning lightning colorless',
      },
      hp: 90,
    },

    126: {
      evolutions: [],
      moves: {
        one: 'Punch',
        two: 'Heat Breath',
      },
      description: {
        two: `Flip a coin. If heads, this attack does 30 more damage.`,
      },
      damage: {
        one: 10,
        two: '20+',
      },
      manaCost: {
        one: 'colorless',
        two: 'fire colorless',
      },
      hp: 90,
    },

    127: {
      evolutions: [],
      moves: {
        one: 'Roof Fling',
        two: 'Guillotine',
      },
      description: {
        one: `Flip a coin. If heads, put your opponent's Active Pokémon and all cards attached to it into your opponent's hand.`,
      },
      damage: {
        two: 50,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'grass grass',
      },
      hp: 110,
    },

    128: {
      evolutions: [],
      moves: {
        one: 'Take Down',
        two: 'Seething Anger',
      },
      description: {
        one: `This Pokémon does 10 damage to itself.`,
        two: `Flip a coin for each damage counter on this Pokémon. This attack does 30 damage times the number of heads.`,
      },
      damage: {
        one: 30,
        two: '30x',
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless colorless',
      },
      hp: 110,
    },

    129: {
      evolutions: ['gyarados'],
      moves: {
        one: 'Call for Family',
        two: 'Tackle',
      },
      description: {
        one: `Search your deck for Magikarp and put as many of them as you like onto your Bench. Shuffle your deck afterward.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'water colorless',
      },
      hp: 30,
    },

    130: {
      evolutions: ['magikarp'],
      moves: {
        one: 'Beserker Splash',
        two: 'Aqua Tail',
      },
      description: {
        one: `This attack does 10 damage to each Benched Pokémon (both yours and your opponent’s). (Don’t apply Weakness and Resistance for Benched Pokémon.)`,
        two: `Flip a coin for each Water Energy attached to this Pokémon. This attack does 30 more damage for each heads.`,
      },
      damage: {
        one: 80,
        two: '90+',
      },
      manaCost: {
        one: 'water colorless colorless',
        two: 'water colorless colorless colorless',
      },
      hp: 130,
    },

    131: {
      evolutions: [],
      moves: {
        one: 'Ferry',
        two: 'Surf',
      },
      description: {
        one: `Search your discard pile for a Supporter card, show it to your opponent, and put it into your hand.`,
      },
      damage: {
        two: 40,
      },
      manaCost: {
        one: 'water',
        two: 'water water colorless',
      },
      hp: 90,
    },

    132: {
      evolutions: [],
      moves: {
        one: 'Metamorphosis Gene',
        two: 'Stick on',
      },
      description: {
        one: `If this Pokémon is your Active Pokémon, it can use the attacks of your opponent's Active Pokémon. (You still need the necessary Energy to use each attack.)`,
        two: `Attach a basic Energy card from your discard pile to this Pokémon.`,
      },
      damage: {
        two: 10,
      },
      manaCost: {
        two: 'colorless',
      },
      hp: 70,
    },

    133: {
      evolutions: ['vaporeon', 'jolteon', 'flareon'],
      moves: {
        one: 'Growl',
        two: 'Quick Attack',
      },
      description: {
        one: `During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).`,
        two: `Flip a coin. If heads, this attack does 10 more damage.`,
      },
      damage: {
        two: '10+',
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 60,
    },

    134: {
      evolutions: ['eevee'],
      moves: {
        one: 'Muddy Water',
        two: 'Spiral Drain',
      },
      description: {
        one: `Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)`,
        two: `Heal 20 damage from this Pokémon.`,
      },
      damage: {
        one: 20,
        two: 60,
      },
      manaCost: {
        one: 'colorless',
        two: 'water colorless colorless',
      },
      hp: 110,
    },

    135: {
      evolutions: ['eevee'],
      moves: {
        one: 'Electrigun',
        two: 'Pin Missile',
      },
      description: {
        one: `You may discard a Lightning Energy attached to this Pokémon. If you do, this attack does 40 more damage.`,
        two: `Flip 4 coins. This attack does 40 damage times the number of heads.`,
      },
      damage: {
        one: '20+',
        two: '40x',
      },
      manaCost: {
        one: 'colorless',
        two: 'lightning colorless colorless',
      },
      hp: 90,
    },

    136: {
      evolutions: ['eevee'],
      moves: {
        one: 'Bite',
        two: 'Fire Spin',
      },
      description: {
        two: `Discard 2 Fire Energy from this Pokémon.`,
      },
      damage: {
        one: 20,
        two: 130,
      },
      manaCost: {
        one: 'colorless',
        two: 'fire fire colorless',
      },
      hp: 110,
    },

    137: {
      evolutions: [],
      moves: {
        one: 'Code Check',
        two: 'Beam',
      },
      description: {
        one: `Look at 1 of your opponent’s face-down Prize cards.`,
      },
      damage: {
        two: 10,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless',
      },
      hp: 60,
    },

    138: {
      evolutions: ['omastar'],
      moves: {
        one: 'Team Assembly',
        two: 'Bind',
      },
      description: {
        one: `Search your deck for Omanyte, Kabuto, or any Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.`,
        two: `Flip a coin. If heads, the Defending Pokémon is now Paralyzed.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless',
      },
      hp: 70,
    },

    139: {
      evolutions: ['omanyte'],
      moves: {
        one: 'Restoring Beam',
        two: 'Spinning Attack',
      },
      description: {
        one: `Once during your turn (before your attack), you may search your deck for a Restored Pokémon and put it onto your Bench. Shuffle your deck afterward.`,
      },
      damage: {
        two: 60,
      },
      manaCost: {
        two: 'water colorless',
      },
      hp: 120,
    },

    140: {
      evolutions: ['kabutops'],
      moves: {
        one: 'Team Assembly',
        two: 'Pierce',
      },
      description: {
        one: `Search your deck for Omanyte, Kabuto, or any Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.`,
      },
      damage: {
        two: 20,
      },
      manaCost: {
        one: 'colorless',
        two: 'fighting colorless',
      },
      hp: 60,
    },

    141: {
      evolutions: ['kabuto'],
      moves: {
        one: 'Fossilized Memories',
        two: 'Rock Slide',
      },
      description: {
        one: `As long as this Pokémon is your Active Pokémon, your opponent can't play any Supporter cards from their hand.`,
        two: `This attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)`,
      },
      damage: {
        two: 80,
      },
      manaCost: {
        two: 'fighting colorless colorless',
      },
      hp: 140,
    },

    142: {
      evolutions: [],
      moves: {
        one: 'Supersonic',
        two: 'Fossil Fants',
      },
      description: {
        one: `Your opponent's Active Pokémon is now Confused.`,
        two: `If you don’t have any Pokémon-GX or Pokémon-{EX} on your Bench, this attack does 90 more damage.`,
      },
      damage: {
        two: '90+',
      },
      manaCost: {
        one: 'colorless',
        two: 'colorless colorless colorless',
      },
      hp: 130,
    },

    143: {
      evolutions: [],
      moves: {
        one: 'Rolling Tackle',
        two: 'Heavy Impact',
      },
      description: {
        one: null,
      },
      damage: {
        one: 80,
        two: 130,
      },
      manaCost: {
        one: 'colorless colorless colorless',
        two: 'colorless colorless colorless colorless',
      },
      hp: 150,
    },

    144: {
      evolutions: [],
      moves: {
        one: 'Gust',
        two: 'Sheer Cold',
      },
      description: {
        two: `Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.`,
      },
      damage: {
        one: 30,
        two: 100,
      },
      manaCost: {
        one: 'colorless colorless',
        two: 'water water colorless',
      },
      hp: 120,
    },

    145: {
      evolutions: [],
      moves: {
        one: 'Thunder Shock',
        two: 'Drill Peck',
      },
      description: {
        one: `Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.`,
      },
      damage: {
        one: 20,
        two: 120,
      },
      manaCost: {
        one: 'lightning',
        two: 'colorless colorless colorless colorless',
      },
      hp: 120,
    },

    146: {
      evolutions: [],
      moves: {
        one: 'Wing Attack',
        two: 'Sky Attack',
      },
      description: {
        two: `Flip a coin. If tails, this attack does nothing.`,
      },
      damage: {
        one: 70,
        two: 150,
      },
      manaCost: {
        one: 'fire colorless colorless',
        two: 'fire colorless colorless colorless',
      },
      hp: 120,
    },

    147: {
      evolutions: ['dragonair', 'dragonite'],
      moves: {
        one: 'Dragon Dew',
        two: 'Tail Slap',
      },
      description: {
        one: `Remove 2 damage counters from 1 of your Pokémon (remove 1 if there is only 1).`,
      },
      damage: {
        two: 10,
      },
      manaCost: {
        one: 'water',
        two: 'lightning',
      },
      hp: 50,
    },

    148: {
      evolutions: ['dratini', 'dragonite'],
      moves: {
        one: `Dragon's Wish`,
        two: 'Tail Smack',
      },
      description: {
        one: `During your next turn, you may attach any number of Energy cards from your hand to your Pokémon.`,
      },
      damage: {
        two: 60,
      },
      manaCost: {
        one: 'colorless',
        two: 'grass lightning colorless',
      },
      hp: 90,
    },

    149: {
      evolutions: ['dratini', 'dragonair'],
      moves: {
        one: 'Dragon Wave',
        two: 'Giant Tail',
      },
      description: {
        one: `Discard a Grass Energy and a Lightning Energy from this Pokémon.`,
        two: 'Flip a coin. If tails, this attack does nothing.',
      },
      damage: {
        one: 130,
        two: 200,
      },
      manaCost: {
        one: 'grass lightning',
        two: 'colorless colorless colorless colorless colorless',
      },
      hp: 160,
    },
    150: {
      evolutions: [],
      moves: {
        one: 'Psy Bolt',
        two: 'Zen Blade',
      },
      description: {
        one: `Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.`,
        two: `This Pokèmon can't use Zen Blade during your next turn.`,
      },
      damage: {
        one: 20,
        two: 100,
      },
      manaCost: {
        one: 'psychic colorless',
        two: 'psychic psychic colorless colorless',
      },
      hp: 120,
    },

    151: {
      evolutions: [],
      moves: {
        one: 'Clairvoyance',
        two: 'Psychic',
      },
      description: {
        one: `Your opponent reveals his or her hand.`,
        two: `This attack does 10 more damage for each Energy attached to your opponents Active Pokèmon.`,
      },
      damage: {
        one: '40+',
      },
      manaCost: {
        one: 'colorless',
        two: 'psychic colorless colorless',
      },
      hp: 70,
    },
  }

  useEffect(() => {
    if (!id) return <h1>Loading..</h1>
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((pokemon) => {
      setPokemon(pokemon)
      setPokemonId(pokemon.data.id)
    })
  }, [id])

  if (!getPokemon) return <h1>Loading...</h1>
  if (!pokeInfo) return <h1>Loading...</h1>
  if (!pokemonId) return <h1>Loading...</h1>

  return (
    <>
      <div className={classes.PokemonName}>
        <h1 style={{ padding: '0', margin: '0' }}>{getPokemon.data.name}</h1>
        <div className={classes.PokemonHealth}>
          <span className={classes.PokemonHeart}>&#10084;</span>
          <h2>{pokeInfo[pokemonId].hp}</h2>
        </div>
      </div>

      <div className={classes.PokemonAbilityContainer}>
        <div className={classes.PokemonAbilityAndDamage}>
          <h4 style={{ textDecoration: 'underline' }}>
            {pokeInfo[pokemonId].moves.one}
          </h4>
          {pokeInfo[pokemonId].damage.one ? (
            <span className={classes.PokemonDamage}>
              &#9876;{pokeInfo[pokemonId].damage.one}
            </span>
          ) : null}
        </div>

        {pokeInfo[pokemonId].description.one &&
        pokeInfo[pokemonId].description.one.length >= 60 ? (
          <p style={{ fontSize: '20px', fontStyle: 'italic', margin: '0' }}>
            {pokeInfo[pokemonId].description.one
              .split('')
              .splice(0, 60)
              .join('')}
            ...
          </p>
        ) : pokeInfo[pokemonId].description ? (
          <p style={{ fontSize: '20px' }}>
            {pokeInfo[pokemonId].description.one}
          </p>
        ) : null}
      </div>

      <div className={classes.PokemonAbilityContainer}>
        <div className={classes.PokemonAbilityAndDamage}>
          {pokeInfo[pokemonId].moves.two ? (
            <h4 style={{ textDecoration: 'underline' }}>
              {pokeInfo[pokemonId].moves.two}
            </h4>
          ) : null}
          {pokeInfo[pokemonId].damage.two ? (
            <span className={classes.PokemonDamage}>
              &#9876;{pokeInfo[pokemonId].damage.two}
            </span>
          ) : null}
        </div>

        {pokeInfo[pokemonId].description.two &&
        pokeInfo[pokemonId].description.two.length >= 60 ? (
          <p style={{ fontSize: '20px' }}>
            {pokeInfo[pokemonId].description.two
              .split('')
              .splice(0, 60)
              .join('')}
            ...
          </p>
        ) : pokeInfo[pokemonId].description ? (
          <p style={{ fontSize: '20px' }}>
            {pokeInfo[pokemonId].description.two}
          </p>
        ) : null}
      </div>

      <img
        style={{ height: '200px', width: '200px', justifySelf: 'center' }}
        src={getPokemon.data.sprites.other.dream_world.front_default}
        alt={getPokemon.data.name}
      />
      {/* <div>
        {getPokemon.data.abilities.map((ability) => {
          return <h4>{ability.ability.name}</h4>
        })}
      </div> */}
      {pokeInfo[pokemonId].evolutions.length > 2 ? (
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${pokeInfo[pokemonId].evolutions[0]}.png`}
            alt={getPokemon.data.name}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${pokeInfo[pokemonId].evolutions[1]}.png`}
            alt={getPokemon.data.name}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${pokeInfo[pokemonId].evolutions[2]}.png`}
            alt={getPokemon.data.name}
          />
        </div>
      ) : pokeInfo[pokemonId].evolutions.length > 1 ? (
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${pokeInfo[pokemonId].evolutions[0]}.png`}
            alt={getPokemon.data.name}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/${pokeInfo[pokemonId].evolutions[1]}.png`}
            alt={getPokemon.data.name}
          />
        </div>
      ) : pokeInfo[pokemonId].evolutions.length === 1 ? (
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${pokeInfo[pokemonId].evolutions[0]}.png`}
            alt={getPokemon.data.name}
          />
        </div>
      ) : null}
      {/* {getPokemon.data.types.map((type) => (
        <div key={type.type.name}>
          <p>{type.type.name}</p>
        </div>
      ))} */}
    </>
  )
}

export default PokemonCard
