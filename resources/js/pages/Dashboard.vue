<template>
    <page-component>
        <div class="row">
            <div class="col-sm-12">
                <card-component :load="false">
                    <div class="mb-5">
                        <h5 class="card-title text-bold">Boas Vindas</h5>
                    </div>

                    <p>Seja bem vindo!</p>
                </card-component>
            </div>
        </div>
    </page-component>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>
