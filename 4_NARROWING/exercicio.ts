function setReview (review: false | number | string | undefined) 
{
    const messagesReview: string [] = ["So bad", "Bad", "OK", "Good", "Excellent"];
    if (typeof review === "number" || typeof review === "boolean")
    {
        if (review === false)
        {   
            return "Not rated";
        }
        else
        {
         if (review <= 5 && review > 0)
            return messagesReview[review-1];
        else 
            return "Enter a valid review number";    
        }
    }
    else
       console.log("Internal error");
    
}

console.log(setReview(false));
console.log(setReview(1));
console.log(setReview(2));
console.log(setReview(3));
console.log(setReview(4));
console.log(setReview(5));
console.log(setReview(0));
console.log(setReview("teste"));


