function last_button(){
    const bring_inner = [];
    const rec_inner = [];
    bring_inner = localStorage.getItem("bring_inner_cloth");x
    const bring_tops = localStorage.getItem("bring_tops_cloth");
    const bring_outer = localStorage.getItem("bring_outer_cloth");
    const bring_onepiece = localStorage.getItem("bring_onepiece_cloth");
    const bring_pants = localStorage.getItem("bring_pants_cloth");
    const bring_skirt = localStorage.getItem('bring_skirt_cloth');

    for(var i = 0;bring_inner.length;i+=2){
        if(bring_inner[i+1] <= 10 || bring_inner[i + 2] >= 10){
            rec_inner = bring_inner[i];
            localStorage.setItem("rec_inner",rec_inner);
        }
    }
}