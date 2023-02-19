import * as chessLib from './chess-new'
import * as chess960Lib from './chess960.js'
import * as ai from './ai.js'
import { PIECES_SVG, AVAILABLE_MOVE } from './pieces.js'

const { widget } = figma
const { Frame, AutoLayout, SVG, Text, useSyncedState, usePropertyMenu, useEffect, waitForTask, Image, Rectangle } = widget

interface Move {
  from: string,
  to: string,
  promotion?: string
}

function Chess() {
  const [minigame, setMinigame] = widget.useSyncedState<boolean>("minigame", true)
  const newBoardFen = (): string => {
    const board = play960 ? new chess960Lib.Chess() : new chessLib.Chess({minigame})
    return board.fen()
  }

  const [play960, setPlay960] = widget.useSyncedState<boolean>("play960", false)
  const [boardFen, setBoardFen] = widget.useSyncedState<string>("boardFen", newBoardFen())
  // Stores a selected square in algebraic notation.
  const [selected, setSelected] = widget.useSyncedState<string>("selected", null)
  const [availableMoves, setAvailableMoves] = widget.useSyncedState<chessLib.Move[]>("availableMoves", null)
  const [showMoves, setShowMoves] = widget.useSyncedState<boolean>("showMoves", true)
  const [computer, setComputer] = widget.useSyncedState<boolean>("computer", false)
  const [promoMove, setPromoMove] = widget.useSyncedState<Move>("promoMove", null)

  const [playerWhite, setPlayerWhite] = useSyncedState<string>('playerWhite', "waiting for player")
  const [playerBlack, setPlayerBlack] = useSyncedState<string>('playerBlack', "waiting for player")
  const [playerPhotoWhite, setPlayerPhotoWhite] = useSyncedState<string | null>('playerPhotoWhite', null)
  const [playerPhotoBlack, setPlayerPhotoBlack] = useSyncedState<string | null>('playerPhotoBlack', null)

  const resetPlayers = () => {
    setPlayerWhite('waiting for player');
    setPlayerBlack('waiting for player');
    setPlayerPhotoWhite(null);
    setPlayerPhotoBlack(null);
  }

  const resetBoard = (m: boolean, fen: string, c: boolean) => {
    chess.setMinigame(m)
    setBoardFen(fen)
    setMinigame(m)
    setSelected(null)
    setAvailableMoves(null)
    resetPlayers()
    setPromoMove(null)
    setComputer(c)
  }


  let chess = new chessLib.Chess({fen: boardFen, minigame})
  let board: any[][] = chess.board()

  const promoPieces: string[] = ['q', 'r', 'b', 'n']

  const propertyMenu: any[] = [
    {
      tooltip: 'PvP',
      propertyName: 'reset-pvp',
      itemType: 'action',
    },
    {
      tooltip: 'BvP',
      propertyName: 'reset-pvb',
      itemType: 'action',
    },
    {
      tooltip: 'NvP',
      propertyName: 'reset-pvn',
      itemType: 'action',
    },
    {
      tooltip: 'RvP',
      propertyName: 'reset-pvr',
      itemType: 'action',
    },
    {
      tooltip: 'KvP',
      propertyName: 'reset-pvk',
      itemType: 'action',
    },
    {
      tooltip: 'QvP',
      propertyName: 'reset-pvq',
      itemType: 'action',
    },
    {
      tooltip: 'New Game (2 Players)',
      propertyName: 'reset',
      itemType: 'action',
    }, /*
    {
      tooltip: 'New Chess960 Game (2 Players)',
      propertyName: 'reset960',
      itemType: 'action',
    }, */
    {
      tooltip: 'New Game (Against AI)',
      propertyName: 'reset-computer',
      itemType: 'action',
    },
    {
      tooltip: `${!showMoves ? 'Show' : 'Hide'} Moves`,
      propertyName: 'toggle',
      itemType: 'action',
    },
  ]
  usePropertyMenu(
    propertyMenu,
    async ({ propertyName }) => {
      if (propertyName === 'reset-pvp') {
        resetBoard(true, '8/pppppppp/8/8/8/8/PPPPPPPP/8 w - - 0 1', false)
      } else if (propertyName === 'reset-pvb') {
        resetBoard(true, '2b2b2/8/8/8/8/8/PPPPPPPP/8 w - - 0 1', false)
      } else if (propertyName === 'reset-pvr') {
        resetBoard(true, 'r6r/8/8/8/8/8/PPPPPPPP/8 w - - 0 1', false)
      } else if (propertyName === 'reset-pvn') {
        resetBoard(true, '1n4n1/8/8/8/8/8/PPPPPPPP/8 w - - 0 1', false)
      } else if (propertyName === 'reset-pvk') {
        resetBoard(true, '4k3/8/8/8/8/8/PPPPPPPP/8 w - - 0 1', false)
      } else if (propertyName === 'reset-pvq') {
        resetBoard(true, '3q4/8/8/8/8/8/PPPPPPPP/8 w - - 0 1', false)
      } else if (propertyName === 'reset') {
        resetBoard(false, newBoardFen(), false)
      } else if (propertyName === 'reset960') {
        chess = chess960Lib.Chess(generate960StartFen())
        board = chess.board()
        resetBoard(false, chess.fen(), false)
      } else if (propertyName === 'reset-computer') {
        resetBoard(false, newBoardFen(), true)
      } else if (propertyName === 'toggle') {
        (selected && !showMoves) ?
          setAvailableMoves(chess.moves({ returnSquares: true, square: selected as chessLib.Square })) :
          setAvailableMoves(null)
        setShowMoves(!showMoves)
      }
    },
  )

  const generate960StartFen = (): string => {
    // one light square and one dark squared bishop
    // one rook on either side of the king

    var rank = new Array(8)
    // randomizer
    const d = (num: number): number => { return Math.floor(Math.random() * ++num) }
    const emptySquares = () => {
      let arr = []
      for (let i = 0; i < 8; i++) if (rank[i] == undefined) arr.push(i)
      return arr
    }
    // place one bishop on any black square
    rank[d(2) * 2] = "b"
    // place the other bishop on any white square
    rank[d(2) * 2 + 1] = "b"
    // place the queen on any empty square
    rank[emptySquares()[d(5)]] = "q"
    // place one knight on any empty square
    rank[emptySquares()[d(4)]] = "n"
    // place the other knight on any empty square
    rank[emptySquares()[d(3)]] = "n"
    // place the rooks and the king on the squares left, king in the middle
    for (var x = 1; x <= 3; x++) rank[emptySquares()[0]] = x==2 ? "k" : "r"

    // return X-FEN format accpeted by the chess960.js lib accepts
    // unfortunately there is no standard
    let fen = ""
    for (let i = 0; i < rank.length; i++) { fen += rank[i] }
    fen += "/pppppppp/8/8/8/8/PPPPPPPP/"
    for (let i = 0; i < rank.length; i++) { fen += rank[i].toUpperCase() }
    fen += " w KQkq - 0 1"
    return fen
  }

  const endGameCondition: string = (() => {
    if(minigame){
      if(chess.isInsufficientMaterial()) {
        return `${chess.turn() == 'w' ? 'Black' : 'White'} wins.`
      } else {
        return ''
      }
    } else {
      if (chess.isCheckmate()) {
        return `Checkmate! ${chess.turn() == 'w' ? 'Black' : 'White'} wins.`
      } else if (chess.isDraw()) {
        return 'The game is a draw.'
      } else if (chess.isStalemate()) {
        return 'The game is a stalemate.'
      } else if (chess.isThreefoldRepetition()) {
        return 'The game is a draw by repetition.'
      } else {
        return ''
      }
    }
  })()

  const promoMenu = (color: string) => {
    const active = (promoMove !== null) && (chess.turn() === color)
    return (
      <AutoLayout
      direction={"horizontal"}
      horizontalAlignItems={"center"}
      verticalAlignItems={"center"}
      height={"hug-contents"}
      width={"hug-contents"}
      key={`promo:${color}`}
      >
        { promoPieces.map(piece => {
          return <AutoLayout
            opacity={active ? 1 : 0}
            onClick={active ? () => { 
              applyMove({ from: promoMove.from, to: promoMove.to, promotion: piece })
              setPromoMove(null)
            } : null }
            key={`promo:${color}:${piece}`}
          >
            <SVG
              src={PIECES_SVG[color][piece]()}
              height={50}
              width={50}
            />
          </AutoLayout>
        }) }
      </AutoLayout>
    )
  }

  // core logic for applying a move to the game
  // called when selecting a normal move and also 
  // when promoting
  const applyMove = (move: Move) => {
    try {
      chess.move(move, {strict: false})
      setBoardFen(chess.fen())
      setSelected(null)
      setAvailableMoves(null)

      if (computer) {
        // Playing against AI.
        const notification = figma.notify("Computing move...")
        waitForTask(new Promise<void>(resolve => {
          setTimeout(() => {
            const move = ai.getBestMove(chess, chess.turn(), 0)[0];

            if (chess.move(move)) {
              setBoardFen(chess.fen())
              setSelected(null)
              setAvailableMoves(null)
              notification.cancel()
            } else {
              // Must be end of game!
              //figma.notify("End of game?")
            }
            resolve()
          }, 50);
        }))
      }
    } catch(e) {
      if(e.message === 'No moves') {
        figma.notify(`No legal moves available to ${chess.turn() === 'w' ? 'black' : 'white'} 😱`, { timeout: 3000 })
        setBoardFen(chess.fen())
      } else if (chess.inCheck()) {
        figma.notify("You're in check! 😬", { timeout: 2000 })
      } else {
        figma.notify("Legal moves only, please! 😊", { timeout: 2000 })
      }
      setSelected(null)
      setAvailableMoves(null)
    }
  }

  const isPromoMove = (move: Move) => {
    const piece = chess.get(move.from)
    if ((piece === null) || (piece?.type !== 'p') || (piece?.color !== chess.turn())) {
      return false
    } else if (piece?.color === 'w') {
      return move.to.charAt(1) === '8'
    } else {
      return move.to.charAt(1) === '1'
    }
  }

  const select = ({ row, column }) => {
    if (endGameCondition.length > 0) {
      return
    }

    const position = indexToPositionString(row, column)
    if (selected && selected === position) {
      setSelected(null)
      setAvailableMoves(null)
    } else if (selected) {
      const move = { from: selected, to: position }
      // check if we are in a promo situation
      if (isPromoMove(move)) {
        // save the pending promo move and prompt the user to select the piece
        // to promote to
        setPromoMove(move)
        figma.notify("Promote your pawn!", { timeout: 2000 })
      } else {
        applyMove(move)  
      }
    } else {
      if (board[row][column] && board[row][column].color === chess.turn()) {
        // Only select non-empty cells of the correct color.
        setSelected(position)
        const moves = chess.moves({ returnSquares: true, square: position as chessLib.Square })
        if(!moves.length) {
          figma.notify(`This piece is currently blocked`, { timeout: 2000 })
        }
        // only show available moves in the mini games
        if(showMoves) {
          setAvailableMoves(moves)
        }

        if (figma.currentUser) {
          if(chess.turn() === 'w') {
            setPlayerWhite(figma.currentUser.name)
            setPlayerPhotoWhite(figma.currentUser.photoUrl)
          } else {
            setPlayerBlack(figma.currentUser.name)
            setPlayerPhotoBlack(figma.currentUser.photoUrl)
          }
        } else {
          figma.notify("Please login to figma")
        }  
      } else if (board[row][column]) {
        const color = chess.turn()
        figma.notify(`It's currently ${color === 'b' ? 'black' : 'white'}'s turn`, { timeout: 2000 })
      }
    }
  }

  // Converts an index into the 2D board array to algebraic notation.
  const indexToPositionString = (row, column): string => {
    // Board is represented as a 2D array, where [0][0] is a8.
    //
    // `a` is 97
    return String.fromCharCode(97 + column) + (8 - row)
  }

  // const boards = [];
  const boards = (computer ? ['w'] : ['w', 'b']).map(color => {
    const flipped = 'b' === color
    let flippedBoard
    if (flipped) {
      flippedBoard = board.slice().reverse()
    } else {
      flippedBoard = board
    }
    const photo = color === 'b' ? playerPhotoBlack : playerPhotoWhite;
    const name = color === 'b'? playerBlack : playerWhite;

    return <AutoLayout
      direction={"vertical"}
      horizontalAlignItems={"center"}
      verticalAlignItems={"center"}
      height={"hug-contents"}
      width={"hug-contents"}
      key={`wrapper:${color}`}
    >
      { promoMenu(color) }
      <AutoLayout
        direction={"vertical"}
        horizontalAlignItems={"center"}
        verticalAlignItems={"center"}
        height={"hug-contents"}
        width={"hug-contents"}
        key={`color:${color}`}
        stroke={"#000000"}
        strokeWidth={(chess.turn() === color ? 5 : 0)}
      >
        {flippedBoard.map((row, rowIndex) => {
          if (flipped) {
            rowIndex = 7 - rowIndex
          }
          return <AutoLayout
            direction={"horizontal"}
            horizontalAlignItems={"center"}
            verticalAlignItems={"center"}
            height={"hug-contents"}
            width={"hug-contents"}
            key={`row:${rowIndex}`}
          >
            {row.map((cell: { type: string, color: string }, columnIndex) => (
              <AutoLayout
                fill={
                  selected && selected === indexToPositionString(rowIndex, columnIndex) ? "#9890EC" : (rowIndex + columnIndex) % 2 == 0 ? "#E8EDF9" : "#B7C0D8"
                }
                // Cells are only clickable if they contain a piece or we've already
                // selected a piece.
                onClick={cell || selected ? () => {
                  select({
                    row: rowIndex,
                    column: columnIndex
                  });
                } : null}
                key={`row:${rowIndex},col:${columnIndex}`}
              >
                {cell ?
                  <SVG
                    src={PIECES_SVG[cell.color][cell.type](availableMoves && availableMoves.indexOf(indexToPositionString(rowIndex, columnIndex)) !== -1)}
                    height={100}
                    width={100}
                  /> :
                  availableMoves && availableMoves.indexOf(indexToPositionString(rowIndex, columnIndex)) !== -1 ?
                  <SVG
                  src={AVAILABLE_MOVE}
                  height={100}
                  width={100}
                  /> :
                    <Frame
                      width={100}
                      height={100}
                    />}
              </AutoLayout>
            ))}
          </AutoLayout>
        })}
      </AutoLayout>
      <AutoLayout
        direction="horizontal"
        horizontalAlignItems="start"
        verticalAlignItems="center"
        height="hug-contents"
        padding={10}
      >
      {photo ? (
          <Image cornerRadius={60} width={60} height={60} src={photo} />
        ) : (
          <Rectangle cornerRadius={60} width={60} height={60} fill="#B7C0D8" />
        )}
          <AutoLayout
            direction="horizontal"
            horizontalAlignItems="center"
            verticalAlignItems="center"
            height="hug-contents"
            padding={10}
          >
            <Text fontSize={30}>{name}</Text>
          </AutoLayout>
          </AutoLayout>
    </AutoLayout>
  })

  return (
    <AutoLayout
      direction={"vertical"}
      horizontalAlignItems={"center"}
      verticalAlignItems={"center"}
      height={"hug-contents"}
      width={"hug-contents"}
      padding={10}
    >
      <AutoLayout
        direction={"horizontal"}
        horizontalAlignItems={"center"}
        verticalAlignItems={"center"}
        height={"hug-contents"}
        width={"hug-contents"}
        cornerRadius={0}
        spacing={120}
      >
        {boards}
      </AutoLayout>

      {endGameCondition.length > 0 && (
        <AutoLayout
          width={"fill-parent"}
          height={200}
          verticalAlignItems={"end"}
        >
          <AutoLayout
            direction={"horizontal"}
            horizontalAlignItems={"center"}
            verticalAlignItems={"center"}
            width={"fill-parent"}
            padding={40}
            cornerRadius={30}
            spacing={120}
            fill={"#4ECB71"}
          >
            <Text
              fontSize={70}
              fill={"#FFFFFF"}
            >
              {endGameCondition}
            </Text>
          </AutoLayout>
        </AutoLayout>
      )}
    </AutoLayout>
  )
}
widget.register(Chess)
