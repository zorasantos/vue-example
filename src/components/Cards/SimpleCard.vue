<template>
  <div class="card">
    <img src="../../assets/tshirt.jpg" alt="Geladeira Frost Free">
    <h1>T Shirt</h1>
    <p class="price">$19.99</p>
    <p>Some text about the jeans..</p>
    <p><button>Add to Cart</button></p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #FFF;
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
.card button:active {
		transform: scale(0.99);
	}
</style>