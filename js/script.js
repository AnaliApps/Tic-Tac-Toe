let game = (function(){
    let output = document.querySelector(".output");
    const closeModalButtons = document.querySelectorAll('[data-close-button');
    const overlay =document.getElementById("overlay")
    let playerone_score = document.querySelector("#playerone-score")
    let playertwo_score = document.querySelector("#playertwo-score")
    let GameBoard = ()=>{
        let rows = 3;
        let columns = 3;
        let board = [];
        let player1 = 0;
        let player2 = 0;
        let closeModal = (modal)=>{
                if(modal === null){
                  return
                }else{
                  modal.classList.remove("active");
                  overlay.classList.remove("active");
                }
        }
        let startGame = () =>{
            board.forEach((item,j)=>{
                item.forEach((i,index)=>{
                    let div = document.createElement("div");
                    div.setAttribute("class","card");
                    let li = document.createElement("li");
                    li.setAttribute("class",`${j} ${index}`)
                    li.innerText = i;
                    div.appendChild(li)
                    output.appendChild(div);
                })
            })
        }
        let openModal = (modal)=>{
            if(modal === null){
              return
            }else{
              modal.classList.add("active");
              overlay.classList.add("active");
            }
          }
        let getScore = () =>{
            return {player1,player2}
        }
        let setPlayerOneScore = ()=>player1++;
        let setPlayerTwoScore = () => player2++;
        let resetScore1= () => player1 = 0;
        let resetScore2= () => player2 = 0;
        let resetBoard =()=>{
            for(let i=0;i<rows;i++){
                board[i] = []
                for(let j=0;j<columns;j++){
                    board[i].push("0");
                }
            }
        } 
        const getBoard = ()=>board;
    
        const playerChoice = (i,j,value)=>{
            return getBoard()[i][j] = value;
        }
        return {resetScore1,resetScore2,closeModal,openModal,getBoard,playerChoice,resetBoard,getScore,setPlayerOneScore,setPlayerTwoScore,startGame}
    }
    
    let player = (name,mark) => {
        name,
        mark,
        getMark = () => mark;
        getName = () => name;
        return {getMark,getName}
    }
    let playerOne = player("PlayerOne","X");
    let playerTwo = player("PlayerTwo","O")
    let players = [playerOne,playerTwo]
    let activePlayer = players[0];
    let g = GameBoard();
    g.resetBoard();
    let winningCombination = ()=>{
        let playerOneScore = 0;
        let playerTwoScore = 0;
        playerone_score.innerText = `Player One: ${g.getScore().player1}`
        playertwo_score.innerText = `Player Two: ${g.getScore().player2}`
        let won = false;
       if((g.getBoard()[0][0]==="X"&&g.getBoard()[0][1] === "X" && g.getBoard()[0][2]==="X")||(g.getBoard()[1][0]==="X"&&g.getBoard()[1][1] === "X" && g.getBoard()[1][2]==="X")||(g.getBoard()[2][0]==="X"&&g.getBoard()[2][1] === "X" && g.getBoard()[2][2]==="X")||(g.getBoard()[0][0]==="X"&&g.getBoard()[1][0] === "X" && g.getBoard()[2][0]==="X")||(g.getBoard()[0][1]==="X"&&g.getBoard()[1][1] === "X" && g.getBoard()[2][1]==="X")||(g.getBoard()[0][2]==="X"&&g.getBoard()[1][2] === "X" && g.getBoard()[2][2]==="X")||(g.getBoard()[0][0]==="X"&&g.getBoard()[1][1] === "X" && g.getBoard()[2][2]==="X")||(g.getBoard()[2][0]==="X"&&g.getBoard()[1][1] === "X" && g.getBoard()[0][2]==="X")){
        playerOneScore++;
        g.setPlayerOneScore(playerOneScore)
        playerone_score.innerText = `Player One: ${g.getScore().player1}`
        won = true;
        if(g.getScore().player1===3){
            console.log("GameOver")
            const modal = document.querySelector(".gameOver-modal");
            const score = document.querySelector("#playerScore");
            score.innerText = `PlayerOne Won score : ${g.getScore().player1}`
            playerone_score.innerText = `Player One: ${g.getScore().player1}`
            g.openModal(modal);
            closeModalButtons.forEach(button =>{
                button.addEventListener("click",()=>{
                  const modal = button.closest(".gameOver-modal");
                  g.closeModal(modal);
                  location.reload()
                })
              })
              g.resetBoard()
              let card = document.querySelectorAll(".card");
              card.forEach(item=>{
                 item.children[0].removeAttribute("data-active")
                 item.children[0].textContent = "0"
              })
        }else{
            g.resetBoard()
             let card = document.querySelectorAll(".card");
             card.forEach(item=>{
                console.log(item.children[0].removeAttribute("data-active"))
                item.children[0].textContent = "0"
                item.children[0].style.color="red"
             })
        }
        
       }else if((g.getBoard()[0][0]==="O"&&g.getBoard()[0][1] === "O" && g.getBoard()[0][2]==="O")||(g.getBoard()[1][0]==="O"&&g.getBoard()[1][1] === "O" && g.getBoard()[1][2]==="O")||(g.getBoard()[2][0]==="O"&&g.getBoard()[2][1] === "O" && g.getBoard()[2][2]==="O")||(g.getBoard()[0][0]==="O"&&g.getBoard()[1][0] === "O" && g.getBoard()[2][0]==="O")||(g.getBoard()[0][1]==="O"&&g.getBoard()[1][1] === "O" && g.getBoard()[2][1]==="O")||(g.getBoard()[0][2]==="O"&&g.getBoard()[1][2] === "O" && g.getBoard()[2][2]==="O")||(g.getBoard()[0][0]==="O"&&g.getBoard()[1][1] === "O" && g.getBoard()[2][2]==="O")||(g.getBoard()[2][0]==="O"&&g.getBoard()[1][1] === "O" && g.getBoard()[0][2]==="O")){
        playerTwoScore++;
        g.setPlayerTwoScore(playerTwoScore);
        playertwo_score.innerText = `Player Two: ${g.getScore().player2}`
        won = true
        if(g.getScore().player2===3){
            const modal = document.querySelector(".gameOver-modal");
            const score = document.querySelector("#playerScore");
            score.innerText = `PlayerTwo Won Score: ${g.getScore().player2}`
            g.openModal(modal);
            closeModalButtons.forEach(button =>{
                button.addEventListener("click",()=>{
                  const modal = button.closest(".gameOver-modal");
                  g.closeModal(modal);
                  location.reload()
                })
              })
              g.resetBoard()
             let card = document.querySelectorAll(".card");
             card.forEach(item=>{
                item.children[0].removeAttribute("data-active")
                item.children[0].textContent = "0"
             })
        }else{
            let card = document.querySelectorAll(".card");
             card.forEach(item=>{
                console.log(item.children[0].removeAttribute("data-active"))
                item.children[0].textContent = "0"
                item.children[0].style.color="red"
             })
            g.resetBoard()
        }
        
        
       }
       return won;
    }
    g.startGame()
        output.addEventListener("click",(e)=>{
            if(e.target.tagName ==="LI"&& !e.target.dataset.active){
                e.target.setAttribute("data-active","clicked");
                console.log(e.target.dataset.active)
                let row = parseInt(e.target.classList.value.split(" ")[0]);
                let col = parseInt(e.target.classList.value.split(" ")[1])
                console.log(row,col);
                g.getBoard()[row][col] = activePlayer.getMark()
                e.target.innerText = activePlayer.getMark();
                console.log(`activeplayer ${activePlayer.getMark()}`)
                winningCombination();
                let p = document.querySelector("#player");
                console.log(p)
                if(activePlayer === players[0]){
                    activePlayer = players[1]
                    p.innerText = `${activePlayer.getName()}'s turn`
                    
                }else{
                    activePlayer = players[0]
                    p.innerText = `${activePlayer.getName()}'s turn`;
                }
                e.target.style.color = "white";
                
               }   
    })
    })()
    
    