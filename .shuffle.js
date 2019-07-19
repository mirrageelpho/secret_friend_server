const friends = [
    {'id':'0', 'name':'JP', 'email':'jp@teste.com'},
    {'id':'1', 'name':'Vitória', 'email':'vic@teste.com'}, 
    {'id':'2', 'name':'BamBam', 'email':'BamBam@teste.com'}, 
    {'id':'3', 'name':'Monaliza', 'email':'Monaliza@teste.com'}, 
    {'id':'4', 'name':'Aécio', 'email':'aecio@teste.com'}, 
    {'id':'5', 'name':'bia', 'email':'bia@teste.com'}, 
    {'id':'6', 'name':'duda', 'email':'duda@teste.com'}, 
    {'id':'7', 'name':'lei', 'email':'lei@teste.com'}, 
    {'id':'8', 'name':'kuik', 'email':'kuik@teste.com'},
    {'id':'9', 'name':'amanda', 'email':'amanda@teste.com'}
]

 function shufle_list(list){
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

function set_friend(){

    let peaple_list = shufle_list(friends)
    
    let last_friend = peaple_list[0]

    let guest_has_friend = []

    for(let i = 0; i < peaple_list.length; ++i){//0
        guest = peaple_list[i]
        friend = i == [peaple_list.length-1] ? last_friend : peaple_list[i+1]
        guest_has_friend[i] = {'guest': guest, 'friend': friend}
    }

    return guest_has_friend
}
console.log(friends)
console.log('----------------Sorteio--------------')
const friendship_list = set_friend()
friendship_list.map(data=>{
    console.log(`Guest: ${data.guest.name} Friend: ${data.friend.name}`)
})