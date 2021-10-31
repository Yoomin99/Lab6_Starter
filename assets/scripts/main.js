// main.js

// Here is where the recipes that you will fetch.
// Feel free to add your own here for part 2, if they are local files simply add their path as a string.
const recipes = [
  'https://introweb.tech/assets/json/ghostCookies.json',
  'https://introweb.tech/assets/json/birthdayCake.json',
  'https://introweb.tech/assets/json/chocolateChip.json',
  'assets/recipes/food3.json',
  'assets/recipes/food4.json',
  'assets/recipes/food2.json',

];

// Once all of the recipes that were specified above have been fetched, their
// data will be added to this object below. You may use whatever you like for the
// keys as long as it's unique, one suggestion might but the URL itself
const recipeData = {}

window.addEventListener('DOMContentLoaded', init);


// fetch('https://introweb.tech/assets/json/ghostCookies.json')
//   .then(res => res.json())
//   .then(data => console.log(data))

// This is the first function to be called, so when you are tracing your code start here.
async function init() {
  // fetch the recipes and wait for them to load
  
  let fetchSuccessful = await fetchRecipes();
  //if they didn't successfully load, quit the function
  if (!fetchSuccessful) {
    console.log('Recipe fetch unsuccessful');
    return;
  };
  
  //Add the first three recipe cards to the page
  createRecipeCards();
  // Make the "Show more" button functional
  bindShowMore();
}

async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    // This function is called for you up above
    // From this function, you are going to fetch each of the recipes in the 'recipes' array above.
    // Once you have that data, store it in the 'recipeData' object. You can use whatever you like
    // for the keys. Once everything in the array has been successfully fetched, call the resolve(true)
    // callback function to resolve this promise. If there's any error fetching any of the items, call
    // the reject(false) function.

    // For part 2 - note that you can fetch local files as well, so store any JSON files you'd like to fetch
    // in the recipes folder and fetch them from there. You'll need to add their paths to the recipes array.

    // Part 1 Expose - TODO
    //let size = 0;
    for(let i = 0, len = recipes.length; i < len; i ++ )
    {
      fetch(recipes[i])
      .then((Response)=>{
        recipeData[i] = Response.json();
        //data.then((new_data) => recipeData[i] = new_data );
          console.log(recipeData[i]);
          console.log(Response.status); // 200 
          //recipeData[i] = result;
          //resolve(true);
      })

      // .then(()=>{
      //   let size = 0;
  
      //   for(key in recipeData){
      //     if(recipeData.hasOwnProperty(key)) size++;
      //   }
      //   if(size == recipes.length){
      //     resolve(true);
      //   }
      // })
  
      // .then(() => {
      //   if(i == recipes.length && Object.keys(recipeData).length == recipes.length){
      //     resolve(true);
      // }
      // })

      .then(() => {
        if(Object.keys(recipeData).length == recipes.length){
          resolve(true);
      }
      })
  
  
      .catch((error) => {
         reject(false);
      });
    }
    // if(Object.keys(recipeData).length == recipes.length){
    //   resolve(true);
  // }



  });
  //console.log(recipeData)
}

  
function createRecipeCards() {
  // This function is called for you up above.
  // From within this function you can access the recipe data from the JSON 
  // files with the recipeData Object above. Make sure you only display the 
  // three recipes we give you, you'll use the bindShowMore() function to
  // show any others you've added when the user clicks on the "Show more" button.
 
  // Part 1 Expose - TODO
  console.log(recipeData);
  console.log(Object.keys(recipeData).length);
  for(let i = 0, len = 3; i < len; i++)
  {
    //const objectSymbols = Object.getOwnPropertyNames(recipeData[i]);
    console.log(recipeData[i]);
    const temp = document.createElement("recipe-card");
    //var textnode = document.createTextNode(recipeData[i]);
    //temp.appendChild(textnode);
    
    console.log("Before temp.data");
    //temp.data = recipeData[i];
    recipeData[i].then(new_data =>temp.data = new_data);
    document.querySelector("main").appendChild(temp);
  }

 
}

function bindShowMore() {
  // This function is also called for you up above.
  // Use this to add the event listener to the "Show more" button, from within 
  // that listener you can then create recipe cards for the rest of the .json files
  // that were fetched. You should fetch every recipe in the beginning, whether you
  // display it or not, so you don't need to fetch them again. Simply access them
  // in the recipeData object where you stored them/

  // Part 2 Explore - TODO
  const btn = document.querySelector("button");
  btn.addEventListener("click",shows);
  function shows(){
    if( btn.innerHTML === "Show Less"){
      btn.innerHTML = "Show more";

      for(let i = 3 ; i < 6; i ++ ){
      const temp = document.createElement("recipe-card");
      console.log("Before temp.data");
      recipeData[i].then(new_data =>temp.data = new_data);
      document.querySelector("main").appendChild(temp);

      }

    }

    else if(btn.innerHTML === "Show more")
    {
      btn.innerHTML = "Show Less";
      document.querySelectorAll("recipe-card")[3].remove();
      document.querySelectorAll("recipe-card")[3].remove();
      document.querySelectorAll("recipe-card")[3].remove();


  }

    else{
      return;
    }





  }


}