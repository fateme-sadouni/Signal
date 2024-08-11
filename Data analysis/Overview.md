<img src="https://github.com/user-attachments/assets/87c7ccb0-58ce-49c9-9d49-25ab1265026c" alt="lesson4" width="200"/> Creating a food guide plan based on the provided data involves a few steps, including integrating the directional statements with specific food items and serving sizes to create practical dietary recommendations. Here’s how you can prepare a food guide plan using the data:    
 
Step 1: Map Directional Statements to Food Groups and Categories    <br>
Step 2: Match Foods to Their Categories    <br>
Step 3: Develop Meal Plans Based on Guidelines    <br>


🍽**Example of a 1-Day Meal Plan:** <br> 
•	Breakfast:
   Oatmeal (½ cup cooked) with a handful of blueberries and a glass of water.
   
•	Lunch:
   Whole grain sandwich with lean turkey, lettuce, and tomato. Side of carrot sticks (½ cup).
   
•	Dinner:
   Grilled salmon with ½ cup of steamed broccoli and ½ cup of quinoa.
   
•	Snacks:
   1 medium apple and a handful of almonds.
   
This plan ensures that daily nutritional guidelines are met, with emphasis on whole foods and balanced portions as per the data provided
<br>
<br>
<img src="https://github.com/user-attachments/assets/8685d729-0198-4bba-89a9-f63eb2a14581" alt="Description" width="300" />

**Here's a brief overview and initial analysis of structures:**
<br>

**fgid:** Food group ID  
**directional-statement:** Recommendations or guidelines for each food group.  
**vf**: Vegetables and Fruit  
**gr**: Grains  
**mi**: Milk and Alternatives  
**me**: Meat and Alternatives  

|  Food group | directional-statement|
|----------|----------|
| Vegetables and Fruit | Eat at least one dark green and one orange vegetable each day. | 
| Vegetables and Fruit | Choose vegetables and fruit prepared with little or no added fat, sugar, or salt | 
| Vegetables and Fruit | Have vegetables and fruit more often than juice |
| Grains | Make at least half of your grain products whole grain each day |
| Grains | Choose grain products that are lower in fat, sugar, or salt |
| Milk and Alternatives | Drink skim, 1%, or 2% milk each day. | 
| Milk and Alternatives | Select lower fat milk alternatives | 
| Meat and Alternatives | Eat at least two Food Guide Servings of fish each week |
| Meat and Alternatives | Select lean meat and alternatives prepared with little or no added fat or salt |

<br> 

  
**foodgroup:** Name of the food group  
**fgcat_id:** Food group category ID  
**fgcat:** Description of the food group category

| fgid | foodgroup | fgcat_id | fgcat|
|----------|----------|----------|----------|
| vf | Vegetables and Fruit | 0 | Non dark green or orange vegetable |
| vf | Vegetables and Fruit | 1 | Dark green vegetable |
| vf | Vegetables and Fruit | 2 | Orange vegetable |
| gr | Grains | 4 | Non whole grain |
| gr | Grains | 3 | Whole grain |
| mi | Milk and Alternatives | 5 | Milk |
| mi | Milk and Alternatives | 6 | Milk Alternataives |
| me | Meat and Alternatives | 7 | Meat Alternatives |
| me | Meat and Alternatives | 8| Meat, fish, poultry and shellfish |


<br>
      
    
**srvg_sz:** Serving size description   

| fgid  | fgcat_id  | srvg_sz |Name of the food item  |
|----------|----------|----------|----------|
| vf | 0 | 21 samples like as(125 mL, ½ cup, 6 spears) | 50 foods  |
| vf | 1 | 8 samples like as(125 mL, ½ cup )| 21 foods  |
| vf | 2 | 2 samples like as(mL, ½ cup cooked ) | 5 foods |
| gr | 1 | 1 samples like as(125 mL, ½ cup) | 1 foods|
| gr | 3 | 19 samples like as(125 mL, ½ cup) | 19 foods |
| gr | 4 | 19 samples like as(125 mL, ½ cup, 6 spears) | 19 foods |
| mi | 5 | 4 samples like as(125 mL, ½ cup) | 6 foods |
| mi | 6 | 4 samples like as(125 mL, ½ cup cooked ) |8 foods |
| me | 7 | 5 samples like as(125 mL, ½ cup )| 7 foods |
| me | 8 | 1 samples like as(125 mL, ½ cup) | 18 foods |


<br>  

| Gender | Age | vf |gr | mi | me |
|----------|----------|----------|----------|----------|----------|
| Female | 2 to 3 | 4 | 3 | 2 | 1 |
| Female | 4 to 8 | 5 | 4 | 2 | 1 |
| Female | 9 to 13 | 6 | 6 | 3 to 4 | 1 to 2 |
| Female | 14 to 18 | 7 | 6 | 3 to 4| 1 to 2 |
| Female | 19 to 30 | 7 to 8 | 6 to 7 | 2 | 2 |
| Female | 31 to 50 | 7 to 8 | 6 to 7 | 2 | 2 |
| Female | 51 to 70 | 7 | 6 | 3 | 2 |
| Female | 71+ | 7| 6 | 3 | 2 |
| Male | 2 to 3 | 4 | 3 | 2 | 1 |
| Male | 4 to 8 | 5 | 4 | 2 | 1 |
| Male | 9 to 13 | 6 | 6 | 3 to 4 | 1 to 2 |
| Male | 14 to 18 | 8 | 7 | 3 to 4| 3 |
| Male | 19 to 30 | 8 to 10 | 8 | 2 | 2 |
| Male | 31 to 50 | 8 to 10 | 8 | 2 | 3 |
| Male | 51 to 70 | 7 | 7 | 3 | 3 |
| Male | 71+ | 7| 7 | 3 | 3 |






