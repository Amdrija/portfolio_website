import HeaderComponent from '../Header/index.vue';
import WorkComponent from '../Work/index.vue';
import FooterComponent from '../Footer/index.vue';
import AboutComponent from '../About/index.vue';
export default {
  name: 'App',
  components: {
    'header-component': HeaderComponent,
    work: WorkComponent,
    'footer-component': FooterComponent,
    about: AboutComponent,
  },
  data: function() {
    return {
      //so it's easier to build About page
      //should be false when the website is finished
      // so that the default page is work
      // TODO: set showAboutSection to false
      showAboutSection: false,
    };
  },
  methods: {
    aboutClick: function() {
      if (!this.showAboutSection) {
        this.toggleAbout();
      }
    },
    workClick: function() {
      if (this.showAboutSection) {
        this.toggleAbout();
      }
    },
    toggleAbout: function() {
      this.showAboutSection = !this.showAboutSection;
    },
  },
};
