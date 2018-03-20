        $(document).ready(function () {
            var json;
            $("#tabs").tabs();

            $("#foodata").on("submit", function (event) {
                event.preventDefault();

                // show table when submit is clicked
                $('#tabs').css('display', 'block');

                // user inputs
                var ingredient1 = $('#ingre1').val();
                var ingredient2 = $('#ingre2').val();
                var ingredient3 = $('#ingre3').val();
                var ingredient4 = $('#ingre4').val();
                var ingredient5 = $('#ingre5').val();

                // query string that will be appended onto API URL
                var queryString = "";
                if (ingredient1) {
                    queryString += ingredient1;
                }
                if (ingredient2) {
                    queryString += '+' + ingredient2;
                }
                if (ingredient3) {
                    queryString += '+' + ingredient3;
                }
                if (ingredient4) {
                    queryString += '+' + ingredient4;
                }
                if (ingredient5) {
                    queryString += '+' + ingredient5;
                }

                // string appended to API URL if user checks diet checkbox
                var queryDietString = "";
                if ($('#highProteinCheck').prop("checked")) {
                    queryDietString += "&diet=high-protein";
                }
                if ($('#lowCarbCheck').prop("checked")) {
                    queryDietString += "&diet=low-carb";
                }
                if ($('#lowFatCheck').prop("checked")) {
                    queryDietString += "&diet=low-fat";
                }


                // XMLHttpRequest used to get data from URL
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://api.edamam.com/search?q=" + queryString + "&app_id=8b1c7d04&app_key=187b4fba4df25bd9387a9b29d448e7a3&from=0&to=7" + queryDietString, true);
                xhr.onload = function () {

                    // check if retrieved response is JSON
                    console.log(JSON.parse(xhr.responseText));

                    // get json data
                    json = JSON.parse(xhr.responseText);

                    // check if search return any results
                    if (!json.hits.length) {
                        // if no results found for user search
                        alert("No results Enter Different Ingredients");
                    } else {
                        // parse and display information for recipe 1
                        $('#recipeName1').html(json.hits[0].recipe.label);

                        var ingredientshtml = "";
                        for (i in json.hits[0].recipe.ingredientLines)
                            ingredientshtml += (json.hits[0].recipe.ingredientLines[i] + '<br>');
                        $('#recipeIngredients1').html(ingredientshtml);
                        $('#recipeImage1').attr('src', json.hits[0].recipe.image).on('load', function () {});

                        // add colored diet info labels 
                        addDietLabels(0);

                        inflateNutritionTable(0);

                        $("#instructionButton").click(function () {
                            var instructionUrl = json.hits[0].recipe.url;
                            var win = window.open(instructionUrl, '_blank');
                        })
                        //  }); Not html istead of append to avoide duplicate output

                        // parse and display recipe 2
                        if (json.hits.length > 1) {
                            $('#recipeName2').html(json.hits[1].recipe.label);
                            ingredientshtml = "";
                            for (i in json.hits[1].recipe.ingredientLines)
                                ingredientshtml += (json.hits[1].recipe.ingredientLines[i] + '<br>');
                            $('#recipeIngredients2').html(ingredientshtml);
                            $('#recipeImage2').attr('src', json.hits[1].recipe.image).on('load', function () {});
                            // add colored diet info labels 
                            addDietLabels(1);
                            inflateNutritionTable(1);
                            $("#instructionButton1").click(function () {
                                var instructionUrl = json.hits[1].recipe.url;
                                var win = window.open(instructionUrl, '_blank');
                            })

                        }
                        // parse and display recipe 3
                        if (json.hits.length > 2) {

                            $('#recipeName3').html(json.hits[2].recipe.label);
                            ingredientshtml = "";
                            for (i in json.hits[2].recipe.ingredientLines)
                                ingredientshtml += (json.hits[2].recipe.ingredientLines[i] + '<br>');
                            $('#recipeIngredients3').html(ingredientshtml);
                            $('#recipeImage3').attr('src', json.hits[2].recipe.image).on('load', function () {});
                            // add colored diet info labels 
                            addDietLabels(2);
                            inflateNutritionTable(2);
                            $("#instructionButton2").click(function () {
                                var instructionUrl = json.hits[2].recipe.url;
                                var win = window.open(instructionUrl, '_blank');
                            })

                        }
                        // parse and display recipe 4
                        if (json.hits.length > 3) {

                            $('#recipeName4').html(json.hits[3].recipe.label);
                            ingredientshtml = "";
                            for (i in json.hits[3].recipe.ingredientLines)
                                ingredientshtml += (json.hits[3].recipe.ingredientLines[i] + '<br>');
                            $('#recipeIngredients4').html(ingredientshtml);
                            $('#recipeImage4').attr('src', json.hits[3].recipe.image).on('load', function () {});
                            // add colored diet info labels 
                            addDietLabels(3);
                            inflateNutritionTable(3);
                            $("#instructionButton3").click(function () {
                                var instructionUrl = json.hits[3].recipe.url;
                                var win = window.open(instructionUrl, '_blank');
                            })
                        }
                        // parse and display recipe 5
                        if (json.hits.length > 4) {

                            $('#recipeName5').html(json.hits[4].recipe.label);
                            ingredientshtml = "";
                            for (i in json.hits[4].recipe.ingredientLines)
                                ingredientshtml += (json.hits[4].recipe.ingredientLines[i] + '<br>');
                            $('#recipeIngredients5').html(ingredientshtml);
                            $('#recipeImage5').attr('src', json.hits[4].recipe.image).on('load', function () {});
                            // add colored diet info labels  
                            addDietLabels(4);
                            inflateNutritionTable(4);
                            $("#instructionButton4").click(function () {
                                var instructionUrl = json.hits[4].recipe.url;
                                var win = window.open(instructionUrl, '_blank');
                            })
                        }
                        // parse and display recipe 6
                        if (json.hits.length > 5) {

                            $('#recipeName6').html(json.hits[5].recipe.label);
                            ingredientshtml = "";
                            for (i in json.hits[5].recipe.ingredientLines)
                                ingredientshtml += (json.hits[5].recipe.ingredientLines[i] + '<br>');
                            $('#recipeIngredients6').html(ingredientshtml);
                            $('#recipeImage6').attr('src', json.hits[5].recipe.image).on('load', function () {});
                            // add colored diet info labels 
                            addDietLabels(5);
                            inflateNutritionTable(5);
                            $("#instructionButton5").click(function () {
                                var instructionUrl = json.hits[5].recipe.url;
                                var win = window.open(instructionUrl, '_blank');
                            })
                        }
                        // parse and display recipe 7
                        if (json.hits.length > 6) {

                            $('#recipeName7').html(json.hits[6].recipe.label);
                            ingredientshtml = "";
                            for (i in json.hits[6].recipe.ingredientLines)
                                ingredientshtml += (json.hits[6].recipe.ingredientLines[i] + '<br>');
                            $('#recipeIngredients7').html(ingredientshtml);
                            $('#recipeImage7').attr('src', json.hits[6].recipe.image).on('load', function () {});
                            // add colored diet info labels 
                            addDietLabels(6);
                            inflateNutritionTable(6);
                            $("#instructionButton6").click(function () {
                                var instructionUrl = json.hits[6].recipe.url;
                                var win = window.open(instructionUrl, '_blank');
                            })
                        }
                    }
                };
                xhr.send(); // send HTTP request to retrieve data for user's search

            });

            // function that adds colored diet information labels such as Low-Carb, High-Protein, and Low-Fat in tabs 
            function addDietLabels(hitsIndex) {
                var nDietLabels = (json.hits[hitsIndex].recipe.dietLabels < 3) ? json.hits[0].recipe.dietLabels : 3;
                console.log("diet labels: " + nDietLabels);
                $('.dietLabels:' + 'eq(' + hitsIndex + ') p').html("");
                $('.dietLabels:' + 'eq(' + hitsIndex + ') p').css("backgroundColor", "transparent");;


                for (i = 0; i < nDietLabels; i++) {
                    if (json.hits[hitsIndex].recipe.dietLabels[i] != null) {
                        if (json.hits[hitsIndex].recipe.dietLabels[i] == "Low-Carb")
                            $('#dietLabel' + (hitsIndex + parseInt(1)) + '-' + (parseInt(i) + parseInt(1))).css("backgroundColor", "blue");
                        if (json.hits[hitsIndex].recipe.dietLabels[i] == "High-Protein")
                            $('#dietLabel' + (hitsIndex + parseInt(1)) + '-' + (parseInt(i) + parseInt(1))).css("backgroundColor", "red");
                        if (json.hits[hitsIndex].recipe.dietLabels[i] == "Low-Fat")
                            $('#dietLabel' + (hitsIndex + parseInt(1)) + '-' + (parseInt(i) + parseInt(1))).css("backgroundColor", "green");

                        if (json.hits[hitsIndex].recipe.dietLabels[i] == "Low-Carb" || json.hits[hitsIndex].recipe.dietLabels[i] == "High-Protein" ||
                            json.hits[hitsIndex].recipe.dietLabels[i] == "Low-Fat")
                            $('#dietLabel' + (hitsIndex + parseInt(1)) + '-' + (parseInt(i) + parseInt(1))).html(json.hits[hitsIndex].recipe.dietLabels[i]);
                    }
                }

            }
            // inflate a nutrition table in a tab
            function inflateNutritionTable(hitsIndex) {
                var servings = json.hits[hitsIndex].recipe.yield;
                var calories;
                // parse JSON response for nutrition information
                if (json.hits[hitsIndex].recipe) {
                    calories = Math.round(parseInt(json.hits[hitsIndex].recipe.calories) / parseInt(servings));
                } else {
                    calories = "No Info";
                }
                var protein;
                if (json.hits[hitsIndex].recipe.totalNutrients.PROCNT) {
                    protein = Math.round(parseInt(json.hits[hitsIndex].recipe.totalNutrients.PROCNT.quantity) / parseInt(servings));
                    protein += json.hits[hitsIndex].recipe.totalNutrients.PROCNT.unit;
                } else {
                    protein = "No Info";
                }
                var fat;
                if (json.hits[hitsIndex].recipe.totalNutrients.FAT) {
                    fat = Math.round(parseInt(json.hits[hitsIndex].recipe.totalNutrients.FAT.quantity) / parseInt(servings));
                    fat += json.hits[hitsIndex].recipe.totalNutrients.FAT.unit;
                } else {
                    fat = "No Info";
                }
                var carbs;
                if (json.hits[hitsIndex].recipe.totalNutrients.CHOCDF) {
                    carbs = Math.round(parseInt(json.hits[hitsIndex].recipe.totalNutrients.CHOCDF.quantity) / parseInt(servings));
                    carbs += json.hits[hitsIndex].recipe.totalNutrients.CHOCDF.unit;
                } else {
                    carbs = "No Info";
                }
                var cholesterol = "";
                if (json.hits[hitsIndex].recipe.totalNutrients.CHOLE) {
                    cholesterol = Math.round(parseInt(json.hits[hitsIndex].recipe.totalNutrients.CHOLE.quantity) / parseInt(servings));
                    cholesterol += json.hits[hitsIndex].recipe.totalNutrients.CHOLE.unit;
                } else {
                    cholesterol = "No Info";
                }
                var sodium = "";
                if (json.hits[hitsIndex].recipe.totalNutrients.NA) {
                    sodium = Math.round(parseInt(json.hits[hitsIndex].recipe.totalNutrients.NA.quantity) / parseInt(servings));
                    sodium += json.hits[hitsIndex].recipe.totalNutrients.NA.unit;
                } else {
                    sodium = "No Info";
                }


                $('td:nth-child(2)').css('textAlign', 'right');
                //insert into table cells
                $('#recipe' + (hitsIndex + parseInt(1)) + 'NutritionTable tr:nth-child(2) td:nth-child(2)').text(calories);
                $('#recipe' + (hitsIndex + parseInt(1)) + 'NutritionTable tr:nth-child(3) td:nth-child(2)').text(protein);
                $('#recipe' + (hitsIndex + parseInt(1)) + 'NutritionTable tr:nth-child(4) td:nth-child(2)').text(fat);
                $('#recipe' + (hitsIndex + parseInt(1)) + 'NutritionTable tr:nth-child(5) td:nth-child(2)').text(carbs);
                $('#recipe' + (hitsIndex + parseInt(1)) + 'NutritionTable tr:nth-child(6) td:nth-child(2)').text(cholesterol);
                $('#recipe' + (hitsIndex + parseInt(1)) + 'NutritionTable tr:nth-child(7) td:nth-child(2)').text(sodium);

            }

            function fbshareCurrentPage() {
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + escape(window.location.href) + "&t=" + document.title, '',
                    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
                return false;
            }
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            // $('[title]').tooltip();
        }); //end ready()
