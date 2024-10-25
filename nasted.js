 const collage = {
    name: 'vnc',
    address : 'mirpur dhaka',
    class : ['11','12' ],
 eventName : ['21 february','bijoy dibosh','science fair','reception of freshers'],
 unique:{
    color : 'blue',
    dressColor : {
        boysDress : ['white shart','black pant'],
        girlsDress : ['white dress' , 'blue scarp'],
        child :{
            dress : 'blue',
            shoo : 'black',
        }
    }

 }
 }

//  console.log(collage);

collage.unique.dressColor.boysDress[0]= 'black shirt';
console.log(collage.unique.dressColor.child.dress);
console.log(collage.unique.dressColor.boysDress);

delete collage.eventName ;
console.log(collage);