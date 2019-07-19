 function shuffle_list(list){
    let index = list.length
    while(index > 0) {
        let new_index = Math.floor(Math.random() * index)  
        index --;
        let temp_list =  list[index];
        list[index] = list[new_index];
        list[new_index] = temp_list;
    }
    return list;
}
module.exports ={
     set_friend: async (friends) => {
        let shuffled_list = shuffle_list(friends)
        let last_friend = shuffled_list[0]
    
        let guest_has_friend = []
    
        for(let i = 0; i < shuffled_list.length; ++i){//0
            guest = shuffled_list[i]
            friend = i == [shuffled_list.length-1] ? last_friend : shuffled_list[i+1]
            guest_has_friend[i] = {'guest': guest, 'friend': friend}
        }
        return guest_has_friend
    }
}
