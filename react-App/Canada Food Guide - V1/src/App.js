import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Trash2, PlusCircle, Loader } from 'lucide-react';


const foodGroups = [
  { fgid: 'vf', foodgroup: 'Vegetables and Fruit ' },
  { fgid: 'gr', foodgroup: 'Grain Products ' },
  { fgid: 'mi', foodgroup: 'Milk and Alternatives' },
  { fgid: 'me', foodgroup: 'Meat and Alternatives' }
];

const directionalStatements = [
  "Eat at least one dark green and one orange vegetable each day.",
  "Choose vegetables and fruit prepared with little or no added fat, sugar or salt.",
  "Have vegetables and fruit more often than juice.",
  "Make at least half of your grain products whole grain each day.",
  "Choose grain products that are lower in fat, sugar or salt.",
  "Drink skim, 1%, or 2% milk each day.",
  "Select lower fat milk alternatives.",
  "Have meat alternatives such as beans, lentils and tofu often.",
  "Eat at least two Food Guide Servings of fish each week.",
  "Select lean meat and alternatives prepared with little or no added fat or salt."
];

const foodCategories = [
  { fgid: 'vf', fgcat_id: 0, fgcat: 'Non dark green or orange vegetable' },
  { fgid: 'vf', fgcat_id: 1, fgcat: 'Dark green vegetable' },
  { fgid: 'vf', fgcat_id: 2, fgcat: 'Orange vegetable' },
  { fgid: 'gr', fgcat_id: 4, fgcat: 'Non whole grain' },
  { fgid: 'gr', fgcat_id: 3, fgcat: 'Whole grain' },
  { fgid: 'mi', fgcat_id: 5, fgcat: 'Milk' },
  { fgid: 'mi', fgcat_id: 6, fgcat: 'Milk Alternatives' },
  { fgid: 'me', fgcat_id: 7, fgcat: 'Meat Alternatives' },
  { fgid: 'me', fgcat_id: 8, fgcat: 'Meat, fish, poultry and shellfish' }
];

const foods = [
 { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup, 6 spears', food: 'Asparagus' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Beans, green' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup cooked', food: 'Bok choy/Chinese cabbage (Choi sum)' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Broccoli' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup, 4 sprouts', food: 'Brussels sprouts' },
  { fgid: 'vf', fgcat_id: 2, srvg_sz: '125 mL, ½ cup, 1 large', food: 'Carrots' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Chard' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '250 mL, 1 cup raw', food: 'Dandelion greens' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '250 mL, 1 cup', food: 'Endive' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Fiddleheads' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '250 mL, 1 cup raw', food: 'Kale/collards' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup, ½ leek', food: 'Leeks' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '250 mL, 1 cup raw', food: 'Lettuce, romaine' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '250 mL, 1 cup raw', food: 'Mesclun mix' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '250 mL, 1 cup raw', food: 'Mustard greens' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Okra' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Peas' },
  { fgid: 'vf', fgcat_id: 2, srvg_sz: '125 mL, ½ cup', food: 'Pumpkin' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Seaweed' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Snow peas' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '250 mL, 1 cup raw', food: 'Spinach' },
  { fgid: 'vf', fgcat_id: 2, srvg_sz: '125 mL, ½ cup', food: 'Squash' },
  { fgid: 'vf', fgcat_id: 2, srvg_sz: '125 mL, ½ cup', food: 'Sweet potato' },
  { fgid: 'vf', fgcat_id: 2, srvg_sz: '125 mL, ½ cup', food: 'Yam' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '3 fruits', food: 'Apricot, fresh' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Cantaloupe' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup, ½ fruit', food: 'Mango' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 fruit', food: 'Nectarine' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '½ fruit', food: 'Papaya' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 medium', food: 'Peach' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 medium', food: 'Apple' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '½ fruit', food: 'Avocado' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Bamboo shoots' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 medium', food: 'Banana' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Beans, yellow' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Beets' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Berries' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup, ½ pod', food: 'Bitter melon' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Cabbage' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup, 4 flowerets', food: 'Cauliflower' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 medium stalk', food: 'Celery' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Chayote' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '20', food: 'Cherries' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 ear, 125 mL, ½ cup', food: 'Corn' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Cucumber' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '60 mL, ¼ cup', food: 'Dried fruit' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Eggplant' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '2 medium', food: 'Fig, fresh' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '½ fruit', food: 'Grapefruit' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '20 fruits', food: 'Grapes' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup, 1 fruit', food: 'Guava' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Honeydew' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, 1/2 cup', food: '100% fruit juice' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 large fruit', food: 'Kiwi' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Kohlrabi' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '250 mL, 1 cup raw', food: 'Lettuce (example: iceberg or butterhead)' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '10 fruits', food: 'Lychee' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Mixed vegetables' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Mushrooms' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 medium', food: 'Orange' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 medium', food: 'Pear' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup, ½ medium', food: 'Peppers, bell' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup, 1 slice', food: 'Pineapple' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Plantain' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '1 fruit', food: 'Plum' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup, ½ medium', food: 'Potato' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Radishes' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Rhubarb' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Tomato' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Tomato sauce' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Turnip' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Vegetable juice, lower sodium' },
  { fgid: 'vf', fgcat_id: 0, srvg_sz: '125 mL, ½ cup', food: 'Watermelon' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Zucchini' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup, ½ medium', food: 'Pepper, sweet, green' },
  { fgid: 'vf', fgcat_id: 1, srvg_sz: '125 mL, ½ cup', food: 'Edemame (soy beans)' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '125 mL, ½ cup cooked', food: 'Barley' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '½ bagel, 45 g', food: 'Bagel, whole grain' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '1 slice, 35 g', food: 'Bread, pumpernickel or rye' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '1 slice, 35 g', food: 'Bread, whole grain' },
  { fgid: 'gr', fgcat_id: 1, srvg_sz: '125 mL, ½ cup cooked', food: 'Bulgur' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '30 g', food: 'Cereal, cold, whole grain' },
   { fgid: 'gr', fgcat_id: 3, srvg_sz: '150 g, 175 mL, ¾ cup cooked', food: 'Cereal, hot, whole grain (example: oatmeal)' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '30 g', food: 'Crackers, rye' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '½, 35 g', food: 'Muffin, whole grain' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '125 mL, ½ cup cooked', food: 'Quinoa' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '125 mL, ½ cup cooked', food: 'Rice, brown' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '125 mL, ½ cup cooked', food: 'Pasta/noodles, whole grain' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '½ pita, 35 g', food: 'Pita, whole wheat' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '½ piece, 35 g', food: 'Tortilla, corn' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '½ piece, 35 g', food: 'Tortilla, whole wheat' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '1 medium, 35 g', food: 'Bannock' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '1 slice, 35 g', food: 'Baguette, French' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '1 slice, 35 g', food: 'Bread, white' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '30 g', food: 'Cereal, cold' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '150 g, 175 mL, ¾ cup cooked', food: 'Cereal, hot, for example: cream of wheat' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '125 mL, ½ cup cooked', food: 'Congee' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '1 slice, 35 g', food: 'Cornbread' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '125 mL, ½ cup cooked', food: 'Couscous' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '10, 30 g', food: 'Cracker, saltines' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '½ muffin, 35 g', food: 'English muffin, white' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '¼ naan, 35 g', food: 'Naan' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '1 small, 35 g', food: 'Pancake' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '125 mL, ½ cup cooked', food: 'Pasta/noodles, white' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '½ pita, 35 g', food: 'Pita, white' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '125 mL, ½ cup cooked', food: 'Polenta' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '125 mL, ½ cup cooked', food: 'Rice, white' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '2 medium', food: 'Rice cake, plain' },
  { fgid: 'gr', fgcat_id: 4, srvg_sz: '1 roll, 35 g', food: 'Roll, white' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '30 g', food: 'Crackers, whole wheat' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '125 mL, ½ cup cooked', food: 'Rice, wild' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '1 roll, 35 g', food: 'Roll, whole wheat' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '125 mL, ½ cup - cooked', food: 'Couscous, whole wheat' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '500 mL, 2 cups', food: 'Popcorn, without added fat or salt' },
  { fgid: 'gr', fgcat_id: 3, srvg_sz: '½ muffin, 35 g', food: 'English muffin, whole grain' },
  { fgid: 'mi', fgcat_id: 6, srvg_sz: '250 mL, 1 cup', food: 'Buttermilk' },
  { fgid: 'mi', fgcat_id: 6, srvg_sz: '250 mL, 1 cup', food: 'Fortified soy beverage (unsweetened)' },
  { fgid: 'mi', fgcat_id: 5, srvg_sz: '250 mL, 1 cup', food: 'Milk, 1%, 2%, skim' },
  { fgid: 'mi', fgcat_id: 5, srvg_sz: '125 mL, ½ cup undiluted', food: 'Milk, evaporated, canned' },
  { fgid: 'mi', fgcat_id: 5, srvg_sz: '250 mL, 1 cup', food: 'Milk, goat, enriched' },
  { fgid: 'mi', fgcat_id: 5, srvg_sz: '250 mL, 1 cup', food: 'Milk, lactose reduced' },
  { fgid: 'mi', fgcat_id: 5, srvg_sz: '250 mL, 1 cup reconstitued', food: 'Milk, powdered' },
  { fgid: 'mi', fgcat_id: 5, srvg_sz: '25 g, 75 mL, 1/3 cup', food: 'Milk, powdered' },
  { fgid: 'mi', fgcat_id: 6, srvg_sz: '50 g, 1 ½ oz', food: 'Cheese, block (Cheddar, Mozzarella, Swiss, feta)' },
  { fgid: 'mi', fgcat_id: 6, srvg_sz: '250 ml, 1 cup', food: 'Cheese, cottage or quark' },
  { fgid: 'mi', fgcat_id: 6, srvg_sz: '50 g, 1 ½ oz', food: 'Cheese, goat' },
  { fgid: 'mi', fgcat_id: 6, srvg_sz: '50 g, 1 ½ oz', food: 'Paneer' },
  { fgid: 'mi', fgcat_id: 6, srvg_sz: '175 g, 175ml, ¾ cup', food: 'Yogurt, plain' },
  { fgid: 'mi', fgcat_id: 5, srvg_sz: '250 mL, 1 cup', food: 'Milk, whole' },
  { fgid: 'mi', fgcat_id: 6, srvg_sz: '175 g, 175 mL, ¾ cup', food: 'Kefir' },
  { fgid: 'me', fgcat_id: 7, srvg_sz: '175 mL, ¾ cup', food: 'Beans, cooked and canned' },
  { fgid: 'me', fgcat_id: 7, srvg_sz: '2', food: 'Eggs' },
  { fgid: 'me', fgcat_id: 7, srvg_sz: '175 mL, ¾ cup', food: 'Lentils' },
  { fgid: 'me', fgcat_id: 7, srvg_sz: '60 mL, ¼ cup', food: 'Nuts, shelled' },
  { fgid: 'me', fgcat_id: 7, srvg_sz: '30 mL, 2 Tbsp', food: 'Peanut butter or nut butters' },
  { fgid: 'me', fgcat_id: 7, srvg_sz: '60 mL, ¼ cup', food: 'Seeds, shelled' },
  { fgid: 'me', fgcat_id: 7, srvg_sz: '150 g, 175 mL, ¾ cup', food: 'Tofu' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Beef' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Bison/Buffalo' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Chicken' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Deli meat, low-fat, lower sodium' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Duck' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Fish and shellfish, canned (example: crab, salmon, tuna)' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Fish, fresh or frozen (example: herring, mackerel, trout, salmon, sardines, squid, tuna)' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Game birds (example: ptarmigan, partridge, grouse, goose)' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Game meats (example: deer, moose, caribou, elk)' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Goat' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Ham' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Lamb' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Organ meat (example: liver, kidney)' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Pork' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Rabbit /Hare' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Shellfish, fresh or frozen (example: clams, crab, lobster, mussels, scallops, shrimp, prawns)' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Turkey' },
  { fgid: 'me', fgcat_id: 8, srvg_sz: '75 g (2½ oz) / 125 mL (½ cup)', food: 'Veal' }
];

const servingsPerDay = [
  { fgid: 'vf', gender: 'Female', ages: '2 to 3', servings: '4' },
  { fgid: 'vf', gender: 'Male', ages: '2 to 3', servings: '4' },
  { fgid: 'vf', gender: 'Female', ages: '4 to 8', servings: '5' },
  { fgid: 'vf', gender: 'Male', ages: '4 to 8', servings: '5' },
  { fgid: 'vf', gender: 'Female', ages: '9 to 13', servings: '6' },
  { fgid: 'vf', gender: 'Male', ages: '9 to 13', servings: '6' },
  { fgid: 'vf', gender: 'Female', ages: '14 to 18', servings: '7' },
  { fgid: 'vf', gender: 'Male', ages: '14 to 18', servings: '8' },
  { fgid: 'vf', gender: 'Female', ages: '19 to 30', servings: '7 to 8' },
  { fgid: 'vf', gender: 'Male', ages: '19 to 30', servings: '8 to 10' },
  { fgid: 'vf', gender: 'Female', ages: '31 to 50', servings: '7 to 8' },
  { fgid: 'vf', gender: 'Male', ages: '31 to 50', servings: '8 to 10' },
  { fgid: 'vf', gender: 'Female', ages: '51 to 70', servings: '7' },
  { fgid: 'vf', gender: 'Male', ages: '51 to 70', servings: '7' },
  { fgid: 'vf', gender: 'Female', ages: '71+', servings: '7' },
  { fgid: 'vf', gender: 'Male', ages: '71+', servings: '7' },
  { fgid: 'gr', gender: 'Female', ages: '2 to 3', servings: '3' },
  { fgid: 'gr', gender: 'Male', ages: '2 to 3', servings: '3' },
  { fgid: 'gr', gender: 'Female', ages: '4 to 8', servings: '4' },
  { fgid: 'gr', gender: 'Male', ages: '4 to 8', servings: '4' },
  { fgid: 'gr', gender: 'Female', ages: '9 to 13', servings: '6' },
  { fgid: 'gr', gender: 'Male', ages: '9 to 13', servings: '6' },
  { fgid: 'gr', gender: 'Female', ages: '14 to 18', servings: '6' },
  { fgid: 'gr', gender: 'Male', ages: '14 to 18', servings: '7' },
  { fgid: 'gr', gender: 'Female', ages: '19 to 30', servings: '6 to 7' },
  { fgid: 'gr', gender: 'Male', ages: '19 to 30', servings: '8' },
  { fgid: 'gr', gender: 'Female', ages: '31 to 50', servings: '6 to 7' },
  { fgid: 'gr', gender: 'Male', ages: '31 to 50', servings: '8' },
  { fgid: 'gr', gender: 'Female', ages: '51 to 70', servings: '6' },
  { fgid: 'gr', gender: 'Male', ages: '51 to 70', servings: '7' },
  { fgid: 'gr', gender: 'Female', ages: '71+', servings: '6' },
  { fgid: 'gr', gender: 'Male', ages: '71+', servings: '7' },
  { fgid: 'mi', gender: 'Female', ages: '2 to 3', servings: '2' },
  { fgid: 'mi', gender: 'Male', ages: '2 to 3', servings: '2' },
  { fgid: 'mi', gender: 'Female', ages: '4 to 8', servings: '2' },
  { fgid: 'mi', gender: 'Male', ages: '4 to 8', servings: '2' },
  { fgid: 'mi', gender: 'Female', ages: '9 to 13', servings: '3 to 4' },
  { fgid: 'mi', gender: 'Male', ages: '9 to 13', servings: '3 to 4' },
  { fgid: 'mi', gender: 'Female', ages: '14 to 18', servings: '3 to 4' },
  { fgid: 'mi', gender: 'Male', ages: '14 to 18', servings: '3 to 4' },
  { fgid: 'mi', gender: 'Female', ages: '19 to 30', servings: '2' },
  { fgid: 'mi', gender: 'Male', ages: '19 to 30', servings: '2' },
  { fgid: 'mi', gender: 'Female', ages: '31 to 50', servings: '2' },
  { fgid: 'mi', gender: 'Male', ages: '31 to 50', servings: '2' },
  { fgid: 'mi', gender: 'Female', ages: '51 to 70', servings: '3' },
  { fgid: 'mi', gender: 'Male', ages: '51 to 70', servings: '3' },
  { fgid: 'mi', gender: 'Female', ages: '71+', servings: '3' },
  { fgid: 'mi', gender: 'Male', ages: '71+', servings: '3' },
  { fgid: 'me', gender: 'Female', ages: '2 to 3', servings: '1' },
  { fgid: 'me', gender: 'Male', ages: '2 to 3', servings: '1' },
  { fgid: 'me', gender: 'Female', ages: '4 to 8', servings: '1' },
  { fgid: 'me', gender: 'Male', ages: '4 to 8', servings: '1' },
  { fgid: 'me', gender: 'Female', ages: '9 to 13', servings: '1 to 2' },
  { fgid: 'me', gender: 'Male', ages: '9 to 13', servings: '1 to 2' },
  { fgid: 'me', gender: 'Female', ages: '14 to 18', servings: '2' },
  { fgid: 'me', gender: 'Male', ages: '14 to 18', servings: '3' },
  { fgid: 'me', gender: 'Female', ages: '19 to 30', servings: '2' },
  { fgid: 'me', gender: 'Male', ages: '19 to 30', servings: '3' },
  { fgid: 'me', gender: 'Female', ages: '31 to 50', servings: '2' },
  { fgid: 'me', gender: 'Male', ages: '31 to 50', servings: '3' },
  { fgid: 'me', gender: 'Female', ages: '51 to 70', servings: '2' },
  { fgid: 'me', gender: 'Male', ages: '51 to 70', servings: '3' },
  { fgid: 'me', gender: 'Female', ages: '71+', servings: '2' },
  { fgid: 'me', gender: 'Male', ages: '71+', servings: '3' }
];
const getFoodGroupEmoji = (groupName) => {
  const emojiMap = {
    'Vegetables and Fruit': '🥕🍎',
    'Grain Products': '🍞🌾',
    'Milk and Alternatives': '🥛🧀',
    'Meat and Alternatives': '🥩🥜'
  };
  return emojiMap[groupName] || '🍽️';
};

const getFoodEmoji = (foodName) => {
  const emojiMap = {
    // Vegetables and Fruits
    'Asparagus': '🥦', 'Beans': '🫘', 'Bok choy': '🥬', 'Broccoli': '🥦', 'Brussels sprouts': '🥦',
    'Carrots': '🥕', 'Chard': '🥬', 'Dandelion': '🌿', 'Endive': '🥬', 'Fiddleheads': '🌿',
    'Kale': '🥬', 'Leeks': '🧅', 'Lettuce': '🥬', 'Mesclun': '🥬', 'Mustard': '🥬',
    'Okra': '🫑', 'Peas': '🫛', 'Pumpkin': '🎃', 'Seaweed': '🌿', 'Snow peas': '🫛',
    'Spinach': '🥬', 'Squash': '🎃', 'Sweet potato': '🍠', 'Yam': '🍠', 'Apricot': '🍑',
    'Cantaloupe': '🍈', 'Mango': '🥭', 'Nectarine': '🍑', 'Papaya': '🥭', 'Peach': '🍑',
    'Apple': '🍎', 'Avocado': '🥑', 'Bamboo': '🎍', 'Banana': '🍌', 'Beets': '🫒',
    'Berries': '🫐', 'Bitter melon': '🥒', 'Cabbage': '🥬', 'Cauliflower': '🥦',
    'Celery': '🥬', 'Chayote': '🫑', 'Cherries': '🍒', 'Corn': '🌽', 'Cucumber': '🥒',
    'Dried fruit': '🍇', 'Eggplant': '🍆', 'Fig': '🪴', 'Grapefruit': '🍊', 'Grapes': '🍇',
    'Guava': '🫒', 'Honeydew': '🍈', 'Juice': '🧃', 'Kiwi': '🥝', 'Kohlrabi': '🥬',
    'Lychee': '🫒', 'Mushrooms': '🍄', 'Orange': '🍊', 'Pear': '🍐',
    'Peppers': '🫑', 'Pineapple': '🍍', 'Plantain': '🍌', 'Plum': '🫒', 'Potato': '🥔',
    'Radishes': '🫒', 'Rhubarb': '🥬', 'Tomato': '🍅', 'Turnip': '🫒',
    'Watermelon': '🍉', 'Zucchini': '🥒', 'Edemame': '🫛',

    // Grain Products
    'Barley': '🌾', 'Bagel': '🥯', 'Bread': '🍞', 'Bulgur': '🌾', 'Cereal': '🥣',
    'Crackers': '🍘', 'Muffin': '🧁', 'Quinoa': '🌾', 'Rice': '🍚', 'Pasta': '🍝',
    'Pita': '🫓', 'Tortilla': '🫓', 'Bannock': '🫓', 'Baguette': '🥖', 'Congee': '🥣',
    'Cornbread': '🍞', 'Couscous': '🌾', 'Naan': '🫓', 'Pancake': '🥞', 'Polenta': '🌽',
    'Popcorn': '🍿', 'Roll': '🥐',

    // Milk and Alternatives
    'Buttermilk': '🥛', 'Soy beverage': '🥛', 'Milk': '🥛', 'Cheese': '🧀',
    'Yogurt': '🥛', 'Kefir': '🥛', 'Paneer': '🧀',

    // Meat and Alternatives
    'Eggs': '🥚', 'Lentils': '🫘', 'Nuts': '🥜', 'Peanut butter': '🥜',
    'Seeds': '🌰', 'Tofu': '🧊', 'Beef': '🥩', 'Bison': '🥩', 'Chicken': '🍗',
    'Deli meat': '🥓', 'Duck': '🦆', 'Fish': '🐟', 'Game birds': '🦃', 'Game meats': '🦌',
    'Goat': '🐐', 'Ham': '🍖', 'Lamb': '🍖', 'Organ meat': '🫀', 'Pork': '🥓',
    'Rabbit': '🐰', 'Shellfish': '🦞', 'Turkey': '🦃', 'Veal': '🥩'
  };
  
  // Convert food name to lowercase and remove any parentheses and their contents
  const cleanedFoodName = foodName.toLowerCase().replace(/\(.*?\)/g, '').trim();
  
  // Split the cleaned food name into words
  const foodWords = cleanedFoodName.split(/[,\s]+/);
  
  // Check for exact matches first
  if (emojiMap[cleanedFoodName]) {
    return emojiMap[cleanedFoodName];
  }
  
  // If no exact match, look for partial matches
  for (let word of foodWords) {
    for (let key in emojiMap) {
      if (key.toLowerCase().includes(word)) {
        return emojiMap[key];
      }
    }
  }
  
  // If still no match found, return a general food emoji based on the food group
  if (foodName.toLowerCase().includes('vegetable') || foodName.toLowerCase().includes('fruit')) {
    return '🥗';
  } else if (foodName.toLowerCase().includes('grain') || foodName.toLowerCase().includes('cereal')) {
    return '🌾';
  } else if (foodName.toLowerCase().includes('milk') || foodName.toLowerCase().includes('dairy')) {
    return '🥛';
  } else if (foodName.toLowerCase().includes('meat') || foodName.toLowerCase().includes('protein')) {
    return '🍖';
  }
  
  // If all else fails, return a general food emoji
  return '🍽️';
};
const FoodGuideTable = ({ member }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-6">
      <div className="bg-red-600 text-white p-4">
        <h2 className="text-2xl font-bold">My Food Guide 🍽️</h2>
        <p>{member.name} - {member.gender} aged {member.age}</p>
      </div>
      <div className="p-4">
        {member.menu.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              {getFoodGroupEmoji(item.group)} {item.group}
              <span className="ml-auto text-lg font-normal">{item.servings} servings</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {item.foods.map((food, foodIndex) => {
                const [foodName, servingSize] = food.split(' (');
                return (
                  <div key={foodIndex} className="flex items-center bg-gray-100 rounded-lg p-2">
                    <span className="text-2xl mr-2">{getFoodEmoji(foodName)}</span>
                    <div>
                      <p className="font-medium">{foodName}</p>
                      <p className="text-sm text-gray-600">({servingSize}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FoodPreferencesForm = ({ preferences, setPreferences }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Food Preferences</h3>
      {foodGroups.map((group) => (
        <div key={group.fgid} className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={preferences[group.fgid]}
              onChange={() => setPreferences({...preferences, [group.fgid]: !preferences[group.fgid]})}
              className="mr-2"
            />
            {group.foodgroup}
          </label>
        </div>
      ))}
    </div>
  );
};


const generateMenu = (age, gender, preferences) => {
  const ageGroup = getAgeGroup(age);
  let menu = [];

  foodGroups.forEach(fg => {
    if (!preferences[fg.fgid]) return; // Skip if food group is not selected

    const serving = servingsPerDay.find(s => s.fgid === fg.fgid && s.gender === gender && s.ages === ageGroup);
    if (!serving) return;

    const servingCount = parseInt(serving.servings.split(' to ')[0]);
    let foodItems = [];
    let darkGreenCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < servingCount; i++) {
      const categoryFoods = foods.filter(f => f.fgid === fg.fgid);
      
      if (fg.fgid === 'vf') {
        if (darkGreenCount === 0) {
          const darkGreenFoods = categoryFoods.filter(f => f.fgcat_id === 1);
          foodItems.push(darkGreenFoods[Math.floor(Math.random() * darkGreenFoods.length)]);
          darkGreenCount++;
        } else if (orangeCount === 0) {
          const orangeFoods = categoryFoods.filter(f => f.fgcat_id === 2);
          foodItems.push(orangeFoods[Math.floor(Math.random() * orangeFoods.length)]);
          orangeCount++;
        } else {
          foodItems.push(categoryFoods[Math.floor(Math.random() * categoryFoods.length)]);
        }
      } else if (fg.fgid === 'gr') {
        const wholeGrainFoods = categoryFoods.filter(f => f.fgcat_id === 3);
        const nonWholeGrainFoods = categoryFoods.filter(f => f.fgcat_id === 4);
        if (i < Math.ceil(servingCount / 2)) {
          foodItems.push(wholeGrainFoods[Math.floor(Math.random() * wholeGrainFoods.length)]);
        } else {
          foodItems.push(nonWholeGrainFoods[Math.floor(Math.random() * nonWholeGrainFoods.length)]);
        }
      } else {
        foodItems.push(categoryFoods[Math.floor(Math.random() * categoryFoods.length)]);
      }
    }

    menu.push({
      group: fg.foodgroup,
      foods: foodItems.map(f => `${f.food} (${f.srvg_sz})`),
      servings: serving.servings
    });
  });

  return menu;
};
const getAgeGroup = (age) => {
  if (age >= 2 && age <= 3) return '2 to 3';
  if (age >= 4 && age <= 8) return '4 to 8';
  if (age >= 9 && age <= 13) return '9 to 13';
  if (age >= 14 && age <= 18) return '14 to 18';
  if (age >= 19 && age <= 30) return '19 to 30';
  if (age >= 31 && age <= 50) return '31 to 50';
  if (age >= 51 && age <= 70) return '51 to 70';
  if (age >= 71) return '71+';
  return '19 to 30'; 
};
const Button = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${className}`}
  >
    {children}
  </button>
);

const Input = ({ label, value, onChange, type = "text", required = false }) => (
  <div className="flex flex-col mb-4">
    <label className="text-lg font-medium mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
      required={required}
    />
  </div>
);

const Select = ({ label, value, onChange, options, required = false }) => (
  <div className="flex flex-col mb-4">
    <label className="text-lg font-medium mb-2">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
      required={required}
    >
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
const MenuCard = ({ member }) => {
  const pieData = {
    labels: member.menu.map(item => item.group),
    datasets: [{
      data: member.menu.map(item => parseInt(item.servings.split(' to ')[0])),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0'
      ]
    }]
  };
  

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 mb-6"
    >
      <h3 className="text-2xl font-bold mb-4 text-red-600">{member.name}'s Menu</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {member.menu.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold text-red-500">{item.group} ({item.servings} servings)</h4>
              <ul className="list-disc list-inside">
                {item.foods.map((food, foodIndex) => (
                  <li key={foodIndex} className="text-gray-700">{food}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div style={{ width: '100%', maxWidth: '300px' }}>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CanadaFoodGuideApp = () => {
  const [mode, setMode] = useState(null);
  const [individualForm, setIndividualForm] = useState({ 
    age: '', 
    gender: '', 
    name: '',
    preferences: {vf: true, gr: true, mi: true, me: true}
  });
  const [familyMembers, setFamilyMembers] = useState([{ 
    age: '', 
    gender: '', 
    name: '',
    preferences: {vf: true, gr: true, mi: true, me: true}
  }]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    setMenu([]);
  };

  const handleIndividualSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const generatedMenu = generateMenu(parseInt(individualForm.age), individualForm.gender, individualForm.preferences);
      setMenu([{ name: individualForm.name, menu: generatedMenu }]);
      setLoading(false);
    }, 1000);
  };

  const handleFamilySubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const familyMenu = familyMembers.map(member => ({
        name: member.name,
        menu: generateMenu(parseInt(member.age), member.gender, member.preferences)
      }));
      setMenu(familyMenu);
      setLoading(false);
    }, 1500);
  };

  const addFamilyMember = () => {
    setFamilyMembers([...familyMembers, { 
      age: '', 
      gender: '', 
      name: '',
      preferences: {vf: true, gr: true, mi: true, me: true}
    }]);
  };

  const removeFamilyMember = (index) => {
    setFamilyMembers(familyMembers.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-white py-6 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-red-600">Canada Food Guide App 🍁</h1>
        <div className="flex justify-center mb-6 space-x-4">
          <Button 
            onClick={() => handleModeSelect('individual')} 
            className={`${mode === 'individual' ? 'bg-red-600 shadow-lg' : 'bg-gray-300'}`}
          >
            <User className="inline-block mr-2" /> Individual
          </Button>
          <Button 
            onClick={() => handleModeSelect('family')} 
            className={`${mode === 'family' ? 'bg-red-600 shadow-lg' : 'bg-gray-300'}`}
          >
            <Users className="inline-block mr-2" /> Family
          </Button>
        </div>

        <AnimatePresence>
          {mode === 'individual' && (
            <motion.form 
              onSubmit={handleIndividualSubmit} 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-red-600">Individual Information</h2>
                <Input 
                  label="Name"
                  value={individualForm.name}
                  onChange={(e) => setIndividualForm({ ...individualForm, name: e.target.value })}
                  required
                />
                <Input 
                  label="Age"
                  type="number"
                  value={individualForm.age}
                  onChange={(e) => setIndividualForm({ ...individualForm, age: e.target.value })}
                  required
                />
                <Select 
                  label="Gender"
                  value={individualForm.gender}
                  onChange={(e) => setIndividualForm({ ...individualForm, gender: e.target.value })}
                  options={[
                    { value: 'Female', label: 'Female' },
                    { value: 'Male', label: 'Male' }
                  ]}
                  required
                />
                <FoodPreferencesForm 
                  preferences={individualForm.preferences}
                  setPreferences={(newPreferences) => setIndividualForm({ ...individualForm, preferences: newPreferences })}
                />
                <Button 
                  type="submit" 
                  className="bg-red-600 hover:bg-red-700 w-full mt-4"
                >
                  Generate Food Guide
                </Button>
              </div>
            </motion.form>
          )}

          {mode === 'family' && (
            <motion.form 
              onSubmit={handleFamilySubmit} 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-red-600">Family Information</h2>
                {familyMembers.map((member, index) => (
                  <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-red-500">Family Member {index + 1}</h3>
                    <Input 
                      label="Name"
                      value={member.name}
                      onChange={(e) => {
                        const updatedMembers = [...familyMembers];
                        updatedMembers[index].name = e.target.value;
                        setFamilyMembers(updatedMembers);
                      }}
                      required
                    />
                    <Input 
                      label="Age"
                      type="number"
                      value={member.age}
                      onChange={(e) => {
                        const updatedMembers = [...familyMembers];
                        updatedMembers[index].age = e.target.value;
                        setFamilyMembers(updatedMembers);
                      }}
                      required
                    />
                    <Select 
                      label="Gender"
                      value={member.gender}
                      onChange={(e) => {
                        const updatedMembers = [...familyMembers];
                        updatedMembers[index].gender = e.target.value;
                        setFamilyMembers(updatedMembers);
                      }}
                      options={[
                        { value: 'Female', label: 'Female' },
                        { value: 'Male', label: 'Male' }
                      ]}
                      required
                    />
                    <FoodPreferencesForm 
                      preferences={member.preferences}
                      setPreferences={(newPreferences) => {
                        const updatedMembers = [...familyMembers];
                        updatedMembers[index].preferences = newPreferences;
                        setFamilyMembers(updatedMembers);
                      }}
                    />
                    <Button 
                      type="button" 
                      onClick={() => removeFamilyMember(index)} 
                      className="bg-red-600 hover:bg-red-700 mt-2"
                    >
                      <Trash2 className="inline-block mr-2" /> Remove Member
                    </Button>
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <Button 
                    type="button" 
                    onClick={addFamilyMember} 
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <PlusCircle className="inline-block mr-2" /> Add Family Member
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Generate Food Guide
                  </Button>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {loading && (
          <div className="text-center mt-6">
            <Loader className="animate-spin inline-block mr-2" />
            <p className="text-lg font-semibold">Generating your personalized menu...</p>
          </div>
        )}

        <AnimatePresence>
          {menu.length > 0 && !loading && (
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              {menu.map((member, index) => (
                <FoodGuideTable key={index} member={member} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CanadaFoodGuideApp;
