import Layout from "@/components/layout";
import Head from "next/head";
import { useContext, useState, createContext, ReactNode } from "react";
import utilStyles from '../../styles/utils.module.css';

type Field = "X" | "O" | "_"

type Status = "DRAW" | "X WON" | "O WON" | "RUNNING"

const FieldsContext = createContext(getEmptyBoard())

export default function TicTacToe(){
  const [status, setStatus] = useState("RUNNING" as Status)
  const [player, setPlayer] = useState("X" as "X" | "O")
  const [fields, setFields] = useState(getEmptyBoard())

  function ResetState(){
    setFields(getEmptyBoard())
    setStatus("RUNNING")
    setPlayer("X")
  }

  function HandleClick(at : number){
    if (status !== "RUNNING" || fields[at] !== "_") return
    let newBoard = fields.map((field, index) => {
      if (at === index){
        return player
      }
      return field
    })
    setFields(newBoard)
    setStatus(CheckStatus(newBoard))
    setPlayer(player === "X" ? "O" : "X")
  }

  function CheckStatus(board : Field[]) : Status {
    for (let line of lines){
      let v = board[line[0]]
      if (v === board[line[1]] && v === board[line[2]] && v !== "_"){
        return `${v} WON`
      }
    }
    for (let field of board){
      if (field === "_") return "RUNNING"
    }
    return "DRAW"
  }
    return(
        <Layout>
           <Head>
            <title> Tic Tac Toe </title>
            </Head> 
            <h1 className={utilStyles.headingXl}> Tic Tac Toe </h1>
            <FieldsContext.Provider value = {fields}>
            <Table handler={HandleClick} resetButton={<button onClick={ResetState} className={utilStyles.reset}> <b>Reset board</b> </button>} />
            </FieldsContext.Provider>
            <p>{status}</p>
        </Layout>
    )

}

function Square({ index, callback } : { index : number, callback(index : number) : void}) {

  var field = useContext(FieldsContext)[index]
    function onClick(){
        callback(index)
    }

    return (
      <button className={utilStyles.square} onClick={onClick}>
        <b>{field.replace("_", "‎ ")}</b>
      </button>
    );
  }

function Table({ resetButton, handler } : {resetButton : ReactNode, handler (index : number) : void}){
    return(
      <div className = {utilStyles.board}>
        <Square index={0} callback = {handler} />
        <Square index={1} callback = {handler} />
        <Square index={2} callback = {handler} /><br />
        <Square index={3} callback = {handler} />
        <Square index={4} callback = {handler} />
        <Square index={5} callback = {handler} /><br />
        <Square index={6} callback = {handler} />
        <Square index={7} callback = {handler} />
        <Square index={8} callback = {handler} />
        {resetButton}
        </div>
        )
}
function getEmptyBoard() : Field[]{
  return ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
}

const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]