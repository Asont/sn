import * as axios from "axios";

// @ts-ignore
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "123d5b87-891c-47a5-804d-6478e65a9a54"
    }
});


export const usersAPI = {
    getUsers: (currentPage: any, pageSize: any) => {
// @ts-ignore
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            // @ts-ignore
            .then(response => {
                return response.data
            })
    },
    getProfile: (userId: any) => {
        //@ts-ignore
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(userId)
    },
    unfollowUser: (id: any) => {
        //@ts-ignore
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.unfollowUser(id)
    },
    followUser: (id: any) => {
        //@ts-ignore
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.followUser(id)
    }

}
export const profileAPI = {
    getProfile: (userId: any) => {
        //@ts-ignore
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    unfollowUser: (id: any) => {
        //@ts-ignore
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },
    followUser: (id: any) => {
        //@ts-ignore
        return instance.post(`follow/${id}`, {},).then(response => {
            return response.data.resultCode
        })
    },
    getStatus:(userId: any)=>{
        //@ts-ignore
    return instance.get(`/profile/status/${userId}`)
    },
    updateStatus: (status:string)=>{
        //@ts-ignore
        return instance.put(`/profile/status`, {status})
    }

}

export const authApi = {
    authMe () {
        return instance.get("auth/me")
    },
    login (email:string, password:string, rememberMe=false) {
        return instance.post("auth/login",{email, password, rememberMe})
    },
    loginOut () {
        return instance.delete("auth/login")
    },
}






