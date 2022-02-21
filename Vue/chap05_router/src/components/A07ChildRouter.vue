<template>
    <div>
        <h4>A04 Contacts</h4>

        <div>
            <!-- 부모의 패스가 기본적으로 와야 한다 --> 
            <router-link to="/A07ChildRouter">INFO</router-link> | 
            <router-link to="/A07ChildRouter/way">WAY</router-link> | 
            <span v-for="item in contacts" :key="item.no">
                <router-link :to="'/A07ChildRouter/view/' + item.no">{{item.name}}</router-link> | 
            </span>
        </div>
        <br />

        <!-- 하위 컴퍼넌트가 표시될 영역을 지정한다 -->
        <div>
            <router-view></router-view>
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

<style>
</style>