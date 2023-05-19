// Creating a new Vue instance
const shipVue = new Vue({// Binding the Vue instance to the HTML element with the id 'ShipApp'
    el: '#ShipApp',
    data: {
      starships: [],// Array to store the starships
      prevPage: null,// URL of the previous page of starships
      nextPage: null,// URL of the next page of starships
      currentPage: 'https://swapi.dev/api/starships/'// URL of the current page of starship
    },
    mounted() {
    // Lifecycle hook that runs after the Vue instance is mounted
    this.loadStarships(this.currentPage);// Calling the loadStarships method to fetch and load starships
    },
    methods: {
      loadStarships(url) {
      // Method to fetch and load starships
        fetch(url)// Fetching the data from the specified URL
        .then(response => response.json())// Parsing the response as JSON
          .then(data => {
            // Handling the retrieved data
            // Update the starships array with the fetched data
            this.starships = data.results;
            this.prevPage = data.previous;
            this.nextPage = data.next;
            this.currentPage = url;
            
            // Fetch additional details for each starship
            this.starships.forEach(starship => {
              fetch(starship.url)
                .then(response => response.json())
                .then(starshipData => {
                // Updating the starship with additional details
                starship.passengers = starshipData.passengers;
                  starship.model = starshipData.model;
                });
            });

          });
        }
    }
  });
  