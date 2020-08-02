import imgMyPhoto from '../assets/images/img_3916.jpg';
import cv from '../assets/CV2.pdf';
export default {
  name: 'About',
  data() {
    return {
      skills: [
        'cpp',
        'css3',
        'git',
        'html5',
        'javascript',
        'labview',
        'meteor',
        'sqlserver',
        'mongodb',
        'mysql',
        'ruby',
        'ruby-on-rails',
        'sass',
        'vuejs',
      ],
      cvlink: cv,
    };
  },
  mounted() {
    this.$refs.myPhoto.src = imgMyPhoto;
  },
};
