<template>
  <div id="page">
    <main>
      <div id="tabs">
        <div class="tab-links">
          <button data-id="testOne" data-open @click="selectTab">Teste 1</button>
          <button data-id="testTwo" @click="selectTab">Teste 2</button>
          <button data-id="testThree" @click="selectTab">Teste 3</button>
        </div>
        <div class="tab-content">
          <section id="testOne">
            <h2>Teste One</h2>
          </section>
          <section id="testTwo">
            <h2>Teste Two</h2>
          </section>
          <section id="testThree">
            <h2>Teste Three</h2>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    hideAllTabContent() {
      const html = {
        contents: [...document.querySelector('.tab-content').children]
      }
      html.contents.forEach(section => {
        section.style.display = "none"
      })
    },
    removeAllActiveClass() {
      const html = {
        links: [...document.querySelector('.tab-links').children],
      }
      html.links.forEach(tab => {
        tab.className = tab.className.replace(" active", "")
      })
    },
    showCurrentTab(id) {
      const tabContent = document.querySelector('#' + id)
      tabContent.style.display = "block"
    },
    selectTab(event) {
      this.hideAllTabContent()
      this.removeAllActiveClass()
      const target = event.currentTarget
      this.showCurrentTab(target.dataset.id)
      target.className += " active"

    },
    listenForChange() {
      const html = {
        links: [...document.querySelector('.tab-links').children],
      }
      html.links.forEach(tab => {
        tab.addEventListener('click', this.selectTab )
      })
   },
},
  mounted() {
    this.hideAllTabContent()
    document.querySelector('[data-open]').click()
  },
}
</script>

<style scoped>
   main {
    margin: 0 auto;
    width: 285px;
  }
  .tab-links {
    margin-bottom: 32px;
  }
  button {
    border: none;
    background: transparent;
    text-transform: uppercase;
    outline: none;
    position: relative;
    padding: 16px;
  }
  button::after {
    position: absolute;
    bottom: 0;
    left: 0;

    content: "";
    height: 2px;
    widows: 0%;

    background-color: #435B71;
    transition: .4s;
  }
  button:hover::after,
  button.active::after {
    width: 100%;
  }
  .tab-content>section {
    animation: up 1s;
  }
  @keyframes up {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
  }
}
</style>