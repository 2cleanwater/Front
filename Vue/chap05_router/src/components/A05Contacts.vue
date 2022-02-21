<template>
    <div>
        <h4>A05 Contacts</h4>

        <div>
            <span v-for="item in contacts" :key="item.no">
                <router-link :to="'/A05ContactView/' + item.no">{{item.name}}</router-link> | 
            </span>
        </div>
    </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
    data: function () {
        return {
            contacts: contactlist.contacts,
        };
    },
};
</script>
