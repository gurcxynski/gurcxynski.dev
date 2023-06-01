import Layout from "@/components/layout";
import Head from "next/head";
import { useState } from "react";

var player : "X" | "O" = "X"

type Field = "X" | "O" | "_"

export default function TicTacToe(){
  const [fields, setFields] = useState(getEmptyBoard())

  function HandleClick(at : number) : Field{
    setFields(fields.map((field, index) => {
      if (at === index){
        return player
      }
      return field
    }))
    let set = player
    player = player === "X" ? "O" : "X"
    return set
  }

    return(
        <Layout>
           <Head>
            <title> Tic Tac Toe </title>
            </Head> 
            <section>
              <h1> Tic Tac Toe </h1>
            <Table handler={HandleClick}/>
            </section>
        </Layout>
    )


}

function Square({ index, callback } : { index : number, callback(index : number) : Field }) {
    const [field , setField] = useState("_" as Field)
    function onClick(){
        if (field === "_") setField(callback(index))
        return 
    }

    return (
      <button className="square" onClick={onClick}>
        {field}
      </button>
    );


  }

function Table({ handler } : {handler (index : number) : Field}){
    return(
      <>
        <div>
        <Square index={0} callback = {handler} />
        <Square index={1} callback = {handler} />
        <Square index={2} callback = {handler} /></div>
        <div>
        <Square index={4} callback = {handler} />
        <Square index={5} callback = {handler} />
        <Square index={6} callback = {handler} /></div>
        <div>
        <Square index={7} callback = {handler} />
        <Square index={8} callback = {handler} />
        <Square index={9} callback = {handler} /></div>
        </>
        )
}
function getEmptyBoard() : Field[]{
  return ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
}
