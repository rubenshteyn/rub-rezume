<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="localeChanger">
      <button class="btn btn-dark btn-sm mr-2" v-for="language in languages" :key="language" :value="language"
              @click="changeLocale(language)">
        <span style="display: none">{{ language }}</span>
        <img v-if="language === 'ru'" class="icon-lang" src="../assets/img/ru.png">
        <img v-if="language === 'en'" class="icon-lang" src="../assets/img/en.png">
      </button>
    </div>
    <div class="card" data-state="#about">
      <div class="card-header">
        <div class="card-cover"></div>
        <img class="card-avatar" src="../assets/img/me.jpg" alt="avatar"/>
        <h1 class="card-fullname">{{ $t('common.fullname') }}</h1>
        <h2 class="card-jobtitle">{{ $t('common.jobTitle') }}</h2>
      </div>
      <div class="card-main">
        <div :class="{ isActive: styles.about }" class="card-section" id="about">
          <div class="card-content">
            <div class="card-subtitle">{{ $t('titles.about') }}</div>
            <div class="card-desc">
              <span>{{ $t('aboutInfo.hello') }}</span><span>{{ $t('aboutInfo.skills') }}</span>
              <span>{{ $t('aboutInfo.code') }}</span>
              <span>{{ $t('aboutInfo.experience') }}</span>
            </div>
          </div>
        </div>
        <div :class="{ isActive: styles.experience }" class="card-section" id="experience">
          <div class="card-content">
            <div class="card-subtitle">{{ $t('titles.experience') }}</div>
            <div class="card-timeline">
              <div class="card-item" data-year="2020">
                <div class="card-item-title">{{ $t('experienceInfo.2020') }}</div>
                <div class="card-item-desc">{{ $t('experienceInfo.description2020') }}</div>
              </div>
              <div class="card-item" data-year="2021">
                <div class="card-item-title">{{ $t('experienceInfo.2021') }}</div>
                <div class="card-item-desc">{{ $t('experienceInfo.description2021') }}</div>
              </div>
              <div class="card-item" data-year="2021">
                <div class="card-item-title">{{ $t('experienceInfo.20211') }}</div>
                <div class="card-item-desc">{{ $t('experienceInfo.description20211') }}</div>
              </div>
              <div class="card-item" data-year="2022">
                <div class="card-item-title">{{ $t('experienceInfo.2022') }}</div>
                <div class="card-item-desc">{{ $t('experienceInfo.description2022') }}</div>
              </div>
                <div class="card-item" data-year="2023">
                    <div class="card-item-title">{{ $t('experienceInfo.2023') }}</div>
                    <div class="card-item-desc">{{ $t('experienceInfo.description2023') }}</div>
                </div>
            </div>
          </div>
        </div>
        <div :class="{ isActive: styles.contact }" class="card-section" id="contact">
          <div class="card-content">
            <div class="card-subtitle">{{ $t('titles.contacts') }}</div>
            <div class="card-contact-wrapper">
              <div class="card-contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ $t('contactInfo.relocate') }}
              </div>
              <div class="card-contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="tel:+79777225257" class="card-link">+7 (977) 722-52-57</a>
              </div>
              <div class="card-contact">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                <a href="mailto:pikasssoul@yandex.ru" class="card-link">pikasssoul@yandex.ru</a>
              </div>
              <a href="https://t.me/iRooba" target="_blank" class="contact-me">{{ $t('contactInfo.work') }}</a>
            </div>
          </div>
        </div>
        <div class="card-buttons">
          <button @click="tabClicked('about')" data-section="#about" :class="{ isActive: styles.about }">
            {{ $t('titles.about') }}
          </button>
          <button @click="tabClicked('experience')" :class="{ isActive: styles.experience }"
                  data-section="#experience">{{ $t('titles.experience') }}
          </button>
          <button @click="tabClicked('contact')" :class="{ isActive: styles.contact }" data-section="#contact">
            {{ $t('titles.contacts') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      activeTab: 'about',
      styles: {
        about: true,
        experience: false,
        contact: false
      },
      languages: ['en', 'ru'],
      key: ""
    }
  },
  methods: {
    changeLocale(language) {
      this.$cookies.set('locale', language)
      this.$i18n.locale = language
    },
    tabClicked(element) {
      for (const style in this.styles) {
        this.styles[style] = false
        if (style === element) {
          this.styles[style] = true
          this.activeTab = element
        }
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");

* {
  box-sizing: border-box;
}

body {
  color: #2b2c48;
  font-family: "Jost", sans-serif;
  background-image: url("../assets/img/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

.card {
  max-width: 450px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}

.card::-webkit-scrollbar, *::-webkit-scrollbar {
    display: none;
} {
    display: none;
}

.card-link {
  color: #6f6f7b;
  text-decoration: unset;
}

.localeChanger {
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 6px 6px;
  margin-bottom: 1rem;
}

@media (max-width: 500px) {
  .localeChanger {
    top: 0rem;
  }
}

.icon-lang {
  width: 50px;
  height: 50px;
}

.localeChanger button {
  display: flex;
  border: unset;
  align-items: center;
  background: unset;
  line-height: 41px;
  margin: 2px;
  height: 47px;
  text-align: center;
  cursor: pointer;
  color: #FFF;
  transition: all 0.5s;
  position: relative;
}

.localeChanger button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.localeChanger button:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}

.localeChanger button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: scale(1.2, 1.2);
}

.localeChanger button:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}

.card[data-state="#about"] {
  height: 450px;
}

.card[data-state="#about"] .card-main {
  padding-top: 0;
}

.card[data-state="#contact"] {
  height: 430px;
}

.card[data-state="#experience"] {
  height: 550px;
}

.card.isActive .card-header {
  height: 80px;
}

.card.isActive .card-cover {
  height: 100px;
  top: -50px;
}

.card.isActive .card-avatar {
  transform: none;
  left: 20px;
  width: 50px;
  height: 50px;
  bottom: 10px;
}

.card.isActive .card-fullname, .card.isActive .card-jobtitle {
  left: 86px;
  transform: none;
}

.card.isActive .card-fullname {
  bottom: 18px;
  font-size: 19px;
}

.card.isActive .card-jobtitle {
  bottom: 16px;
  letter-spacing: 1px;
  font-size: 10px;
}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;
}

.card-header * {
  transition: 0.3s;
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
  background-image: url('../assets/img/background.jpg')
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}

.card-jobtitle {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-7px);
}

.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}

.card-desc {
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  color: #636b6f;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}

.card-social {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
}

.card-social svg {
  fill: #a5b5ce;
  width: 27px;
  display: block;
  transition: 0.3s;
}

.card-social a {
  color: #8797a1;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  background-color: rgba(93, 133, 193, 0.05);
  border-radius: 50%;
  margin-right: 10px;
}

.card-social a:hover svg {
  fill: #637faa;
}

.card-social a:last-child {
  margin-right: 0;
}

.card-buttons {
  display: flex;
  background-color: #fff;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;
}

.card-buttons button {
  flex: 1 1 auto;
  user-select: none;
  background: 0;
  font-size: 13px;
  border: 0;
  padding: 15px 5px;
  cursor: pointer;
  color: #5c5c6d;
  transition: 0.3s;
  font-family: "Jost", sans-serif;
  font-weight: 500;
  outline: 0;
  border-bottom: 3px solid transparent;
}

.card-buttons button.isActive, .card-buttons button:hover {
  color: #2b2c48;
  border-bottom: 3px solid #8a84ff;
  background: linear-gradient(to bottom, rgba(127, 199, 231, 0) 0%, rgba(207, 204, 255, 0.2) 44%, rgba(211, 226, 255, 0.4) 100%);
}

.card-section {
  display: none;
}

.card-section.isActive {
  display: block;
  animation: fadeIn 0.6s both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }
  100% {
    opacity: 1;
  }
}

.card-timeline {
  margin-top: 30px;
  position: relative;
}

.card-timeline:after {
  background: linear-gradient(to top, rgba(134, 214, 243, 0) 0%, rgba(81, 106, 204, 1) 100%);
  content: "";
  left: 42px;
  width: 2px;
  top: 0;
  height: 100%;
  position: absolute;
  content: "";
}

.card-item {
  position: relative;
  padding-left: 60px;
  padding-right: 20px;
  padding-bottom: 30px;
  z-index: 1;
}

.card-item:last-child {
  padding-bottom: 5px;
}

.card-item:after {
  content: attr(data-year);
  width: 10px;
  position: absolute;
  top: 0;
  left: 37px;
  width: 8px;
  height: 8px;
  line-height: 0.6;
  border: 2px solid #fff;
  font-size: 11px;
  text-indent: -35px;
  border-radius: 50%;
  color: rgba(134, 134, 134, 0.7);
  background: linear-gradient(to bottom, #a0aee3 0%, #516acc 100%);
}

.card-item-title {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-item-desc {
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
  font-family: "DM Sans", sans-serif;
}

.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6f6f7b;
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
  cursor: pointer;
}

.card-contact + .card-contact {
  margin-top: 16px;
}

.card-contact svg {
  flex-shrink: 0;
  height: 34px;
  width: 38px;
  min-height: 34px;
  margin-right: 12px;
  transition: 0.3s;
  padding-right: 12px;
  border-right: 1px solid #dfe2ec;
}

.contact-me {
  display: block;
  border: 0;
  outline: none;
  text-align: center;
  text-decoration: none;
  width: 70%;
  background: linear-gradient(to right, rgba(83, 200, 239, 0.8) 0%, rgba(81, 106, 204, 0.8) 96%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 12px 16px;
  border-radius: 5px;
  margin: 25px auto 0 auto;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
}

</style>
