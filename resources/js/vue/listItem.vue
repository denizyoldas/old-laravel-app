<template>
<div class="item">
    <input 
        type="checkbox"
        @change="updateCheck()"
        v-model="item.completed">
        <span :class="[item.completed ? 'completed' : '', 'itemText']">{{ item.name }}</span>
        <button @click="removeItem()" class="trashcan">
            <font-awesome-icon icon="trash" />
        </button>
</div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        updateCheck() {
            axios.put('api/item/' + this.item.id, {
                item: this.item
            }).then(res => {
                if (res.status == 200) {
                    this.$emit('itemchanged');
                }
            }).catch(err => console.log);
        },
        removeItem() {
            axios.delete('api/item/' + this.item.id)
            .then(res => {
                if (res.status == 200) {
                    this.$emit('itemchanged');
                }
            }).catch(err => console.log);
        }
    }
}
</script>

<style scoped>
input {
    cursor: pointer;
}

.completed {
    text-decoration: line-through;
    color: #999999;
}

.itemText {
    width: 100%;
    margin-left: 20px;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.trashcan {
    background: #e6e6e6;
    border: none;
    color: #FF0000;
    outline: none;
    cursor: pointer;
}
</style>