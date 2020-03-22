<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">{{current.meta.hasOwnProperty('pageTitle') ?
                        current.meta.pageTitle : current.name}}</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link :to="{name: 'Dashboard'}">
                                <i class="fas fa-tachometer-alt"></i>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item" v-for="bread in current.matched">
                            <router-link v-if="bread.parent" :to="{name: bread.name}">{{bread.name}}</router-link>
                            <span v-else>{{bread.name}}</span>
                        </li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                current: this.$router.history.current
            }
        }
    }
</script>

<style scoped>

</style>
