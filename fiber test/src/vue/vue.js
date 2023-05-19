// Creating a new Vue instance
const app = new Vue({// Binding the Vue instance to the HTML element with the id 'app'
  el: '#app',
  data: {
    characters: [],
    prevPage: null,// URL of the previous page of characters
    nextPage: null,// URL of the next page of characters
    currentPage: 'https://swapi.dev/api/people/'// URL of the current page of characters
  },
  mounted() {
    // Lifecycle hook that runs after the Vue instance is mounted
    this.loadCharacters(this.currentPage);// Calling the loadCharacters method to fetch and load characters
  },
  methods: {
    loadCharacters(url) {
      // Method to fetch and load characters
      fetch(url)// Fetching the data from the specified URL
        .then(response => response.json())// Parsing the response as JSON
        .then(data => {
          // Handling the retrieved data
          // Map over each character and fetch the films for that character
          Promise.all(data.results.map(character => {
            // Fetching the films for each character
            return Promise.all(character.films.map(film => {
              // Fetching individual film data
              return fetch(film)
                .then(response => response.json())
                .then(filmData => {
                  return filmData;
                });
            })).then(films => {
              // Store the films for the character
              character.films = films;
              return character;
            });
          })).then(characters => {
            // Update the characters array with the fetched data
            this.characters = characters;
            this.prevPage = data.previous;
            this.nextPage = data.next;
            this.currentPage = url;
          });
        });
    }
  }
});
