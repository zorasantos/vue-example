<template>
  <v-container>
    <section class="product">
      <div class="product__photo">
        <div class="photo-container">
          <div class="photo-main">
            <div class="controls">
              <img src="../../assets/outline_share_white_18dp.png" alt="">
              <img src="../../assets/outline_favorite_border_white_18dp.png" alt="">
            </div>
            <img class="img-principal" :src="[ this.change == false ? this.imgPrincipal : this.img ]">
          </div>
          <div class="photo-album">
            <button @click="imgPrincipalChange"><img :src="imgPrincipal"></button>
            <button @click="geOpenChangeImg"><img :src="geAberta"></button>
            <button @click="geOpenProductChangeImg"><img :src="geProduct"></button>
          </div>
        </div>
      </div>
      <div class="product__info">
        <div class="title">
          <h1>Geladeira Frost Free</h1>
          <span>COD: 15072020</span>
        </div>
        <div class="price">
          R$ <span>3.174,20</span>
        </div>
        <div class="description">
          <h3>Dimensões do produto</h3>
          <ul>
            <li>Largura	--> 72,5 cm</li>
            <li>Altura --> 194 cm</li>
            <li>Profundidade --> 70,09 cm</li>
            <li>Capacidade líquida total --> 460 litros</li>
          </ul>
        </div>
        <button class="buy-btn">ADD AO CARRINHO</button>
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  data: () => {
		return {
			change: false,
			img: {},
			imgPrincipal: require('../../assets/geladeiraFechada.png'),
			geAberta: require('../../assets/geAbertaVazia.png'),
			geProduct: require('../../assets/geAbertaProdutos.png')
    }
  },
	methods: {
		imgPrincipalChange() {
			this.img = this.imgPrincipal
			return this.change = true
		},
		geOpenChangeImg() {
			this.img = this.geAberta
			return this.change = true
		},
		geOpenProductChangeImg() {
			this.img = this.geProduct
			return this.change = true
		}
	}
}
</script>

<style lang="scss">
$color-primary: #4c4c4c;
$color-secondary: #a6a6a6;
$color-highlight: #ff3f40;
$color-hoverbuybtn: #EF5350;

img {
	max-width: 100%;
  filter: drop-shadow(1px 1px 3px $color-secondary);
}

.product {
	display: grid;
	grid-template-columns: 0.9fr 1fr;
	margin: auto;
	padding: 2.5em 0;
	width: 650px;
	background-color: white;
	border-radius: 5px;
}

.product__photo {
	position: relative;
}

.photo-container {
	position: absolute;
	left: -2.5em;
	display: grid;
	grid-template-rows: 1fr;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
	border-radius: 6px 6px 0 0;
	background-color: #FAFAFA;
	background: radial-gradient(#F5F5F5, #BDBDBD);

	.controls {
		display: flex;
		justify-content: space-between;
		padding: 0.8em;
		color: #fff;

		img {
			cursor: pointer;
		}
	}

    .img-principal {
      position: absolute;
      left: -3.5em;
      top: 4em;
      max-width: 125%;
      filter: saturate(150%) contrast(120%) hue-rotate(10deg)
      drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
    }
 }

.photo-album {
	padding: 0.7em 1em;
	border-radius: 0 0 6px 6px;
	background-color: #fff;
	display: flex;
	justify-content: space-around;

	button {
		float: left;
		width: 55px;
		height: 55px;
		padding: 7px;
    outline: none;
		border-radius: 3px;

		&:hover {
			border: 1px solid $color-secondary;
		}
		&:active {
		transform: scale(0.97);
	}
	}
}

.product__info {
	padding: 0.8em 0;
}

.title {
	h1 {
		margin-bottom: 0.1em;
		color: $color-primary;
		font-size: 1.5em;
		font-weight: 900;
	}

	span {
		font-size: 0.7em;
		color: $color-secondary;
	}
}

.price {
	margin: 1.5em 0;
	color: $color-highlight;
	font-size: 1.2em;

	span {
		padding-left: 0.15em;
		font-size: 2.9em;
	}
}

.variant {
	overflow: auto;

	h3 {
		margin-bottom: 1.1em;
	}

	li {
		float: left;
		width: 35px;
		height: 35px;
		padding: 3px;
		border: 1px solid transparent;
		border-radius: 3px;
		cursor: pointer;
    list-style: none;

		&:first-child,
		&:hover {
			border: 1px solid $color-secondary;
		}
	}

	li:not(:first-child) {
		margin-left: 0.1em;
	}
}

.description {
	clear: left;
	margin: 2em 0;

	h3 {
		margin-bottom: 1em;
	}

	ul {
		font-size: 0.8em;
		list-style: disc;
		margin-left: 1em;
	}

	li {
		text-indent: -0.6em;
		margin-bottom: 0.5em;
	}
}

.buy-btn {
	padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	font-size: 0.8em;
	font-weight: 700;
	letter-spacing: 1.3px;
	color: #fff;
	background-color: $color-highlight;
	box-shadow: 2px 2px 25px -7px $color-primary;
  outline: none;

	&:active {
		transform: scale(0.97);
	}
}
.buy-btn:hover {
  background-color: $color-hoverbuybtn;
}
</style>