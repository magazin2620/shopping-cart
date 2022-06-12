<template>
  <div class="container">
    <div v-if="!isCheckingOut">
      <h3 class="mt-3">Shopping Cart</h3>
      <hr />
      <div v-for="item in collection.items" :key="item.id">
        <ItemView :item="item" @on-remove="onItemRemoved"></ItemView>
      </div>
      <button class="btn btn-primary mb-3" @click="checkout">Checkout</button>
    </div>
    <div v-if="isCheckingOut">
      <h2 class="mt-3">Check Out</h2>
      <hr />
      <CheckoutView :basket="collection"></CheckoutView>
      <button class="btn btn-secondary" @click="back">Back</button>
      <button class="btn btn-primary mx-3">Place Order</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { CartCollection } from '../CartItems';
import ItemView from './ItemView.vue';
import CheckoutView from './CheckoutView.vue';

@Options({
  props: {
    collection: CartCollection,
  },
  components: {
    ItemView,
    CheckoutView,
  },
})
export default class ShoppingCart extends Vue {
  collection!: CartCollection;
  isCheckingOut!: boolean;
  data() {
    return {
      isCheckingOut: false,
    };
  }

  onItemRemoved(id: number) {
    const index = this.collection.items.findIndex((item) => item.id === id);
    this.collection.items.splice(index, 1);
  }
  checkout() {
    this.isCheckingOut = true;
  }
  back() {
    this.isCheckingOut = false;
  }
}
</script>
