import {useMemo} from "react";


export const useUsers = (usersData,  query) => {
    
    const searchedUsers = useMemo(() => {
        return usersData.filter(userData => 
            userData.user.first_name.toLowerCase().includes(query.toLowerCase()) 
                ||
            userData.user.second_name.toLowerCase().includes(query.toLowerCase())
                ||
            userData.user.position.toLowerCase().includes(query.toLowerCase())
             )
    }, [query, usersData])

    return searchedUsers;
}
