
import { bohrMagnetonDependencies } from "mathjs";
import React from "react";



function Article({title, date = "January 1, 1970", preview, minutes}){
    const myNum = Math.ceil(minutes);
    const numCups = Math.floor(myNum/5);
    const numBents = Math.ceil(myNum/10);
    const cup = "☕️"
    const cups = cup.repeat(numCups);
    const bento = "🍱"
    const bentos = bento.repeat(numBents)

    function cupss(numCups){
        if(numCups<30){
            return cups;
        }else{
            return bentos;
        }
    }


    return(
        <article>
            <h3>{title}</h3>
            <small>{date} {cupss()} {parseInt(myNum)} min read</small>
            <p>{preview}</p>
        </article>
    )




}

export default Article;