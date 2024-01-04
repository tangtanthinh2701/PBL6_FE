import { defineStore } from "pinia";
import {ref} from "vue";
import {useLocalStorage} from "@vueuse/core";

export const useUserStore = defineStore('user', () => {
    const user = ref(
        useLocalStorage('vueUseUser', {
            id: '',
            token: '',
            name: '',
            email: '',
            password: '',
            address: '',
            DOB: '',
            phone_number: '',
            avatar: '',
            position: '',
            expired: '',
            role: '',
            deviceToken: '',
            manager: false,
            owner_department_id: 0,
        })
    )

    function logout() {
        user.value.id = ''
        user.value.token = ''
        user.value.name = ''
        user.value.email = ''
        user.value.password = ''
        user.value.address = ''
        user.value.DOB = ''
        user.value.avatar = ''
        user.value.position = ''
        user.value.phone_number = ''
        user.value.expired = ''
        user.value.role = ''
        user.value.deviceToken = ''
        user.value.manager = false
        user.value.owner_department_id = 0;
    }

    function isExpired(){
        if(user.value.token){
            return Date.now() > Date.parse(user.value.expired);
        }
        return false
    }

    return {user, logout, isExpired}
})