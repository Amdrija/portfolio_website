import ProjectComponent from '../Project/index.vue';
import imgRestaurantPage from '../assets/images/restaurant_page.jpg';
import imgWeatherApp from '../assets/images/weather_app.jpg';
import imgToDoList from '../assets/images/todo_list_app.jpg';
import imgSortingAlgorithm from '../assets/images/sorting_algorithm.jpg';

export default {
  name: 'Work',
  components: {
    project: ProjectComponent,
  },
  data: function() {
    return {
      projectList: [
        {
          projectTitle: 'Restaurant Page',
          projectImage: imgRestaurantPage,
          projectLink: 'https://github.com/Amdrija/restaurantPage',
          projectTechnologies: ['sass', 'html5', 'javascript'],
        },
        {
          projectTitle: 'Weather App',
          projectImage: imgWeatherApp,
          projectLink: 'https://github.com/Amdrija/weather-app',
          projectTechnologies: ['vuejs', 'sass', 'html5', 'javascript'],
        },

        {
          projectTitle: 'To Do List',
          projectImage: imgToDoList,
          projectLink: 'https://github.com/Amdrija/todo-list-app',
          projectTechnologies: ['vuejs', 'sass', 'html5', 'javascript'],
        },
        {
          projectTitle: 'Sorting Algorithms',
          projectImage: imgSortingAlgorithm,
          projectLink: 'https://github.com/Amdrija/SortingAlgorithmAnimation',
          projectTechnologies: ['css3', 'html5', 'javascript'],
        },
      ],
    };
  },
};
