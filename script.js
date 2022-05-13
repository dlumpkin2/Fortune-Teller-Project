$("button").click(function() {
    let name=$(".question1").val();
  console.log(name);
    let weeks=$(".question2").val;
    let soda=$(".question3").val();
 let a= "my name is "+ name + " "+ weeks + " " +soda;
    let prediction="my name is "+name+" and in the next 30 years, i will drink "+(weeks*52*30)+ " sprites";
      $(".prediction").append(prediction);
    
});