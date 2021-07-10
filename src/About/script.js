import imgMyPhoto from '../assets/images/img_3916.jpg';
import cv from '../assets/CV2.pdf';
export default {
  name: 'About',
  data() {
    return {
      skills: [
        { icon: 'csharp', name: 'C#' },
        { icon: 'net-core', name: '.NET Core' },
        { icon: 'git', name: 'Git' },
        { icon: 'cpp', name: 'C++' },
        { icon: 'css3', name: 'CSS3' },
        { icon: 'html5', name: 'HTML5' },
        { icon: 'javascript', name: 'Javascript' },
        { icon: 'sass', name: 'SASS' },
        { icon: 'vuejs', name: 'Vue.js' },
        { icon: 'sqlserver', name: 'SQL Server' },
        { icon: 'mysql', name: 'MySQL' },
        { icon: 'mongodb', name: 'MongoDB' },
        { icon: 'php', name: 'PHP' },
        { icon: 'meteor', name: 'Meteor' },
        { icon: 'ruby', name: 'Ruby' },
        { icon: 'ruby-on-rails', name: 'Ruby on Rails' },
        { icon: 'labview', name: 'Labview' },
        { icon: 'matlab', name: 'MATLAB' },
      ],
      cvlink: cv,
    };
  },
  mounted() {
    this.$refs.myPhoto.src = imgMyPhoto;
  },
};
