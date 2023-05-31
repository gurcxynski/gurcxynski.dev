import Layout from "@/components/layout";
import Head from "next/head";
import { useState } from "react";

type Field = "X" | "O" | " "

export default function TicTacToe(){
    return(
        <Layout>
           <Head>
            <title> Tic Tac Toe </title>
            </Head> 
            <section>
            <Table/>
            </section>
        </Layout>
    )
}

function Square({ value } : { value? : Field }) {
    if (!value) value = "X"
    const [field, set] = useState(value)

    function onClick(e : any){
        set(field === "O" ? "X" : "O")
        return 
    }

    return (
      <button className="square" onClick={onClick}>
        {field}
      </button>
    );


  }

function Table(){
    return(
        <>
        <div><Square/>
        <Square/>
        <Square/></div>
        <div><Square/>
        <Square/>
        <Square/></div><div><Square/>
        <Square/>
        <Square/></div>
        </>
    )
}
