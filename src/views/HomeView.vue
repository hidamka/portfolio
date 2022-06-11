<template>
  <div class="home">
    <TopPage />
    <AboutMe />
    <SkillSet />
  </div>
</template>

<script>
import TopPage from "@/views/TopPage";
import SkillSet from "@/views/SkillSet";
import AboutMe from "@/views/AboutMe";
import TopPage from "@/views/TopPage";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {TopPage, AboutMe, SkillSet },
  data() {
    return {
      Age: 0,
      Birthdate: {
        day: 21,
        month: 4,
        year: 2021,
      },
      Position: "",
    };
  },
};
</script>
<style lang="scss" scoped>
#profile_container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #profile_img {
    width: 300px;
    height: 300px;
    border-radius: 100px;
    margin: 15px;
  }
  @media screen and (max-width: 400px) {
    #profile_img {
      width: 200px;
      height: 200px;
      border-radius: 75px;
    }
  }
  #profile_description {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .profile_text {
      padding: 10px;
      font-size: 19px;
    }
    @media screen and (max-width: 400px) {
      .profile_text {
        padding: 10px 25px;
      }
    }
  }
  #socials {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .social_icon {
      width: 100px;
      height: 100px;
      border-radius: 100px;
      margin: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100px;
        transition: 0.3s;
        &:hover {
          box-shadow: 0px 2px 10px -2px #777777;
        }
      }
    }
  }
}
</style>
