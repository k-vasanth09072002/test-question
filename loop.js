loop1:for(let i=0;i<5;i++){
    for(let j=0;j<6;j++){
        if(j==3){
            break loop1;

        }
        console.log(i,j);
    }
}