(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // widget-src/chess960.js
  var require_chess960 = __commonJS({
    "widget-src/chess960.js"(exports) {
      var Chess4 = function(fen) {
        var BLACK2 = "b";
        var WHITE2 = "w";
        var EMPTY2 = -1;
        var PAWN2 = "p";
        var KNIGHT2 = "n";
        var BISHOP2 = "b";
        var ROOK2 = "r";
        var QUEEN2 = "q";
        var KING2 = "k";
        var SYMBOLS2 = "pnbrqkPNBRQK";
        var DEFAULT_POSITION2 = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
        var POSSIBLE_RESULTS = ["1-0", "0-1", "1/2-1/2", "*"];
        var PAWN_OFFSETS2 = {
          b: [16, 32, 17, 15],
          w: [-16, -32, -17, -15]
        };
        var PIECE_OFFSETS2 = {
          n: [-18, -33, -31, -14, 18, 33, 31, 14],
          b: [-17, -15, 17, 15],
          r: [-16, 1, 16, -1],
          q: [-17, -16, -15, 1, 17, 16, 15, -1],
          k: [-17, -16, -15, 1, 17, 16, 15, -1]
        };
        var ATTACKS2 = [
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          24,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          2,
          24,
          2,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          53,
          56,
          53,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          24,
          24,
          24,
          24,
          24,
          24,
          56,
          0,
          56,
          24,
          24,
          24,
          24,
          24,
          24,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          53,
          56,
          53,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          2,
          24,
          2,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          24,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          0,
          0,
          20
        ];
        var RAYS2 = [
          17,
          0,
          0,
          0,
          0,
          0,
          0,
          16,
          0,
          0,
          0,
          0,
          0,
          0,
          15,
          0,
          0,
          17,
          0,
          0,
          0,
          0,
          0,
          16,
          0,
          0,
          0,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          17,
          0,
          0,
          0,
          0,
          16,
          0,
          0,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          17,
          0,
          0,
          0,
          16,
          0,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          17,
          0,
          0,
          16,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          17,
          0,
          16,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          17,
          16,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          -16,
          -17,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          0,
          -16,
          0,
          -17,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          0,
          0,
          -16,
          0,
          0,
          -17,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          0,
          0,
          0,
          -16,
          0,
          0,
          0,
          -17,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          0,
          0,
          0,
          0,
          -16,
          0,
          0,
          0,
          0,
          -17,
          0,
          0,
          0,
          0,
          -15,
          0,
          0,
          0,
          0,
          0,
          -16,
          0,
          0,
          0,
          0,
          0,
          -17,
          0,
          0,
          -15,
          0,
          0,
          0,
          0,
          0,
          0,
          -16,
          0,
          0,
          0,
          0,
          0,
          0,
          -17
        ];
        var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };
        var FLAGS2 = {
          NORMAL: "n",
          CAPTURE: "c",
          BIG_PAWN: "b",
          EP_CAPTURE: "e",
          PROMOTION: "p",
          KSIDE_CASTLE: "k",
          QSIDE_CASTLE: "q"
        };
        var BITS2 = {
          NORMAL: 1,
          CAPTURE: 2,
          BIG_PAWN: 4,
          EP_CAPTURE: 8,
          PROMOTION: 16,
          KSIDE_CASTLE: 32,
          QSIDE_CASTLE: 64
        };
        var RANK_12 = 7;
        var RANK_22 = 6;
        var RANK_3 = 5;
        var RANK_4 = 4;
        var RANK_5 = 3;
        var RANK_6 = 2;
        var RANK_72 = 1;
        var RANK_82 = 0;
        var SQUARES = {
          a8: 0,
          b8: 1,
          c8: 2,
          d8: 3,
          e8: 4,
          f8: 5,
          g8: 6,
          h8: 7,
          a7: 16,
          b7: 17,
          c7: 18,
          d7: 19,
          e7: 20,
          f7: 21,
          g7: 22,
          h7: 23,
          a6: 32,
          b6: 33,
          c6: 34,
          d6: 35,
          e6: 36,
          f6: 37,
          g6: 38,
          h6: 39,
          a5: 48,
          b5: 49,
          c5: 50,
          d5: 51,
          e5: 52,
          f5: 53,
          g5: 54,
          h5: 55,
          a4: 64,
          b4: 65,
          c4: 66,
          d4: 67,
          e4: 68,
          f4: 69,
          g4: 70,
          h4: 71,
          a3: 80,
          b3: 81,
          c3: 82,
          d3: 83,
          e3: 84,
          f3: 85,
          g3: 86,
          h3: 87,
          a2: 96,
          b2: 97,
          c2: 98,
          d2: 99,
          e2: 100,
          f2: 101,
          g2: 102,
          h2: 103,
          a1: 112,
          b1: 113,
          c1: 114,
          d1: 115,
          e1: 116,
          f1: 117,
          g1: 118,
          h1: 119
        };
        var board = new Array(128);
        var kings = { w: EMPTY2, b: EMPTY2 };
        var rooks = { w: [], b: [] };
        var turn = WHITE2;
        var castling = { w: 0, b: 0 };
        var ep_square = EMPTY2;
        var half_moves = 0;
        var move_number = 1;
        var history = [];
        var header = {};
        if (typeof fen === "undefined") {
          load(DEFAULT_POSITION2);
        } else {
          load(fen);
        }
        function clear(keep_headers) {
          if (typeof keep_headers === "undefined") {
            keep_headers = false;
          }
          board = new Array(128);
          kings = { w: EMPTY2, b: EMPTY2 };
          turn = WHITE2;
          castling = { w: 0, b: 0 };
          ep_square = EMPTY2;
          half_moves = 0;
          move_number = 1;
          history = [];
          if (!keep_headers)
            header = {};
          update_setup(generate_fen());
        }
        function reset() {
          load(DEFAULT_POSITION2);
        }
        function load(fen2, keep_headers) {
          if (typeof keep_headers === "undefined") {
            keep_headers = false;
          }
          var tokens = fen2.split(/\s+/);
          var position = tokens[0];
          var square = 0;
          if (!validate_fen(fen2).valid) {
            return false;
          }
          clear(keep_headers);
          for (var i = 0; i < position.length; i++) {
            var piece = position.charAt(i);
            if (piece === "/") {
              square += 8;
            } else if (is_digit(piece)) {
              square += parseInt(piece, 10);
            } else {
              var color = piece < "a" ? WHITE2 : BLACK2;
              put({ type: piece.toLowerCase(), color }, algebraic2(square));
              square++;
            }
          }
          turn = tokens[1];
          rooks = { w: [], b: [] };
          if (tokens[2].indexOf("K") > -1) {
            castling.w |= BITS2.KSIDE_CASTLE;
            for (var sq = SQUARES.h1; sq >= SQUARES.c1; --sq) {
              if (is_rook(board[sq], WHITE2)) {
                rooks[WHITE2].push({ square: sq, flag: BITS2.KSIDE_CASTLE });
                break;
              }
            }
          }
          if (tokens[2].indexOf("Q") > -1) {
            castling.w |= BITS2.QSIDE_CASTLE;
            for (var sq = SQUARES.a1; sq <= SQUARES.g1; ++sq) {
              if (is_rook(board[sq], WHITE2)) {
                rooks[WHITE2].push({ square: sq, flag: BITS2.QSIDE_CASTLE });
                break;
              }
            }
          }
          var white_frc_columns = tokens[2].match(/[A-H]/g);
          var i, flag;
          if (white_frc_columns !== null) {
            for (i = 0; i < white_frc_columns.length; ++i) {
              var sq = SQUARES.a1 + (white_frc_columns[i].charCodeAt(0) - "A".charCodeAt(0));
              flag = sq < kings[WHITE2] ? BITS2.QSIDE_CASTLE : BITS2.KSIDE_CASTLE;
              castling.w |= flag;
              rooks[WHITE2].push({ square: sq, flag });
            }
          }
          if (tokens[2].indexOf("k") > -1) {
            castling.b |= BITS2.KSIDE_CASTLE;
            for (var sq = SQUARES.h8; sq >= SQUARES.c8; --sq) {
              if (is_rook(board[sq], BLACK2)) {
                rooks[BLACK2].push({ square: sq, flag: BITS2.KSIDE_CASTLE });
                break;
              }
            }
          }
          if (tokens[2].indexOf("q") > -1) {
            castling.b |= BITS2.QSIDE_CASTLE;
            for (var sq = SQUARES.a8; sq <= SQUARES.g8; ++sq) {
              if (is_rook(board[sq], BLACK2)) {
                rooks[BLACK2].push({ square: sq, flag: BITS2.QSIDE_CASTLE });
                break;
              }
            }
          }
          var black_frc_columns = tokens[2].match(/[a-h]/g);
          if (black_frc_columns !== null) {
            for (i = 0; i < black_frc_columns.length; ++i) {
              var sq = SQUARES.a8 + (black_frc_columns[i].charCodeAt(0) - "a".charCodeAt(0));
              flag = sq < kings[BLACK2] ? BITS2.QSIDE_CASTLE : BITS2.KSIDE_CASTLE;
              castling.b |= flag;
              rooks[BLACK2].push({ square: sq, flag });
            }
          }
          ep_square = tokens[3] === "-" ? EMPTY2 : SQUARES[tokens[3]];
          half_moves = parseInt(tokens[4], 10);
          move_number = parseInt(tokens[5], 10);
          update_setup(generate_fen());
          return true;
        }
        function validate_fen(fen2) {
          var errors = {
            0: "No errors.",
            1: "FEN string must contain six space-delimited fields.",
            2: "6th field (move number) must be a positive integer.",
            3: "5th field (half move counter) must be a non-negative integer.",
            4: "4th field (en-passant square) is invalid.",
            5: "3rd field (castling availability) is invalid.",
            6: "2nd field (side to move) is invalid.",
            7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
            8: "1st field (piece positions) is invalid [consecutive numbers].",
            9: "1st field (piece positions) is invalid [invalid piece].",
            10: "1st field (piece positions) is invalid [row too large].",
            11: "Illegal en-passant square"
          };
          var tokens = fen2.split(/\s+/);
          if (tokens.length !== 6) {
            return { valid: false, error_number: 1, error: errors[1] };
          }
          if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
            return { valid: false, error_number: 2, error: errors[2] };
          }
          if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
            return { valid: false, error_number: 3, error: errors[3] };
          }
          if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
            return { valid: false, error_number: 4, error: errors[4] };
          }
          if (!/^[C-HK]?[A-FQ]?[c-hk]?[a-fq]?$/.test(tokens[2]) && tokens[2] !== "-") {
            return { valid: false, error_number: 5, error: errors[5] };
          }
          if (!/^(w|b)$/.test(tokens[1])) {
            return { valid: false, error_number: 6, error: errors[6] };
          }
          var rows = tokens[0].split("/");
          if (rows.length !== 8) {
            return { valid: false, error_number: 7, error: errors[7] };
          }
          for (var i = 0; i < rows.length; i++) {
            var sum_fields = 0;
            var previous_was_number = false;
            for (var k = 0; k < rows[i].length; k++) {
              if (!isNaN(rows[i][k])) {
                if (previous_was_number) {
                  return { valid: false, error_number: 8, error: errors[8] };
                }
                sum_fields += parseInt(rows[i][k], 10);
                previous_was_number = true;
              } else {
                if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
                  return { valid: false, error_number: 9, error: errors[9] };
                }
                sum_fields += 1;
                previous_was_number = false;
              }
            }
            if (sum_fields !== 8) {
              return { valid: false, error_number: 10, error: errors[10] };
            }
          }
          if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
            return { valid: false, error_number: 11, error: errors[11] };
          }
          return { valid: true, error_number: 0, error: errors[0] };
        }
        function generate_fen() {
          var empty = 0;
          var fen2 = "";
          for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            if (board[i] == null) {
              empty++;
            } else {
              if (empty > 0) {
                fen2 += empty;
                empty = 0;
              }
              var color = board[i].color;
              var piece = board[i].type;
              fen2 += color === WHITE2 ? piece.toUpperCase() : piece.toLowerCase();
            }
            if (i + 1 & 136) {
              if (empty > 0) {
                fen2 += empty;
              }
              if (i !== SQUARES.h1) {
                fen2 += "/";
              }
              empty = 0;
              i += 8;
            }
          }
          var cflags = "";
          var sq;
          if (castling[WHITE2] & BITS2.KSIDE_CASTLE) {
            sq = search_rook(board, WHITE2, BITS2.KSIDE_CASTLE);
            if (is_outermost_rook(board, WHITE2, BITS2.KSIDE_CASTLE, sq)) {
              cflags += "K";
            } else {
              cflags += "ABCDEFGH".substring(file2(sq), file2(sq) + 1);
            }
          }
          if (castling[WHITE2] & BITS2.QSIDE_CASTLE) {
            sq = search_rook(board, WHITE2, BITS2.QSIDE_CASTLE);
            if (is_outermost_rook(board, WHITE2, BITS2.QSIDE_CASTLE, sq)) {
              cflags += "Q";
            } else {
              cflags += "ABCDEFGH".substring(file2(sq), file2(sq) + 1);
            }
          }
          if (castling[BLACK2] & BITS2.KSIDE_CASTLE) {
            sq = search_rook(board, BLACK2, BITS2.KSIDE_CASTLE);
            if (is_outermost_rook(board, BLACK2, BITS2.KSIDE_CASTLE, sq)) {
              cflags += "k";
            } else {
              cflags += "abcdefgh".substring(file2(sq), file2(sq) + 1);
            }
          }
          if (castling[BLACK2] & BITS2.QSIDE_CASTLE) {
            sq = search_rook(board, BLACK2, BITS2.QSIDE_CASTLE);
            if (is_outermost_rook(board, BLACK2, BITS2.QSIDE_CASTLE, sq)) {
              cflags += "q";
            } else {
              cflags += "abcdefgh".substring(file2(sq), file2(sq) + 1);
            }
          }
          cflags = cflags || "-";
          var epflags = ep_square === EMPTY2 ? "-" : algebraic2(ep_square);
          return [fen2, turn, cflags, epflags, half_moves, move_number].join(" ");
        }
        function set_header(args) {
          for (var i = 0; i < args.length; i += 2) {
            if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
              header[args[i]] = args[i + 1];
            }
          }
          return header;
        }
        function update_setup(fen2) {
          if (history.length > 0)
            return;
          if (fen2 !== DEFAULT_POSITION2) {
            header["SetUp"] = "1";
            header["FEN"] = fen2;
          } else {
            delete header["SetUp"];
            delete header["FEN"];
          }
        }
        function get(square) {
          var piece = board[SQUARES[square]];
          return piece ? { type: piece.type, color: piece.color } : null;
        }
        function put(piece, square) {
          if (!("type" in piece && "color" in piece)) {
            return false;
          }
          if (SYMBOLS2.indexOf(piece.type.toLowerCase()) === -1) {
            return false;
          }
          if (!(square in SQUARES)) {
            return false;
          }
          var sq = SQUARES[square];
          if (piece.type == KING2 && !(kings[piece.color] == EMPTY2 || kings[piece.color] == sq)) {
            return false;
          }
          board[sq] = { type: piece.type, color: piece.color };
          if (piece.type === KING2) {
            kings[piece.color] = sq;
          }
          update_setup(generate_fen());
          return true;
        }
        function remove(square) {
          var piece = get(square);
          board[SQUARES[square]] = null;
          if (piece && piece.type === KING2) {
            kings[piece.color] = EMPTY2;
          }
          update_setup(generate_fen());
          return piece;
        }
        function build_move(board2, from, to, flags, promotion, rook_sq) {
          var move = {
            color: turn,
            from,
            to,
            flags,
            piece: board2[from].type
          };
          if (promotion) {
            move.flags |= BITS2.PROMOTION;
            move.promotion = promotion;
          }
          if (flags & (BITS2.KSIDE_CASTLE | BITS2.QSIDE_CASTLE)) {
            move.rook_sq = rook_sq;
          } else if (board2[to]) {
            move.captured = board2[to].type;
          } else if (flags & BITS2.EP_CAPTURE) {
            move.captured = PAWN2;
          }
          return move;
        }
        function generate_moves(options) {
          function add_move(board2, moves2, from, to, flags, rook_sq) {
            if (board2[from].type === PAWN2 && (rank2(to) === RANK_82 || rank2(to) === RANK_12)) {
              var pieces = [QUEEN2, ROOK2, BISHOP2, KNIGHT2];
              for (var i2 = 0, len2 = pieces.length; i2 < len2; i2++) {
                moves2.push(build_move(board2, from, to, flags, pieces[i2]));
              }
            } else {
              moves2.push(build_move(board2, from, to, flags, void 0, rook_sq));
            }
          }
          function check_castle(board2, king_from2, king_to2, rook_from2, rook_to2, them2) {
            var sq;
            var king_left = Math.min(king_from2, king_to2);
            var king_right = Math.max(king_from2, king_to2);
            var left = Math.min(king_left, Math.min(rook_from2, rook_to2));
            var right = Math.max(king_right, Math.max(rook_from2, rook_to2));
            for (sq = left; sq <= right; ++sq) {
              if (sq != king_from2 && sq != rook_from2 && board2[sq]) {
                return false;
              }
            }
            for (sq = king_left; sq <= king_right; ++sq) {
              if (attacked(them2, sq)) {
                return false;
              }
            }
            return true;
          }
          var moves = [];
          var us = turn;
          var them = swap_color(us);
          var second_rank = { b: RANK_72, w: RANK_22 };
          var first_sq = SQUARES.a8;
          var last_sq = SQUARES.h1;
          var single_square = false;
          var legal = typeof options !== "undefined" && "legal" in options ? options.legal : true;
          if (typeof options !== "undefined" && "square" in options) {
            if (options.square in SQUARES) {
              first_sq = last_sq = SQUARES[options.square];
              single_square = true;
            } else {
              return [];
            }
          }
          for (var i = first_sq; i <= last_sq; i++) {
            if (i & 136) {
              i += 7;
              continue;
            }
            var piece = board[i];
            if (piece == null || piece.color !== us) {
              continue;
            }
            if (piece.type === PAWN2) {
              var square = i + PAWN_OFFSETS2[us][0];
              if (board[square] == null) {
                add_move(board, moves, i, square, BITS2.NORMAL);
                var square = i + PAWN_OFFSETS2[us][1];
                if (second_rank[us] === rank2(i) && board[square] == null) {
                  add_move(board, moves, i, square, BITS2.BIG_PAWN);
                }
              }
              for (j = 2; j < 4; j++) {
                var square = i + PAWN_OFFSETS2[us][j];
                if (square & 136)
                  continue;
                if (board[square] != null && board[square].color === them) {
                  add_move(board, moves, i, square, BITS2.CAPTURE);
                } else if (square === ep_square) {
                  add_move(board, moves, i, ep_square, BITS2.EP_CAPTURE);
                }
              }
            } else {
              for (var j = 0, len = PIECE_OFFSETS2[piece.type].length; j < len; j++) {
                var offset = PIECE_OFFSETS2[piece.type][j];
                var square = i;
                while (true) {
                  square += offset;
                  if (square & 136)
                    break;
                  if (board[square] == null) {
                    add_move(board, moves, i, square, BITS2.NORMAL);
                  } else {
                    if (board[square].color === us)
                      break;
                    add_move(board, moves, i, square, BITS2.CAPTURE);
                    break;
                  }
                  if (piece.type === "n" || piece.type === "k")
                    break;
                }
              }
            }
          }
          if (!single_square || last_sq === kings[us]) {
            if (castling[us] & BITS2.KSIDE_CASTLE) {
              var king_from = kings[us];
              var king_to = us === WHITE2 ? SQUARES.g1 : SQUARES.g8;
              var rook_from = search_rook(board, us, BITS2.KSIDE_CASTLE);
              var rook_to = king_to - 1;
              if (check_castle(board, king_from, king_to, rook_from, rook_to, them)) {
                add_move(board, moves, king_from, king_to, BITS2.KSIDE_CASTLE, rook_from);
              }
            }
            if (castling[us] & BITS2.QSIDE_CASTLE) {
              var king_from = kings[us];
              var king_to = us === WHITE2 ? SQUARES.c1 : SQUARES.c8;
              var rook_from = search_rook(board, us, BITS2.QSIDE_CASTLE);
              var rook_to = king_to + 1;
              if (check_castle(board, king_from, king_to, rook_from, rook_to, them)) {
                add_move(board, moves, king_from, king_to, BITS2.QSIDE_CASTLE, rook_from);
              }
            }
          }
          if (!legal) {
            return moves;
          }
          var legal_moves = [];
          for (var i = 0, len = moves.length; i < len; i++) {
            make_move(moves[i]);
            if (!king_attacked(us)) {
              legal_moves.push(moves[i]);
            }
            undo_move();
          }
          return legal_moves;
        }
        function is_rook(piece, color) {
          return typeof piece !== "undefined" && piece !== null && piece.type === ROOK2 && piece.color == color;
        }
        function search_rook(board2, us, flag) {
          for (var i = 0, len = rooks[us].length; i < len; i++) {
            if (flag & rooks[us][i].flag) {
              return rooks[us][i].square;
            }
          }
          return null;
        }
        function is_outermost_rook(board2, us, flag, sq) {
          var end_sq;
          if (flag == BITS2.KSIDE_CASTLE) {
            var end_sq = us == WHITE2 ? SQUARES.h1 : SQUARES.h8;
            while (++sq <= end_sq) {
              if (is_rook(board2[sq], us)) {
                return false;
              }
            }
          } else {
            var end_sq = us == WHITE2 ? SQUARES.a1 : SQUARES.a8;
            while (--sq >= end_sq) {
              if (is_rook(board2[sq], us)) {
                return false;
              }
            }
          }
          return true;
        }
        function move_to_san(move, sloppy) {
          var output = "";
          if (move.flags & BITS2.KSIDE_CASTLE) {
            output = "O-O";
          } else if (move.flags & BITS2.QSIDE_CASTLE) {
            output = "O-O-O";
          } else {
            var disambiguator = get_disambiguator(move, sloppy);
            if (move.piece !== PAWN2) {
              output += move.piece.toUpperCase() + disambiguator;
            }
            if (move.flags & (BITS2.CAPTURE | BITS2.EP_CAPTURE)) {
              if (move.piece === PAWN2) {
                output += algebraic2(move.from)[0];
              }
              output += "x";
            }
            output += algebraic2(move.to);
            if (move.flags & BITS2.PROMOTION) {
              output += "=" + move.promotion.toUpperCase();
            }
          }
          make_move(move);
          if (in_check()) {
            if (in_checkmate()) {
              output += "#";
            } else {
              output += "+";
            }
          }
          undo_move();
          return output;
        }
        function stripped_san(move) {
          return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
        }
        function attacked(color, square) {
          for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            if (i & 136) {
              i += 7;
              continue;
            }
            if (board[i] == null || board[i].color !== color)
              continue;
            var piece = board[i];
            var difference = i - square;
            var index = difference + 119;
            if (ATTACKS2[index] & 1 << SHIFTS[piece.type]) {
              if (piece.type === PAWN2) {
                if (difference > 0) {
                  if (piece.color === WHITE2)
                    return true;
                } else {
                  if (piece.color === BLACK2)
                    return true;
                }
                continue;
              }
              if (piece.type === "n" || piece.type === "k")
                return true;
              var offset = RAYS2[index];
              var j = i + offset;
              var blocked = false;
              while (j !== square) {
                if (board[j] != null) {
                  blocked = true;
                  break;
                }
                j += offset;
              }
              if (!blocked)
                return true;
            }
          }
          return false;
        }
        function king_attacked(color) {
          return attacked(swap_color(color), kings[color]);
        }
        function in_check() {
          return king_attacked(turn);
        }
        function in_checkmate() {
          return in_check() && generate_moves().length === 0;
        }
        function in_stalemate() {
          return !in_check() && generate_moves().length === 0;
        }
        function insufficient_material() {
          var pieces = {};
          var bishops = [];
          var num_pieces = 0;
          var sq_color = 0;
          for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            sq_color = (sq_color + 1) % 2;
            if (i & 136) {
              i += 7;
              continue;
            }
            var piece = board[i];
            if (piece) {
              pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
              if (piece.type === BISHOP2) {
                bishops.push(sq_color);
              }
              num_pieces++;
            }
          }
          if (num_pieces === 2) {
            return true;
          } else if (num_pieces === 3 && (pieces[BISHOP2] === 1 || pieces[KNIGHT2] === 1)) {
            return true;
          } else if (num_pieces === pieces[BISHOP2] + 2) {
            var sum = 0;
            var len = bishops.length;
            for (var i = 0; i < len; i++) {
              sum += bishops[i];
            }
            if (sum === 0 || sum === len) {
              return true;
            }
          }
          return false;
        }
        function in_threefold_repetition() {
          var moves = [];
          var positions = {};
          var repetition = false;
          while (true) {
            var move = undo_move();
            if (!move)
              break;
            moves.push(move);
          }
          while (true) {
            var fen2 = generate_fen().split(" ").slice(0, 4).join(" ");
            positions[fen2] = fen2 in positions ? positions[fen2] + 1 : 1;
            if (positions[fen2] >= 3) {
              repetition = true;
            }
            if (!moves.length) {
              break;
            }
            make_move(moves.pop());
          }
          return repetition;
        }
        function push(move) {
          history.push({
            move,
            kings: { b: kings.b, w: kings.w },
            turn,
            castling: { b: castling.b, w: castling.w },
            ep_square,
            half_moves,
            move_number
          });
        }
        function make_move(move) {
          var us = turn;
          var them = swap_color(us);
          push(move);
          board[move.to] = board[move.from];
          if (move.from != move.to) {
            board[move.from] = null;
          }
          if (move.flags & BITS2.EP_CAPTURE) {
            if (turn === BLACK2) {
              board[move.to - 16] = null;
            } else {
              board[move.to + 16] = null;
            }
          }
          if (move.flags & BITS2.PROMOTION) {
            board[move.to] = { type: move.promotion, color: us };
          }
          if (board[move.to].type === KING2) {
            kings[board[move.to].color] = move.to;
            if (move.flags & BITS2.KSIDE_CASTLE) {
              var castling_to = move.to - 1;
              var castling_from = move.rook_sq;
              board[castling_to] = { type: ROOK2, color: us };
              if (castling_from !== move.to && castling_from !== castling_to)
                board[castling_from] = null;
            } else if (move.flags & BITS2.QSIDE_CASTLE) {
              var castling_to = move.to + 1;
              var castling_from = move.rook_sq;
              board[castling_to] = { type: ROOK2, color: us };
              if (castling_from !== move.to && castling_from !== castling_to)
                board[castling_from] = null;
            }
            castling[us] = "";
          }
          if (castling[us]) {
            for (var i = 0, len = rooks[us].length; i < len; i++) {
              if (move.from === rooks[us][i].square && castling[us] & rooks[us][i].flag) {
                castling[us] ^= rooks[us][i].flag;
                break;
              }
            }
          }
          if (castling[them]) {
            for (var i = 0, len = rooks[them].length; i < len; i++) {
              if (move.to === rooks[them][i].square && castling[them] & rooks[them][i].flag) {
                castling[them] ^= rooks[them][i].flag;
                break;
              }
            }
          }
          if (move.flags & BITS2.BIG_PAWN) {
            if (turn === "b") {
              ep_square = move.to - 16;
            } else {
              ep_square = move.to + 16;
            }
          } else {
            ep_square = EMPTY2;
          }
          if (move.piece === PAWN2) {
            half_moves = 0;
          } else if (move.flags & (BITS2.CAPTURE | BITS2.EP_CAPTURE)) {
            half_moves = 0;
          } else {
            half_moves++;
          }
          if (turn === BLACK2) {
            move_number++;
          }
          turn = swap_color(turn);
        }
        function undo_move() {
          var old = history.pop();
          if (old == null) {
            return null;
          }
          var move = old.move;
          kings = old.kings;
          turn = old.turn;
          castling = old.castling;
          ep_square = old.ep_square;
          half_moves = old.half_moves;
          move_number = old.move_number;
          var us = turn;
          var them = swap_color(turn);
          if (move.from != move.to) {
            board[move.from] = board[move.to];
            board[move.from].type = move.piece;
            board[move.to] = null;
          }
          if (move.flags & BITS2.CAPTURE) {
            board[move.to] = { type: move.captured, color: them };
          } else if (move.flags & BITS2.EP_CAPTURE) {
            var index;
            if (us === BLACK2) {
              index = move.to - 16;
            } else {
              index = move.to + 16;
            }
            board[index] = { type: PAWN2, color: them };
          }
          if (move.flags & (BITS2.KSIDE_CASTLE | BITS2.QSIDE_CASTLE)) {
            var castling_to, castling_from;
            if (move.flags & BITS2.KSIDE_CASTLE) {
              castling_to = move.rook_sq;
              castling_from = move.to - 1;
            } else if (move.flags & BITS2.QSIDE_CASTLE) {
              castling_to = move.rook_sq;
              castling_from = move.to + 1;
            }
            board[castling_to] = { type: ROOK2, color: us };
            if (castling_from !== move.from && castling_from !== castling_to)
              board[castling_from] = null;
          }
          return move;
        }
        function get_disambiguator(move, sloppy) {
          var moves = generate_moves({ legal: !sloppy });
          var from = move.from;
          var to = move.to;
          var piece = move.piece;
          var ambiguities = 0;
          var same_rank = 0;
          var same_file = 0;
          for (var i = 0, len = moves.length; i < len; i++) {
            var ambig_from = moves[i].from;
            var ambig_to = moves[i].to;
            var ambig_piece = moves[i].piece;
            if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
              ambiguities++;
              if (rank2(from) === rank2(ambig_from)) {
                same_rank++;
              }
              if (file2(from) === file2(ambig_from)) {
                same_file++;
              }
            }
          }
          if (ambiguities > 0) {
            if (same_rank > 0 && same_file > 0) {
              return algebraic2(from);
            } else if (same_file > 0) {
              return algebraic2(from).charAt(1);
            } else {
              return algebraic2(from).charAt(0);
            }
          }
          return "";
        }
        function ascii() {
          var s = "   +------------------------+\n";
          for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            if (file2(i) === 0) {
              s += " " + "87654321"[rank2(i)] + " |";
            }
            if (board[i] == null) {
              s += " . ";
            } else {
              var piece = board[i].type;
              var color = board[i].color;
              var symbol = color === WHITE2 ? piece.toUpperCase() : piece.toLowerCase();
              s += " " + symbol + " ";
            }
            if (i + 1 & 136) {
              s += "|\n";
              i += 8;
            }
          }
          s += "   +------------------------+\n";
          s += "     a  b  c  d  e  f  g  h\n";
          return s;
        }
        function move_from_san(move, sloppy) {
          var clean_move = stripped_san(move);
          if (sloppy) {
            var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
            if (matches) {
              var piece = matches[1];
              var from = matches[2];
              var to = matches[3];
              var promotion = matches[4];
            }
          }
          var moves = generate_moves();
          for (var i = 0, len = moves.length; i < len; i++) {
            if (clean_move === stripped_san(move_to_san(moves[i])) || sloppy && clean_move === stripped_san(move_to_san(moves[i], true))) {
              return moves[i];
            } else {
              if (matches && (!piece || piece.toLowerCase() == moves[i].piece) && SQUARES[from] == moves[i].from && SQUARES[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
                return moves[i];
              }
            }
          }
          return null;
        }
        function rank2(i) {
          return i >> 4;
        }
        function file2(i) {
          return i & 15;
        }
        function algebraic2(i) {
          var f = file2(i), r = rank2(i);
          return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
        }
        function swap_color(c) {
          return c === WHITE2 ? BLACK2 : WHITE2;
        }
        function is_digit(c) {
          return "0123456789".indexOf(c) !== -1;
        }
        function make_pretty(ugly_move) {
          var move = clone(ugly_move);
          move.san = move_to_san(move, false);
          move.to = algebraic2(move.to);
          move.from = algebraic2(move.from);
          var flags = "";
          for (var flag in BITS2) {
            if (BITS2[flag] & move.flags) {
              flags += FLAGS2[flag];
            }
          }
          move.flags = flags;
          return move;
        }
        function clone(obj) {
          var dupe = obj instanceof Array ? [] : {};
          for (var property in obj) {
            if (typeof property === "object") {
              dupe[property] = clone(obj[property]);
            } else {
              dupe[property] = obj[property];
            }
          }
          return dupe;
        }
        function trim(str) {
          return str.replace(/^\s+|\s+$/g, "");
        }
        function perft(depth) {
          var moves = generate_moves({ legal: false });
          var nodes = 0;
          var color = turn;
          for (var i = 0, len = moves.length; i < len; i++) {
            make_move(moves[i]);
            if (!king_attacked(color)) {
              if (depth - 1 > 0) {
                var child_nodes = perft(depth - 1);
                nodes += child_nodes;
              } else {
                nodes++;
              }
            }
            undo_move();
          }
          return nodes;
        }
        return {
          WHITE: WHITE2,
          BLACK: BLACK2,
          PAWN: PAWN2,
          KNIGHT: KNIGHT2,
          BISHOP: BISHOP2,
          ROOK: ROOK2,
          QUEEN: QUEEN2,
          KING: KING2,
          SQUARES: function() {
            var keys = [];
            for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
              if (i & 136) {
                i += 7;
                continue;
              }
              keys.push(algebraic2(i));
            }
            return keys;
          }(),
          FLAGS: FLAGS2,
          load: function(fen2) {
            return load(fen2);
          },
          reset: function() {
            return reset();
          },
          moves: function(options) {
            var ugly_moves = generate_moves(options);
            var moves = [];
            for (var i = 0, len = ugly_moves.length; i < len; i++) {
              if (typeof options !== "undefined" && "verbose" in options && options.verbose) {
                moves.push(make_pretty(ugly_moves[i]));
              } else {
                moves.push(move_to_san(ugly_moves[i], false));
              }
            }
            return moves;
          },
          in_check: function() {
            return in_check();
          },
          in_checkmate: function() {
            return in_checkmate();
          },
          in_stalemate: function() {
            return in_stalemate();
          },
          in_draw: function() {
            return half_moves >= 100 || in_stalemate() || insufficient_material() || in_threefold_repetition();
          },
          insufficient_material: function() {
            return insufficient_material();
          },
          in_threefold_repetition: function() {
            return in_threefold_repetition();
          },
          game_over: function() {
            return half_moves >= 100 || in_checkmate() || in_stalemate() || insufficient_material() || in_threefold_repetition();
          },
          validate_fen: function(fen2) {
            return validate_fen(fen2);
          },
          fen: function() {
            return generate_fen();
          },
          board: function() {
            var output = [], row = [];
            for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
              if (board[i] == null) {
                row.push(null);
              } else {
                row.push({ type: board[i].type, color: board[i].color });
              }
              if (i + 1 & 136) {
                output.push(row);
                row = [];
                i += 8;
              }
            }
            return output;
          },
          pgn: function(options) {
            var newline = typeof options === "object" && typeof options.newline_char === "string" ? options.newline_char : "\n";
            var max_width = typeof options === "object" && typeof options.max_width === "number" ? options.max_width : 0;
            var result = [];
            var header_exists = false;
            for (var i in header) {
              result.push("[" + i + ' "' + header[i] + '"]' + newline);
              header_exists = true;
            }
            if (header_exists && history.length) {
              result.push(newline);
            }
            var reversed_history = [];
            while (history.length > 0) {
              reversed_history.push(undo_move());
            }
            var moves = [];
            var move_string = "";
            while (reversed_history.length > 0) {
              var move = reversed_history.pop();
              if (!history.length && move.color === "b") {
                move_string = move_number + ". ...";
              } else if (move.color === "w") {
                if (move_string.length) {
                  moves.push(move_string);
                }
                move_string = move_number + ".";
              }
              move_string = move_string + " " + move_to_san(move, false);
              make_move(move);
            }
            if (move_string.length) {
              moves.push(move_string);
            }
            if (typeof header.Result !== "undefined") {
              moves.push(header.Result);
            }
            if (max_width === 0) {
              return result.join("") + moves.join(" ");
            }
            var current_width = 0;
            for (var i = 0; i < moves.length; i++) {
              if (current_width + moves[i].length > max_width && i !== 0) {
                if (result[result.length - 1] === " ") {
                  result.pop();
                }
                result.push(newline);
                current_width = 0;
              } else if (i !== 0) {
                result.push(" ");
                current_width++;
              }
              result.push(moves[i]);
              current_width += moves[i].length;
            }
            return result.join("");
          },
          load_pgn: function(pgn, options) {
            var sloppy = typeof options !== "undefined" && "sloppy" in options ? options.sloppy : false;
            function mask(str) {
              return str.replace(/\\/g, "\\");
            }
            function has_keys(object) {
              for (var key2 in object) {
                return true;
              }
              return false;
            }
            function parse_pgn_header(header2, options2) {
              var newline_char2 = typeof options2 === "object" && typeof options2.newline_char === "string" ? options2.newline_char : "\r?\n";
              var header_obj = {};
              var headers2 = header2.split(new RegExp(mask(newline_char2)));
              var key2 = "";
              var value = "";
              for (var i = 0; i < headers2.length; i++) {
                key2 = headers2[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, "$1");
                value = headers2[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, "$1");
                if (trim(key2).length > 0) {
                  header_obj[key2] = value;
                }
              }
              return header_obj;
            }
            var newline_char = typeof options === "object" && typeof options.newline_char === "string" ? options.newline_char : "\r?\n";
            var regex = new RegExp("^(\\[(.|" + mask(newline_char) + ")*\\])(" + mask(newline_char) + ")*1.(" + mask(newline_char) + "|.)*$", "g");
            var header_string = pgn.replace(regex, "$1");
            if (header_string[0] !== "[") {
              header_string = "";
            }
            reset();
            var headers = parse_pgn_header(header_string, options);
            for (var key in headers) {
              set_header([key, headers[key]]);
            }
            if (headers["SetUp"] === "1") {
              if (!("FEN" in headers && load(headers["FEN"], true))) {
                return false;
              }
            }
            var ms = pgn.replace(header_string, "").replace(new RegExp(mask(newline_char), "g"), " ");
            ms = ms.replace(/(\{[^}]+\})+?/g, "");
            var rav_regex = /(\([^\(\)]+\))+?/g;
            while (rav_regex.test(ms)) {
              ms = ms.replace(rav_regex, "");
            }
            ms = ms.replace(/\d+\.(\.\.)?/g, "");
            ms = ms.replace(/\.\.\./g, "");
            ms = ms.replace(/\$\d+/g, "");
            var moves = trim(ms).split(new RegExp(/\s+/));
            moves = moves.join(",").replace(/,,+/g, ",").split(",");
            var move = "";
            for (var half_move = 0; half_move < moves.length - 1; half_move++) {
              move = move_from_san(moves[half_move], sloppy);
              if (move == null) {
                return false;
              } else {
                make_move(move);
              }
            }
            move = moves[moves.length - 1];
            if (POSSIBLE_RESULTS.indexOf(move) > -1) {
              if (has_keys(header) && typeof header.Result === "undefined") {
                set_header(["Result", move]);
              }
            } else {
              move = move_from_san(move, sloppy);
              if (move == null) {
                return false;
              } else {
                make_move(move);
              }
            }
            return true;
          },
          header: function() {
            return set_header(arguments);
          },
          ascii: function() {
            return ascii();
          },
          turn: function() {
            return turn;
          },
          move: function(move, options) {
            var sloppy = typeof options !== "undefined" && "sloppy" in options ? options.sloppy : false;
            var move_obj = null;
            if (typeof move === "string") {
              move_obj = move_from_san(move, sloppy);
            } else if (typeof move === "object") {
              var moves = generate_moves();
              for (var i = 0, len = moves.length; i < len; i++) {
                if (move.from === algebraic2(moves[i].from) && move.to === algebraic2(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
                  move_obj = moves[i];
                  break;
                }
              }
            }
            if (!move_obj) {
              return null;
            }
            var pretty_move = make_pretty(move_obj);
            make_move(move_obj);
            return pretty_move;
          },
          undo: function() {
            var move = undo_move();
            return move ? make_pretty(move) : null;
          },
          clear: function() {
            return clear();
          },
          put: function(piece, square) {
            return put(piece, square);
          },
          get: function(square) {
            return get(square);
          },
          remove: function(square) {
            return remove(square);
          },
          perft: function(depth) {
            return perft(depth);
          },
          square_color: function(square) {
            if (square in SQUARES) {
              var sq_0x88 = SQUARES[square];
              return (rank2(sq_0x88) + file2(sq_0x88)) % 2 === 0 ? "light" : "dark";
            }
            return null;
          },
          history: function(options) {
            var reversed_history = [];
            var move_history = [];
            var verbose = typeof options !== "undefined" && "verbose" in options && options.verbose;
            while (history.length > 0) {
              reversed_history.push(undo_move());
            }
            while (reversed_history.length > 0) {
              var move = reversed_history.pop();
              if (verbose) {
                move_history.push(make_pretty(move));
              } else {
                move_history.push(move_to_san(move));
              }
              make_move(move);
            }
            return move_history;
          }
        };
      };
      if (typeof exports !== "undefined")
        exports.Chess = Chess4;
      if (typeof define !== "undefined")
        define(function() {
          return Chess4;
        });
    }
  });

  // widget-src/chess-new.ts
  var WHITE = "w";
  var BLACK = "b";
  var PAWN = "p";
  var KNIGHT = "n";
  var BISHOP = "b";
  var ROOK = "r";
  var QUEEN = "q";
  var KING = "k";
  var DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
  var EMPTY = -1;
  var FLAGS = {
    NORMAL: "n",
    CAPTURE: "c",
    BIG_PAWN: "b",
    EP_CAPTURE: "e",
    PROMOTION: "p",
    KSIDE_CASTLE: "k",
    QSIDE_CASTLE: "q"
  };
  var BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
  };
  var Ox88 = {
    a8: 0,
    b8: 1,
    c8: 2,
    d8: 3,
    e8: 4,
    f8: 5,
    g8: 6,
    h8: 7,
    a7: 16,
    b7: 17,
    c7: 18,
    d7: 19,
    e7: 20,
    f7: 21,
    g7: 22,
    h7: 23,
    a6: 32,
    b6: 33,
    c6: 34,
    d6: 35,
    e6: 36,
    f6: 37,
    g6: 38,
    h6: 39,
    a5: 48,
    b5: 49,
    c5: 50,
    d5: 51,
    e5: 52,
    f5: 53,
    g5: 54,
    h5: 55,
    a4: 64,
    b4: 65,
    c4: 66,
    d4: 67,
    e4: 68,
    f4: 69,
    g4: 70,
    h4: 71,
    a3: 80,
    b3: 81,
    c3: 82,
    d3: 83,
    e3: 84,
    f3: 85,
    g3: 86,
    h3: 87,
    a2: 96,
    b2: 97,
    c2: 98,
    d2: 99,
    e2: 100,
    f2: 101,
    g2: 102,
    h2: 103,
    a1: 112,
    b1: 113,
    c1: 114,
    d1: 115,
    e1: 116,
    f1: 117,
    g1: 118,
    h1: 119
  };
  var PAWN_OFFSETS = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15]
  };
  var PIECE_OFFSETS = {
    n: [-18, -33, -31, -14, 18, 33, 31, 14],
    b: [-17, -15, 17, 15],
    r: [-16, 1, 16, -1],
    q: [-17, -16, -15, 1, 17, 16, 15, -1],
    k: [-17, -16, -15, 1, 17, 16, 15, -1]
  };
  var ATTACKS = [
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    24,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    24,
    2,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    53,
    56,
    53,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    24,
    24,
    24,
    56,
    0,
    56,
    24,
    24,
    24,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    53,
    56,
    53,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    24,
    2,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    24,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    20
  ];
  var RAYS = [
    17,
    0,
    0,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    17,
    0,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    16,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    16,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    16,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    -16,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    -16,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    -16,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    0,
    -17,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    0,
    0,
    -17
  ];
  var PIECE_MASKS = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 };
  var SYMBOLS = "pnbrqkPNBRQK";
  var PROMOTIONS = [KNIGHT, BISHOP, ROOK, QUEEN];
  var RANK_1 = 7;
  var RANK_2 = 6;
  var RANK_7 = 1;
  var RANK_8 = 0;
  var ROOKS = {
    w: [
      { square: Ox88.a1, flag: BITS.QSIDE_CASTLE },
      { square: Ox88.h1, flag: BITS.KSIDE_CASTLE }
    ],
    b: [
      { square: Ox88.a8, flag: BITS.QSIDE_CASTLE },
      { square: Ox88.h8, flag: BITS.KSIDE_CASTLE }
    ]
  };
  var SECOND_RANK = { b: RANK_7, w: RANK_2 };
  var TERMINATION_MARKERS = ["1-0", "0-1", "1/2-1/2", "*"];
  function rank(square) {
    return square >> 4;
  }
  function file(square) {
    return square & 15;
  }
  function isDigit(c) {
    return "0123456789".indexOf(c) !== -1;
  }
  function algebraic(square) {
    const f = file(square);
    const r = rank(square);
    return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
  }
  function swapColor(color) {
    return color === WHITE ? BLACK : WHITE;
  }
  function validateFen(fen, minigame) {
    const tokens = fen.split(/\s+/);
    if (tokens.length !== 6) {
      return {
        ok: false,
        error: "Invalid FEN: must contain six space-delimited fields"
      };
    }
    const moveNumber = parseInt(tokens[5], 10);
    if (isNaN(moveNumber) || moveNumber <= 0) {
      return {
        ok: false,
        error: "Invalid FEN: move number must be a positive integer"
      };
    }
    const halfMoves = parseInt(tokens[4], 10);
    if (isNaN(halfMoves) || halfMoves < 0) {
      return {
        ok: false,
        error: "Invalid FEN: half move counter number must be a non-negative integer"
      };
    }
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return { ok: false, error: "Invalid FEN: en-passant square is invalid" };
    }
    if (/[^kKqQ-]/.test(tokens[2])) {
      return { ok: false, error: "Invalid FEN: castling availability is invalid" };
    }
    if (!/^(w|b)$/.test(tokens[1])) {
      return { ok: false, error: "Invalid FEN: side-to-move is invalid" };
    }
    const rows = tokens[0].split("/");
    if (rows.length !== 8) {
      return {
        ok: false,
        error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
      };
    }
    for (let i = 0; i < rows.length; i++) {
      let sumFields = 0;
      let previousWasNumber = false;
      for (let k = 0; k < rows[i].length; k++) {
        if (isDigit(rows[i][k])) {
          if (previousWasNumber) {
            return {
              ok: false,
              error: "Invalid FEN: piece data is invalid (consecutive number)"
            };
          }
          sumFields += parseInt(rows[i][k], 10);
          previousWasNumber = true;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return {
              ok: false,
              error: "Invalid FEN: piece data is invalid (invalid piece)"
            };
          }
          sumFields += 1;
          previousWasNumber = false;
        }
      }
      if (sumFields !== 8) {
        return {
          ok: false,
          error: "Invalid FEN: piece data is invalid (too many squares in rank)"
        };
      }
    }
    if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
      return { ok: false, error: "Invalid FEN: illegal en-passant square" };
    }
    const kings = [
      { color: "white", regex: /K/g },
      { color: "black", regex: /k/g }
    ];
    for (const { color, regex } of kings) {
      if (!minigame) {
        if (!regex.test(tokens[0])) {
          return { ok: false, error: `Invalid FEN: missing ${color} king` };
        }
      }
      if ((tokens[0].match(regex) || []).length > 1) {
        return { ok: false, error: `Invalid FEN: too many ${color} kings` };
      }
    }
    return { ok: true };
  }
  function getDisambiguator(move, moves) {
    const from = move.from;
    const to = move.to;
    const piece = move.piece;
    let ambiguities = 0;
    let sameRank = 0;
    let sameFile = 0;
    for (let i = 0, len = moves.length; i < len; i++) {
      const ambigFrom = moves[i].from;
      const ambigTo = moves[i].to;
      const ambigPiece = moves[i].piece;
      if (piece === ambigPiece && from !== ambigFrom && to === ambigTo) {
        ambiguities++;
        if (rank(from) === rank(ambigFrom)) {
          sameRank++;
        }
        if (file(from) === file(ambigFrom)) {
          sameFile++;
        }
      }
    }
    if (ambiguities > 0) {
      if (sameRank > 0 && sameFile > 0) {
        return algebraic(from);
      } else if (sameFile > 0) {
        return algebraic(from).charAt(1);
      } else {
        return algebraic(from).charAt(0);
      }
    }
    return "";
  }
  function addMove(moves, color, from, to, piece, captured = void 0, flags = BITS.NORMAL) {
    const r = rank(to);
    if (piece === PAWN && (r === RANK_1 || r === RANK_8)) {
      for (let i = 0; i < PROMOTIONS.length; i++) {
        const promotion = PROMOTIONS[i];
        moves.push({
          color,
          from,
          to,
          piece,
          captured,
          promotion,
          flags: flags | BITS.PROMOTION
        });
      }
    } else {
      moves.push({
        color,
        from,
        to,
        piece,
        captured,
        flags
      });
    }
  }
  function inferPieceType(san) {
    let pieceType = san.charAt(0);
    if (pieceType >= "a" && pieceType <= "h") {
      const matches = san.match(/[a-h]\d.*[a-h]\d/);
      if (matches) {
        return void 0;
      }
      return PAWN;
    }
    pieceType = pieceType.toLowerCase();
    if (pieceType === "o") {
      return KING;
    }
    return pieceType;
  }
  function strippedSan(move) {
    return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
  }
  var Chess = class {
    constructor(options) {
      this._board = new Array(128);
      this._turn = WHITE;
      this._header = {};
      this._kings = { w: EMPTY, b: EMPTY };
      this._epSquare = -1;
      this._halfMoves = 0;
      this._moveNumber = 0;
      this._history = [];
      this._comments = {};
      this._castling = { w: 0, b: 0 };
      this.setMinigame(options.minigame || false);
      this.load(options.fen || DEFAULT_POSITION);
    }
    setMinigame(isMini) {
      this._minigame = isMini;
    }
    clear(keepHeaders = false) {
      this._board = new Array(128);
      this._kings = { w: EMPTY, b: EMPTY };
      this._turn = WHITE;
      this._castling = { w: 0, b: 0 };
      this._epSquare = EMPTY;
      this._halfMoves = 0;
      this._moveNumber = 1;
      this._history = [];
      this._comments = {};
      this._header = keepHeaders ? this._header : {};
      this._updateSetup(this.fen());
    }
    load(fen, keepHeaders = false) {
      let tokens = fen.split(/\s+/);
      if (tokens.length >= 2 && tokens.length < 6) {
        const adjustments = ["-", "-", "0", "1"];
        fen = tokens.concat(adjustments.slice(-(6 - tokens.length))).join(" ");
      }
      tokens = fen.split(/\s+/);
      const { ok, error } = validateFen(fen, this._minigame);
      if (!ok) {
        throw new Error(error);
      }
      const position = tokens[0];
      let square = 0;
      this.clear(keepHeaders);
      for (let i = 0; i < position.length; i++) {
        const piece = position.charAt(i);
        if (piece === "/") {
          square += 8;
        } else if (isDigit(piece)) {
          square += parseInt(piece, 10);
        } else {
          const color = piece < "a" ? WHITE : BLACK;
          this.put({ type: piece.toLowerCase(), color }, algebraic(square));
          square++;
        }
      }
      this._turn = tokens[1];
      if (tokens[2].indexOf("K") > -1) {
        this._castling.w |= BITS.KSIDE_CASTLE;
      }
      if (tokens[2].indexOf("Q") > -1) {
        this._castling.w |= BITS.QSIDE_CASTLE;
      }
      if (tokens[2].indexOf("k") > -1) {
        this._castling.b |= BITS.KSIDE_CASTLE;
      }
      if (tokens[2].indexOf("q") > -1) {
        this._castling.b |= BITS.QSIDE_CASTLE;
      }
      this._epSquare = tokens[3] === "-" ? EMPTY : Ox88[tokens[3]];
      this._halfMoves = parseInt(tokens[4], 10);
      this._moveNumber = parseInt(tokens[5], 10);
      this._updateSetup(this.fen());
    }
    fen() {
      var _a, _b;
      let empty = 0;
      let fen = "";
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        if (this._board[i]) {
          if (empty > 0) {
            fen += empty;
            empty = 0;
          }
          const { color, type: piece } = this._board[i];
          fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        } else {
          empty++;
        }
        if (i + 1 & 136) {
          if (empty > 0) {
            fen += empty;
          }
          if (i !== Ox88.h1) {
            fen += "/";
          }
          empty = 0;
          i += 8;
        }
      }
      let castling = "";
      if (this._castling[WHITE] & BITS.KSIDE_CASTLE) {
        castling += "K";
      }
      if (this._castling[WHITE] & BITS.QSIDE_CASTLE) {
        castling += "Q";
      }
      if (this._castling[BLACK] & BITS.KSIDE_CASTLE) {
        castling += "k";
      }
      if (this._castling[BLACK] & BITS.QSIDE_CASTLE) {
        castling += "q";
      }
      castling = castling || "-";
      let epSquare = "-";
      if (this._epSquare !== EMPTY) {
        const bigPawnSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
        const squares = [bigPawnSquare + 1, bigPawnSquare - 1];
        for (const square of squares) {
          if (square & 136) {
            continue;
          }
          const color = this._turn;
          if (((_a = this._board[square]) == null ? void 0 : _a.color) === color && ((_b = this._board[square]) == null ? void 0 : _b.type) === PAWN) {
            this._makeMove({
              color,
              from: square,
              to: this._epSquare,
              piece: PAWN,
              captured: PAWN,
              flags: BITS.EP_CAPTURE
            });
            const isLegal = !this._isKingAttacked(color);
            this._undoMove();
            if (isLegal) {
              epSquare = algebraic(this._epSquare);
              break;
            }
          }
        }
      }
      return [
        fen,
        this._turn,
        castling,
        epSquare,
        this._halfMoves,
        this._moveNumber
      ].join(" ");
    }
    _updateSetup(fen) {
      if (this._history.length > 0)
        return;
      if (fen !== DEFAULT_POSITION) {
        this._header["SetUp"] = "1";
        this._header["FEN"] = fen;
      } else {
        delete this._header["SetUp"];
        delete this._header["FEN"];
      }
    }
    reset() {
      this.load(DEFAULT_POSITION);
    }
    get(square) {
      return this._board[Ox88[square]] || false;
    }
    put({ type, color }, square) {
      if (SYMBOLS.indexOf(type.toLowerCase()) === -1) {
        return false;
      }
      if (!(square in Ox88)) {
        return false;
      }
      const sq = Ox88[square];
      if (type == KING && !(this._kings[color] == EMPTY || this._kings[color] == sq)) {
        return false;
      }
      this._board[sq] = { type, color };
      if (type === KING) {
        this._kings[color] = sq;
      }
      this._updateSetup(this.fen());
      return true;
    }
    remove(square) {
      const piece = this.get(square);
      delete this._board[Ox88[square]];
      if (piece && piece.type === KING) {
        this._kings[piece.color] = EMPTY;
      }
      this._updateSetup(this.fen());
      return piece;
    }
    _attacked(color, square) {
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        if (i & 136) {
          i += 7;
          continue;
        }
        if (this._board[i] === void 0 || this._board[i].color !== color) {
          continue;
        }
        const piece = this._board[i];
        const difference = i - square;
        if (difference === 0) {
          continue;
        }
        const index = difference + 119;
        if (ATTACKS[index] & PIECE_MASKS[piece.type]) {
          if (piece.type === PAWN) {
            if (difference > 0) {
              if (piece.color === WHITE)
                return true;
            } else {
              if (piece.color === BLACK)
                return true;
            }
            continue;
          }
          if (piece.type === "n" || piece.type === "k")
            return true;
          const offset = RAYS[index];
          let j = i + offset;
          let blocked = false;
          while (j !== square) {
            if (this._board[j] != null) {
              blocked = true;
              break;
            }
            j += offset;
          }
          if (!blocked)
            return true;
        }
      }
      return false;
    }
    _isKingAttacked(color) {
      return this._minigame ? false : this._attacked(swapColor(color), this._kings[color]);
    }
    isAttacked(square, attackedBy) {
      return this._attacked(attackedBy, Ox88[square]);
    }
    isCheck() {
      return this._isKingAttacked(this._turn);
    }
    inCheck() {
      return this.isCheck();
    }
    isCheckmate() {
      return this.isCheck() && this._moves().length === 0;
    }
    isStalemate() {
      return !this.isCheck() && this._moves().length === 0;
    }
    isClearedBoard() {
    }
    isInsufficientMaterial() {
      const pieces = {
        b: 0,
        n: 0,
        r: 0,
        q: 0,
        k: 0,
        p: 0
      };
      const bishops = [];
      let numPieces = 0;
      let squareColor = 0;
      let hasWhite = false;
      let hasBlack = false;
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        squareColor = (squareColor + 1) % 2;
        if (i & 136) {
          i += 7;
          continue;
        }
        const piece = this._board[i];
        if (piece) {
          if (piece.color === "w") {
            hasWhite = true;
          } else {
            hasBlack = true;
          }
          pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
          if (piece.type === BISHOP) {
            bishops.push(squareColor);
          }
          numPieces++;
        }
      }
      if (this._minigame) {
        if (!hasWhite || !hasBlack) {
          return true;
        }
      } else {
        if (numPieces === 2) {
          return true;
        } else if (numPieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) {
          return true;
        } else if (numPieces === pieces[BISHOP] + 2) {
          let sum = 0;
          const len = bishops.length;
          for (let i = 0; i < len; i++) {
            sum += bishops[i];
          }
          if (sum === 0 || sum === len) {
            return true;
          }
        }
      }
      return false;
    }
    isThreefoldRepetition() {
      const moves = [];
      const positions = {};
      let repetition = false;
      while (true) {
        const move = this._undoMove();
        if (!move)
          break;
        moves.push(move);
      }
      while (true) {
        const fen = this.fen().split(" ").slice(0, 4).join(" ");
        positions[fen] = fen in positions ? positions[fen] + 1 : 1;
        if (positions[fen] >= 3) {
          repetition = true;
        }
        const move = moves.pop();
        if (!move) {
          break;
        } else {
          this._makeMove(move);
        }
      }
      return repetition;
    }
    isDraw() {
      return this._halfMoves >= 100 || this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
    }
    isGameOver() {
      return this.isCheckmate() || this.isStalemate() || this.isDraw();
    }
    moves({
      verbose = false,
      returnSquares = false,
      square = void 0,
      piece = void 0
    } = {}) {
      const moves = this._moves({ square, piece });
      if (verbose) {
        return moves.map((move) => this._makePretty(move));
      } else if (returnSquares) {
        return moves.map((move) => this._returnSquare(move));
      } else {
        return moves.map((move) => this._moveToSan(move, moves));
      }
    }
    _moves({
      legal = true,
      piece = void 0,
      square = void 0
    } = {}) {
      var _a;
      const forSquare = square ? square.toLowerCase() : void 0;
      const forPiece = piece == null ? void 0 : piece.toLowerCase();
      const moves = [];
      const us = this._turn;
      const them = swapColor(us);
      let firstSquare = Ox88.a8;
      let lastSquare = Ox88.h1;
      let singleSquare = false;
      if (forSquare) {
        if (!(forSquare in Ox88)) {
          return [];
        } else {
          firstSquare = lastSquare = Ox88[forSquare];
          singleSquare = true;
        }
      }
      for (let from = firstSquare; from <= lastSquare; from++) {
        if (from & 136) {
          from += 7;
          continue;
        }
        if (!this._board[from] || this._board[from].color === them) {
          continue;
        }
        const { type } = this._board[from];
        let to;
        if (type === PAWN) {
          if (forPiece && forPiece !== type)
            continue;
          to = from + PAWN_OFFSETS[us][0];
          if (!this._board[to]) {
            addMove(moves, us, from, to, PAWN);
            to = from + PAWN_OFFSETS[us][1];
            if (SECOND_RANK[us] === rank(from) && !this._board[to]) {
              addMove(moves, us, from, to, PAWN, void 0, BITS.BIG_PAWN);
            }
          }
          for (let j = 2; j < 4; j++) {
            to = from + PAWN_OFFSETS[us][j];
            if (to & 136)
              continue;
            if (((_a = this._board[to]) == null ? void 0 : _a.color) === them) {
              addMove(moves, us, from, to, PAWN, this._board[to].type, BITS.CAPTURE);
            } else if (to === this._epSquare) {
              addMove(moves, us, from, to, PAWN, PAWN, BITS.EP_CAPTURE);
            }
          }
        } else {
          if (forPiece && forPiece !== type)
            continue;
          for (let j = 0, len = PIECE_OFFSETS[type].length; j < len; j++) {
            const offset = PIECE_OFFSETS[type][j];
            to = from;
            while (true) {
              to += offset;
              if (to & 136)
                break;
              if (!this._board[to]) {
                addMove(moves, us, from, to, type);
              } else {
                if (this._board[to].color === us)
                  break;
                addMove(moves, us, from, to, type, this._board[to].type, BITS.CAPTURE);
                break;
              }
              if (type === KNIGHT || type === KING)
                break;
            }
          }
        }
      }
      if (!this._minigame && (forPiece === void 0 || forPiece === KING)) {
        if (!singleSquare || lastSquare === this._kings[us]) {
          if (this._castling[us] & BITS.KSIDE_CASTLE) {
            const castlingFrom = this._kings[us];
            const castlingTo = castlingFrom + 2;
            if (!this._board[castlingFrom + 1] && !this._board[castlingTo] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom + 1) && !this._attacked(them, castlingTo)) {
              addMove(moves, us, this._kings[us], castlingTo, KING, void 0, BITS.KSIDE_CASTLE);
            }
          }
          if (this._castling[us] & BITS.QSIDE_CASTLE) {
            const castlingFrom = this._kings[us];
            const castlingTo = castlingFrom - 2;
            if (!this._board[castlingFrom - 1] && !this._board[castlingFrom - 2] && !this._board[castlingFrom - 3] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom - 1) && !this._attacked(them, castlingTo)) {
              addMove(moves, us, this._kings[us], castlingTo, KING, void 0, BITS.QSIDE_CASTLE);
            }
          }
        }
      }
      if (!legal) {
        return moves;
      }
      const legalMoves = [];
      for (let i = 0, len = moves.length; i < len; i++) {
        this._makeMove(moves[i]);
        if (!this._isKingAttacked(us)) {
          legalMoves.push(moves[i]);
        }
        this._undoMove();
      }
      return legalMoves;
    }
    move(move, { strict = false } = {}) {
      let moveObj = null;
      if (typeof move === "string") {
        moveObj = this._moveFromSan(move, strict);
      } else if (typeof move === "object") {
        const moves = this._moves();
        if (!moves.length) {
          const us = this._turn;
          const them = swapColor(us);
          this._turn = them;
          throw new Error(`No moves`);
        }
        for (let i = 0, len = moves.length; i < len; i++) {
          if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
            moveObj = moves[i];
            break;
          }
        }
      }
      if (!moveObj) {
        if (typeof move === "string") {
          throw new Error(`Invalid move: ${move}`);
        } else {
          throw new Error(`Invalid move: ${JSON.stringify(move)}`);
        }
      }
      const prettyMove = this._makePretty(moveObj);
      this._makeMove(moveObj);
      return prettyMove;
    }
    _push(move) {
      this._history.push({
        move,
        kings: { b: this._kings.b, w: this._kings.w },
        turn: this._turn,
        castling: { b: this._castling.b, w: this._castling.w },
        epSquare: this._epSquare,
        halfMoves: this._halfMoves,
        moveNumber: this._moveNumber
      });
    }
    _makeMove(move) {
      const us = this._turn;
      const them = swapColor(us);
      this._push(move);
      this._board[move.to] = this._board[move.from];
      delete this._board[move.from];
      if (move.flags & BITS.EP_CAPTURE) {
        if (this._turn === BLACK) {
          delete this._board[move.to - 16];
        } else {
          delete this._board[move.to + 16];
        }
      }
      if (move.promotion) {
        this._board[move.to] = { type: move.promotion, color: us };
      }
      if (this._board[move.to].type === KING) {
        this._kings[us] = move.to;
        if (move.flags & BITS.KSIDE_CASTLE) {
          const castlingTo = move.to - 1;
          const castlingFrom = move.to + 1;
          this._board[castlingTo] = this._board[castlingFrom];
          delete this._board[castlingFrom];
        } else if (move.flags & BITS.QSIDE_CASTLE) {
          const castlingTo = move.to + 1;
          const castlingFrom = move.to - 2;
          this._board[castlingTo] = this._board[castlingFrom];
          delete this._board[castlingFrom];
        }
        this._castling[us] = 0;
      }
      if (this._castling[us]) {
        for (let i = 0, len = ROOKS[us].length; i < len; i++) {
          if (move.from === ROOKS[us][i].square && this._castling[us] & ROOKS[us][i].flag) {
            this._castling[us] ^= ROOKS[us][i].flag;
            break;
          }
        }
      }
      if (this._castling[them]) {
        for (let i = 0, len = ROOKS[them].length; i < len; i++) {
          if (move.to === ROOKS[them][i].square && this._castling[them] & ROOKS[them][i].flag) {
            this._castling[them] ^= ROOKS[them][i].flag;
            break;
          }
        }
      }
      if (move.flags & BITS.BIG_PAWN) {
        if (us === BLACK) {
          this._epSquare = move.to - 16;
        } else {
          this._epSquare = move.to + 16;
        }
      } else {
        this._epSquare = EMPTY;
      }
      if (move.piece === PAWN) {
        this._halfMoves = 0;
      } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        this._halfMoves = 0;
      } else {
        this._halfMoves++;
      }
      if (us === BLACK) {
        this._moveNumber++;
      }
      this._turn = them;
    }
    undo() {
      const move = this._undoMove();
      return move ? this._makePretty(move) : null;
    }
    _undoMove() {
      const old = this._history.pop();
      if (old === void 0) {
        return null;
      }
      const move = old.move;
      this._kings = old.kings;
      this._turn = old.turn;
      this._castling = old.castling;
      this._epSquare = old.epSquare;
      this._halfMoves = old.halfMoves;
      this._moveNumber = old.moveNumber;
      const us = this._turn;
      const them = swapColor(us);
      this._board[move.from] = this._board[move.to];
      this._board[move.from].type = move.piece;
      delete this._board[move.to];
      if (move.captured) {
        if (move.flags & BITS.EP_CAPTURE) {
          let index;
          if (us === BLACK) {
            index = move.to - 16;
          } else {
            index = move.to + 16;
          }
          this._board[index] = { type: PAWN, color: them };
        } else {
          this._board[move.to] = { type: move.captured, color: them };
        }
      }
      if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
        let castlingTo, castlingFrom;
        if (move.flags & BITS.KSIDE_CASTLE) {
          castlingTo = move.to + 1;
          castlingFrom = move.to - 1;
        } else {
          castlingTo = move.to - 2;
          castlingFrom = move.to + 1;
        }
        this._board[castlingTo] = this._board[castlingFrom];
        delete this._board[castlingFrom];
      }
      return move;
    }
    pgn({
      newline = "\n",
      maxWidth = 0
    } = {}) {
      const result = [];
      let headerExists = false;
      for (const i in this._header) {
        result.push("[" + i + ' "' + this._header[i] + '"]' + newline);
        headerExists = true;
      }
      if (headerExists && this._history.length) {
        result.push(newline);
      }
      const appendComment = (moveString2) => {
        const comment = this._comments[this.fen()];
        if (typeof comment !== "undefined") {
          const delimiter = moveString2.length > 0 ? " " : "";
          moveString2 = `${moveString2}${delimiter}{${comment}}`;
        }
        return moveString2;
      };
      const reversedHistory = [];
      while (this._history.length > 0) {
        reversedHistory.push(this._undoMove());
      }
      const moves = [];
      let moveString = "";
      if (reversedHistory.length === 0) {
        moves.push(appendComment(""));
      }
      while (reversedHistory.length > 0) {
        moveString = appendComment(moveString);
        const move = reversedHistory.pop();
        if (!move) {
          break;
        }
        if (!this._history.length && move.color === "b") {
          const prefix = `${this._moveNumber}. ...`;
          moveString = moveString ? `${moveString} ${prefix}` : prefix;
        } else if (move.color === "w") {
          if (moveString.length) {
            moves.push(moveString);
          }
          moveString = this._moveNumber + ".";
        }
        moveString = moveString + " " + this._moveToSan(move, this._moves({ legal: true }));
        this._makeMove(move);
      }
      if (moveString.length) {
        moves.push(appendComment(moveString));
      }
      if (typeof this._header.Result !== "undefined") {
        moves.push(this._header.Result);
      }
      if (maxWidth === 0) {
        return result.join("") + moves.join(" ");
      }
      const strip = function() {
        if (result.length > 0 && result[result.length - 1] === " ") {
          result.pop();
          return true;
        }
        return false;
      };
      const wrapComment = function(width, move) {
        for (const token of move.split(" ")) {
          if (!token) {
            continue;
          }
          if (width + token.length > maxWidth) {
            while (strip()) {
              width--;
            }
            result.push(newline);
            width = 0;
          }
          result.push(token);
          width += token.length;
          result.push(" ");
          width++;
        }
        if (strip()) {
          width--;
        }
        return width;
      };
      let currentWidth = 0;
      for (let i = 0; i < moves.length; i++) {
        if (currentWidth + moves[i].length > maxWidth) {
          if (moves[i].includes("{")) {
            currentWidth = wrapComment(currentWidth, moves[i]);
            continue;
          }
        }
        if (currentWidth + moves[i].length > maxWidth && i !== 0) {
          if (result[result.length - 1] === " ") {
            result.pop();
          }
          result.push(newline);
          currentWidth = 0;
        } else if (i !== 0) {
          result.push(" ");
          currentWidth++;
        }
        result.push(moves[i]);
        currentWidth += moves[i].length;
      }
      return result.join("");
    }
    header(...args) {
      for (let i = 0; i < args.length; i += 2) {
        if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
          this._header[args[i]] = args[i + 1];
        }
      }
      return this._header;
    }
    loadPgn(pgn, {
      strict = false,
      newlineChar = "\r?\n"
    } = {}) {
      function mask(str) {
        return str.replace(/\\/g, "\\");
      }
      function parsePgnHeader(header) {
        const headerObj = {};
        const headers2 = header.split(new RegExp(mask(newlineChar)));
        let key = "";
        let value = "";
        for (let i = 0; i < headers2.length; i++) {
          const regex = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
          key = headers2[i].replace(regex, "$1");
          value = headers2[i].replace(regex, "$2");
          if (key.trim().length > 0) {
            headerObj[key] = value;
          }
        }
        return headerObj;
      }
      pgn = pgn.trim();
      const headerRegex = new RegExp("^(\\[((?:" + mask(newlineChar) + ")|.)*\\])((?:\\s*" + mask(newlineChar) + "){2}|(?:\\s*" + mask(newlineChar) + ")*$)");
      const headerRegexResults = headerRegex.exec(pgn);
      const headerString = headerRegexResults ? headerRegexResults.length >= 2 ? headerRegexResults[1] : "" : "";
      this.reset();
      const headers = parsePgnHeader(headerString);
      let fen = "";
      for (const key in headers) {
        if (key.toLowerCase() === "fen") {
          fen = headers[key];
        }
        this.header(key, headers[key]);
      }
      if (!strict) {
        if (fen) {
          this.load(fen, true);
        }
      } else {
        if (headers["SetUp"] === "1") {
          if (!("FEN" in headers)) {
            throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
          }
          this.load(headers["FEN"], true);
        }
      }
      function toHex(s) {
        return Array.from(s).map(function(c) {
          return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/%/g, "").toLowerCase();
        }).join("");
      }
      function fromHex(s) {
        return s.length == 0 ? "" : decodeURIComponent("%" + (s.match(/.{1,2}/g) || []).join("%"));
      }
      const encodeComment = function(s) {
        s = s.replace(new RegExp(mask(newlineChar), "g"), " ");
        return `{${toHex(s.slice(1, s.length - 1))}}`;
      };
      const decodeComment = function(s) {
        if (s.startsWith("{") && s.endsWith("}")) {
          return fromHex(s.slice(1, s.length - 1));
        }
      };
      let ms = pgn.replace(headerString, "").replace(new RegExp(`({[^}]*})+?|;([^${mask(newlineChar)}]*)`, "g"), function(_match, bracket, semicolon) {
        return bracket !== void 0 ? encodeComment(bracket) : " " + encodeComment(`{${semicolon.slice(1)}}`);
      }).replace(new RegExp(mask(newlineChar), "g"), " ");
      const ravRegex = /(\([^()]+\))+?/g;
      while (ravRegex.test(ms)) {
        ms = ms.replace(ravRegex, "");
      }
      ms = ms.replace(/\d+\.(\.\.)?/g, "");
      ms = ms.replace(/\.\.\./g, "");
      ms = ms.replace(/\$\d+/g, "");
      let moves = ms.trim().split(new RegExp(/\s+/));
      moves = moves.filter((move) => move !== "");
      let result = "";
      for (let halfMove = 0; halfMove < moves.length; halfMove++) {
        const comment = decodeComment(moves[halfMove]);
        if (comment !== void 0) {
          this._comments[this.fen()] = comment;
          continue;
        }
        const move = this._moveFromSan(moves[halfMove], strict);
        if (move == null) {
          if (TERMINATION_MARKERS.indexOf(moves[halfMove]) > -1) {
            result = moves[halfMove];
          } else {
            throw new Error(`Invalid move in PGN: ${moves[halfMove]}`);
          }
        } else {
          result = "";
          this._makeMove(move);
        }
      }
      if (result && Object.keys(this._header).length && !this._header["Result"]) {
        this.header("Result", result);
      }
    }
    _moveToSan(move, moves) {
      let output = "";
      if (move.flags & BITS.KSIDE_CASTLE) {
        output = "O-O";
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        output = "O-O-O";
      } else {
        if (move.piece !== PAWN) {
          const disambiguator = getDisambiguator(move, moves);
          output += move.piece.toUpperCase() + disambiguator;
        }
        if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
          if (move.piece === PAWN) {
            output += algebraic(move.from)[0];
          }
          output += "x";
        }
        output += algebraic(move.to);
        if (move.promotion) {
          output += "=" + move.promotion.toUpperCase();
        }
      }
      this._makeMove(move);
      if (this.isCheck()) {
        if (this.isCheckmate()) {
          output += "#";
        } else {
          output += "+";
        }
      }
      this._undoMove();
      return output;
    }
    _moveFromSan(move, strict = false) {
      const cleanMove = strippedSan(move);
      let pieceType = inferPieceType(cleanMove);
      let moves = this._moves({ legal: true, piece: pieceType });
      for (let i = 0, len = moves.length; i < len; i++) {
        if (cleanMove === strippedSan(this._moveToSan(moves[i], moves))) {
          return moves[i];
        }
      }
      if (strict) {
        return null;
      }
      let piece = void 0;
      let matches = void 0;
      let from = void 0;
      let to = void 0;
      let promotion = void 0;
      let overlyDisambiguated = false;
      matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        piece = matches[1];
        from = matches[2];
        to = matches[3];
        promotion = matches[4];
        if (from.length == 1) {
          overlyDisambiguated = true;
        }
      } else {
        matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);
        if (matches) {
          piece = matches[1];
          from = matches[2];
          to = matches[3];
          promotion = matches[4];
          if (from.length == 1) {
            overlyDisambiguated = true;
          }
        }
      }
      pieceType = inferPieceType(cleanMove);
      moves = this._moves({
        legal: true,
        piece: piece ? piece : pieceType
      });
      for (let i = 0, len = moves.length; i < len; i++) {
        if (from && to) {
          if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[from] == moves[i].from && Ox88[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
            return moves[i];
          } else if (overlyDisambiguated) {
            const square = algebraic(moves[i].from);
            if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[to] == moves[i].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
              return moves[i];
            }
          }
        }
      }
      return null;
    }
    ascii() {
      let s = "   +------------------------+\n";
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        if (file(i) === 0) {
          s += " " + "87654321"[rank(i)] + " |";
        }
        if (this._board[i]) {
          const piece = this._board[i].type;
          const color = this._board[i].color;
          const symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
          s += " " + symbol + " ";
        } else {
          s += " . ";
        }
        if (i + 1 & 136) {
          s += "|\n";
          i += 8;
        }
      }
      s += "   +------------------------+\n";
      s += "     a  b  c  d  e  f  g  h";
      return s;
    }
    perft(depth) {
      const moves = this._moves({ legal: false });
      let nodes = 0;
      const color = this._turn;
      for (let i = 0, len = moves.length; i < len; i++) {
        this._makeMove(moves[i]);
        if (!this._isKingAttacked(color)) {
          if (depth - 1 > 0) {
            nodes += this.perft(depth - 1);
          } else {
            nodes++;
          }
        }
        this._undoMove();
      }
      return nodes;
    }
    _makePretty(uglyMove) {
      const { color, piece, from, to, flags, captured, promotion } = uglyMove;
      let prettyFlags = "";
      for (const flag in BITS) {
        if (BITS[flag] & flags) {
          prettyFlags += FLAGS[flag];
        }
      }
      const fromAlgebraic = algebraic(from);
      const toAlgebraic = algebraic(to);
      const move = {
        color,
        piece,
        from: fromAlgebraic,
        to: toAlgebraic,
        san: this._moveToSan(uglyMove, this._moves({ legal: true })),
        flags: prettyFlags,
        lan: fromAlgebraic + toAlgebraic
      };
      if (captured) {
        move.captured = captured;
      }
      if (promotion) {
        move.promotion = promotion;
        move.lan += promotion;
      }
      return move;
    }
    _returnSquare(uglyMove) {
      const { to } = uglyMove;
      return algebraic(to);
    }
    turn() {
      return this._turn;
    }
    board() {
      const output = [];
      let row = [];
      for (let i = Ox88.a8; i <= Ox88.h1; i++) {
        if (this._board[i] == null) {
          row.push(null);
        } else {
          row.push({
            square: algebraic(i),
            type: this._board[i].type,
            color: this._board[i].color
          });
        }
        if (i + 1 & 136) {
          output.push(row);
          row = [];
          i += 8;
        }
      }
      return output;
    }
    squareColor(square) {
      if (square in Ox88) {
        const sq = Ox88[square];
        return (rank(sq) + file(sq)) % 2 === 0 ? "light" : "dark";
      }
      return null;
    }
    history({ verbose = false } = {}) {
      const reversedHistory = [];
      const moveHistory = [];
      while (this._history.length > 0) {
        reversedHistory.push(this._undoMove());
      }
      while (true) {
        const move = reversedHistory.pop();
        if (!move) {
          break;
        }
        if (verbose) {
          moveHistory.push(__spreadValues({ fen: this.fen() }, this._makePretty(move)));
        } else {
          moveHistory.push(this._moveToSan(move, this._moves()));
        }
        this._makeMove(move);
      }
      return moveHistory;
    }
    _pruneComments() {
      const reversedHistory = [];
      const currentComments = {};
      const copyComment = (fen) => {
        if (fen in this._comments) {
          currentComments[fen] = this._comments[fen];
        }
      };
      while (this._history.length > 0) {
        reversedHistory.push(this._undoMove());
      }
      copyComment(this.fen());
      while (true) {
        const move = reversedHistory.pop();
        if (!move) {
          break;
        }
        this._makeMove(move);
        copyComment(this.fen());
      }
      this._comments = currentComments;
    }
    getComment() {
      return this._comments[this.fen()];
    }
    setComment(comment) {
      this._comments[this.fen()] = comment.replace("{", "[").replace("}", "]");
    }
    deleteComment() {
      const comment = this._comments[this.fen()];
      delete this._comments[this.fen()];
      return comment;
    }
    getComments() {
      this._pruneComments();
      return Object.keys(this._comments).map((fen) => {
        return { fen, comment: this._comments[fen] };
      });
    }
    deleteComments() {
      this._pruneComments();
      return Object.keys(this._comments).map((fen) => {
        const comment = this._comments[fen];
        delete this._comments[fen];
        return { fen, comment };
      });
    }
  };

  // widget-src/code.tsx
  var chess960Lib = __toModule(require_chess960());

  // widget-src/ai.js
  var positionCount;
  var weights = { p: 100, n: 280, b: 320, r: 479, q: 929, k: 6e4, k_e: 6e4 };
  var pst_w = {
    p: [
      [100, 100, 100, 100, 105, 100, 100, 100],
      [78, 83, 86, 73, 102, 82, 85, 90],
      [7, 29, 21, 44, 40, 31, 44, 7],
      [-17, 16, -2, 15, 14, 0, 15, -13],
      [-26, 3, 10, 9, 6, 1, 0, -23],
      [-22, 9, 5, -11, -10, -2, 3, -19],
      [-31, 8, -7, -37, -36, -14, 3, -31],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    n: [
      [-66, -53, -75, -75, -10, -55, -58, -70],
      [-3, -6, 100, -36, 4, 62, -4, -14],
      [10, 67, 1, 74, 73, 27, 62, -2],
      [24, 24, 45, 37, 33, 41, 25, 17],
      [-1, 5, 31, 21, 22, 35, 2, 0],
      [-18, 10, 13, 22, 18, 15, 11, -14],
      [-23, -15, 2, 0, 2, 0, -23, -20],
      [-74, -23, -26, -24, -19, -35, -22, -69]
    ],
    b: [
      [-59, -78, -82, -76, -23, -107, -37, -50],
      [-11, 20, 35, -42, -39, 31, 2, -22],
      [-9, 39, -32, 41, 52, -10, 28, -14],
      [25, 17, 20, 34, 26, 25, 15, 10],
      [13, 10, 17, 23, 17, 16, 0, 7],
      [14, 25, 24, 15, 8, 25, 20, 15],
      [19, 20, 11, 6, 7, 6, 20, 16],
      [-7, 2, -15, -12, -14, -15, -10, -10]
    ],
    r: [
      [35, 29, 33, 4, 37, 33, 56, 50],
      [55, 29, 56, 67, 55, 62, 34, 60],
      [19, 35, 28, 33, 45, 27, 25, 15],
      [0, 5, 16, 13, 18, -4, -9, -6],
      [-28, -35, -16, -21, -13, -29, -46, -30],
      [-42, -28, -42, -25, -25, -35, -26, -46],
      [-53, -38, -31, -26, -29, -43, -44, -53],
      [-30, -24, -18, 5, -2, -18, -31, -32]
    ],
    q: [
      [6, 1, -8, -104, 69, 24, 88, 26],
      [14, 32, 60, -10, 20, 76, 57, 24],
      [-2, 43, 32, 60, 72, 63, 43, 2],
      [1, -16, 22, 17, 25, 20, -13, -6],
      [-14, -15, -2, -5, -1, -10, -20, -22],
      [-30, -6, -13, -11, -16, -11, -16, -27],
      [-36, -18, 0, -19, -15, -15, -21, -38],
      [-39, -30, -31, -13, -31, -36, -34, -42]
    ],
    k: [
      [4, 54, 47, -99, -99, 60, 83, -62],
      [-32, 10, 55, 56, 56, 55, 10, 3],
      [-62, 12, -57, 44, -67, 28, 37, -31],
      [-55, 50, 11, -4, -19, 13, 0, -49],
      [-55, -43, -52, -28, -51, -47, -8, -50],
      [-47, -42, -43, -79, -64, -32, -29, -32],
      [-4, 3, -14, -50, -57, -18, 13, 4],
      [17, 30, -3, -14, 6, -1, 40, 18]
    ],
    k_e: [
      [-50, -40, -30, -20, -20, -30, -40, -50],
      [-30, -20, -10, 0, 0, -10, -20, -30],
      [-30, -10, 20, 30, 30, 20, -10, -30],
      [-30, -10, 30, 40, 40, 30, -10, -30],
      [-30, -10, 30, 40, 40, 30, -10, -30],
      [-30, -10, 20, 30, 30, 20, -10, -30],
      [-30, -30, 0, 0, 0, 0, -30, -30],
      [-50, -30, -30, -30, -30, -30, -30, -50]
    ]
  };
  var pst_b = {
    p: pst_w["p"].slice().reverse(),
    n: pst_w["n"].slice().reverse(),
    b: pst_w["b"].slice().reverse(),
    r: pst_w["r"].slice().reverse(),
    q: pst_w["q"].slice().reverse(),
    k: pst_w["k"].slice().reverse(),
    k_e: pst_w["k_e"].slice().reverse()
  };
  var pstOpponent = { w: pst_b, b: pst_w };
  var pstSelf = { w: pst_w, b: pst_b };
  function evaluateBoard(game, move, prevSum, color) {
    if (game.isCheckmate()) {
      if (move.color === color) {
        return __pow(10, 10);
      } else {
        return -__pow(10, 10);
      }
    }
    if (game.isDraw() || game.isThreefoldRepetition() || game.isStalemate()) {
      return 0;
    }
    if (game.isCheck()) {
      if (move.color === color) {
        prevSum += 50;
      } else {
        prevSum -= 50;
      }
    }
    var from = [
      8 - parseInt(move.from[1]),
      move.from.charCodeAt(0) - "a".charCodeAt(0)
    ];
    var to = [
      8 - parseInt(move.to[1]),
      move.to.charCodeAt(0) - "a".charCodeAt(0)
    ];
    if (prevSum < -1500) {
      if (move.piece === "k") {
        move.piece = "k_e";
      }
    }
    if ("captured" in move) {
      if (move.color === color) {
        prevSum += weights[move.captured] + pstOpponent[move.color][move.captured][to[0]][to[1]];
      } else {
        prevSum -= weights[move.captured] + pstSelf[move.color][move.captured][to[0]][to[1]];
      }
    }
    if (move.flags.includes("p")) {
      move.promotion = "q";
      if (move.color === color) {
        prevSum -= weights[move.piece] + pstSelf[move.color][move.piece][from[0]][from[1]];
        prevSum += weights[move.promotion] + pstSelf[move.color][move.promotion][to[0]][to[1]];
      } else {
        prevSum += weights[move.piece] + pstSelf[move.color][move.piece][from[0]][from[1]];
        prevSum -= weights[move.promotion] + pstSelf[move.color][move.promotion][to[0]][to[1]];
      }
    } else {
      if (move.color !== color) {
        prevSum += pstSelf[move.color][move.piece][from[0]][from[1]];
        prevSum -= pstSelf[move.color][move.piece][to[0]][to[1]];
      } else {
        prevSum -= pstSelf[move.color][move.piece][from[0]][from[1]];
        prevSum += pstSelf[move.color][move.piece][to[0]][to[1]];
      }
    }
    return prevSum;
  }
  function minimax(game, depth, alpha, beta, isMaximizingPlayer, sum, color) {
    positionCount++;
    var children = game.moves({ verbose: true });
    children.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    var currMove;
    if (depth === 0 || children.length === 0) {
      return [null, sum];
    }
    var maxValue = Number.NEGATIVE_INFINITY;
    var minValue = Number.POSITIVE_INFINITY;
    var bestMove;
    for (var i = 0; i < children.length; i++) {
      currMove = children[i];
      var currPrettyMove = game.move(currMove);
      var newSum = evaluateBoard(game, currPrettyMove, sum, color);
      var [childBestMove, childValue] = minimax(game, depth - 1, alpha, beta, !isMaximizingPlayer, newSum, color);
      game.undo();
      if (isMaximizingPlayer) {
        if (childValue > maxValue) {
          maxValue = childValue;
          bestMove = currPrettyMove;
        }
        if (childValue > alpha) {
          alpha = childValue;
        }
      } else {
        if (childValue < minValue) {
          minValue = childValue;
          bestMove = currPrettyMove;
        }
        if (childValue < beta) {
          beta = childValue;
        }
      }
      if (alpha >= beta) {
        break;
      }
    }
    if (isMaximizingPlayer) {
      return [bestMove, maxValue];
    } else {
      return [bestMove, minValue];
    }
  }
  function getBestMove(game, color) {
    positionCount = 0;
    const depth = 1;
    var d = new Date().getTime();
    var [bestMove, bestMoveValue] = minimax(game, depth, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, true, 0, color);
    var d2 = new Date().getTime();
    var moveTime = d2 - d;
    var positionsPerS = positionCount * 1e3 / moveTime;
    console.log(`${positionCount} positions evaluated in ${moveTime / 1e3}s. That's ${Math.round(positionsPerS)} positions / s.`);
    return [bestMove, bestMoveValue];
  }

  // widget-src/pieces.ts
  var PIECES_SVG = {};
  var AVAILABLE_MOVE = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72"/>
<rect opacity="0.5" x="24" y="24" width="24" height="24" rx="12" fill="#7B61FF"/>
</svg>`;
  var captureBox = `<rect opacity="0.5" x="1" y="4" width="70" height="70" rx="100" fill="#7B61FF"/>`;
  var viewBox = "-10 -10 92 92";
  PIECES_SVG["b"] = {};
  PIECES_SVG["w"] = {};
  PIECES_SVG["b"]["k"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.0019 3.87506C30.0694 1.71562 31.8395 0 34 0H40C42.1605 0 43.9306 1.71562 43.998 3.87506L44.0332 5H46C48.2091 5 50 6.79086 50 9V11.4261C54.3602 10.4394 59.0663 11.0984 63.0607 14.4271C71.3589 21.3423 70.5954 35.8381 60.7472 43.7669C58.3706 45.6803 56.5035 47.2665 55.2178 48.901C54.9245 49.2739 54.6732 49.6347 54.4617 49.9878L58.5156 50.5361C60.4995 50.8044 61.9795 52.4981 61.9795 54.5V62C61.9795 64.2091 60.1886 66 57.9795 66H16.0205C13.8114 66 12.0205 64.2091 12.0205 62V54.5C12.0205 52.4981 13.5005 50.8044 15.4844 50.5361L19.5383 49.9878C19.3268 49.6347 19.0755 49.2739 18.7822 48.901C17.4965 47.2665 15.6294 45.6803 13.2528 43.7669C3.40462 35.8381 2.64109 21.3423 10.9393 14.4271C14.9337 11.0984 19.6398 10.4394 24 11.4261V9C24 6.79086 25.7909 5 28 5H29.9668L30.0019 3.87506Z" fill="#F4F7FA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 4H40L40.1562 9H46V15H40.3437L40.6185 21.793C40.7282 21.6638 40.8411 21.5372 40.9574 21.4135C46.4206 15.6071 54.5207 12.5172 60.5 17.5C66.5 22.5 66.5 34 58.2387 40.6512C53.559 44.4188 49.3673 48.0509 49.5739 53.3632L57.9795 54.5V62H16.0205V54.5L24.4261 53.3632C24.6327 48.0509 20.441 44.4188 15.7613 40.6512C7.5 34 7.5 22.5 13.5 17.5C19.4793 12.5172 27.5794 15.6071 33.0426 21.4135C33.1589 21.5372 33.2718 21.6638 33.3815 21.793L33.6562 15H28V9H33.8437L34 4ZM28.348 26.9731C32.0147 32.9791 32.5 40 32.5 43.0532C30.6621 43.0565 23.7338 40.0085 20.0656 35.0046C17.4248 31.4022 16.7362 26.0575 19 23.9825C21.2638 21.9075 26.0563 23.2194 28.348 26.9731ZM45.652 26.9731C41.9853 32.9791 41.5 40 41.5 43.0532C43.3379 43.0565 50.2662 40.0085 53.9344 35.0046C56.5752 31.4022 57.2638 26.0575 55 23.9825C52.7362 21.9075 47.9436 23.2194 45.652 26.9731Z" fill="#34364C"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["b"]["q"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10C18 10.9873 18.1588 11.9373 18.4523 12.8258L16.4779 13.752C14.841 12.0553 12.5438 11 10 11C5.02944 11 1 15.0294 1 20C1 24.4308 4.2018 28.1138 8.41791 28.8614L13.16 45.12C13.259 45.4594 13.4025 45.7842 13.5869 46.0858L16.32 50.5582L16.3032 50.5612C14.3925 50.8992 13 52.5597 13 54.5V62C13 64.2091 14.7909 66 17 66L55.0769 66C56.1378 66 57.1552 65.5786 57.9053 64.8284C58.6555 64.0783 59.0769 63.0609 59.0769 62V54.5C59.0769 52.5574 57.6813 50.8957 55.7679 50.5601L55.6875 50.546L58.4131 46.0858C58.5975 45.7842 58.741 45.4594 58.84 45.12L63.5821 28.8614C67.7982 28.1138 71 24.4308 71 20C71 15.0294 66.9706 11 62 11C59.453 11 57.1532 12.058 55.5159 13.7584L53.545 12.8339C53.8402 11.9431 54 10.9903 54 10C54 5.02944 49.9706 1 45 1C40.0294 1 36 5.02944 36 10C36 5.02944 31.9706 1 27 1C22.0294 1 18 5.02944 18 10Z" fill="#F4F7FA"/>
<path d="M28.7948 14.6682C30.6696 13.947 32 12.1288 32 10C32 7.23858 29.7614 5 27 5C24.2386 5 22 7.23858 22 10C22 12.5519 23.9117 14.6572 26.3811 14.9621L24.1513 33L13.4022 23.6641C14.3851 22.751 15 21.4473 15 20C15 17.2386 12.7614 15 10 15C7.23858 15 5 17.2386 5 20C5 22.7614 7.23858 25 10 25C10.4861 25 10.956 24.9306 11.4004 24.8013L17 44L22.7906 53.4756L17 54.5V62L55.0769 62V54.5L49.2119 53.4714L55 44L60.5996 24.8013C61.044 24.9306 61.5139 25 62 25C64.7614 25 67 22.7614 67 20C67 17.2386 64.7614 15 62 15C59.2386 15 57 17.2386 57 20C57 21.4473 57.6149 22.751 58.5978 23.6641L47.8487 33L45.6189 14.9621C48.0883 14.6572 50 12.5519 50 10C50 7.23858 47.7614 5 45 5C42.2386 5 40 7.23858 40 10C40 12.1288 41.3304 13.947 43.2052 14.6682L36 31L28.7948 14.6682Z" fill="#34364C"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["b"]["r"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 5C26.7286 5 27.4117 5.19479 28 5.53513C28.5883 5.19479 29.2714 5 30 5H41C41.7286 5 42.4117 5.19479 43 5.53513C43.5884 5.19479 44.2714 5 45 5H55C57.2091 5 59 6.79086 59 9V18C59 19.259 58.4072 20.4446 57.4 21.2L51.2279 25.8291L52.9755 41.5583C53.4382 45.7226 55.3765 47.8353 58.2 51.6C58.7193 52.2924 59 53.1345 59 54V62C59 64.2091 57.2091 66 55 66H16C13.7909 66 12 64.2091 12 62V54C12 53.1345 12.2807 52.2924 12.8 51.6C15.6235 47.8353 17.5618 45.7226 18.0245 41.5583L19.7722 25.8291L13.6 21.2C12.5928 20.4446 12 19.259 12 18V9C12 6.79086 13.7909 5 16 5H26Z" fill="#F4F7FA"/>
<path d="M16 9H26V15H30V9H41V15H45V9H55V18L47 24L49 42H22L24 24L16 18V9Z" fill="#34364C"/>
<path d="M22 46H49L55 54V62H16V54L22 46Z" fill="#34364C"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["b"]["b"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.314 16.8839C25.9121 15.7797 25.6923 14.5878 25.6923 13.3462C25.6923 7.63212 30.3244 3 36.0385 3C41.7525 3 46.3846 7.63212 46.3846 13.3462C46.3846 15.0199 45.9846 16.6065 45.2755 18.0095C46.2959 18.0801 47.2874 18.5398 48.0103 19.366C51.9379 23.8547 55.375 30.2548 55.375 37.6731C55.375 42.9766 53.5491 46.9066 51.0819 49.7383L55.7679 50.5601C57.6813 50.8957 59.0769 52.5574 59.0769 54.5V62C59.0769 63.0609 58.6555 64.0783 57.9053 64.8284C57.1552 65.5786 56.1378 66 55.0769 66L17 66C14.7909 66 13 64.2091 13 62V54.5C13 52.5597 14.3925 50.8992 16.3032 50.5612L20.5303 49.8134C18.0294 46.9764 16.1731 43.0244 16.1731 37.6731C16.1731 31.8853 18.416 26.8449 21.0466 22.9821C22.7001 20.5541 24.5721 18.4927 26.314 16.8839Z" fill="#F4F7FA"/>
<path d="M38 37.1442H34C34 29.7994 36.2277 22.4669 41.1561 17.0997C41.9284 16.0485 42.3846 14.7506 42.3846 13.3462C42.3846 9.84126 39.5434 7 36.0385 7C32.5336 7 29.6923 9.84126 29.6923 13.3462C29.6923 15.0754 30.384 16.6431 31.5056 17.7877C27.5414 20.6138 20.1731 28.1889 20.1731 37.6731C20.1731 47.2443 27.6772 51.1192 31.6139 51.9147L17 54.5V62L55.0769 62V54.5L40.1165 51.8762C44.0977 50.9999 51.375 47.0985 51.375 37.6731C51.375 31.5015 48.5 26 45 22C41.1561 25 38 32 38 37.1442Z" fill="#34364C"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["b"]["n"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.6899 0.506964C31.0065 0.358909 32.3111 0.872458 33.1735 1.87833L41.3344 11.3968C50.7064 13.7128 56.1365 20.7698 59.1398 29.5796C62.2345 38.6575 63 50.182 63 62C63 64.2091 61.2091 66 59 66H21.7049C19.5814 66 17.8279 64.3406 17.711 62.2202C17.6066 60.3281 18.042 57.0449 19.3686 53.6914L19.393 53.63C15.6257 55.6522 11.4448 55.1678 8.34113 52.958C4.56927 50.2725 2.47202 45.0154 4.86816 39.8238C6.59604 36.08 8.45832 34.0976 9.86712 32.5982C11.1831 31.1977 11.7315 30.5817 12.1194 29.0299C14.4717 19.6209 19.3109 14.2007 24.5079 11.7271C24.4327 10.6552 24.4938 9.62248 24.6253 8.68489C24.9526 6.35108 25.7673 4.19438 26.5978 2.61775C27.2153 1.44546 28.3732 0.655018 29.6899 0.506964Z" fill="#F4F7FA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.1707 15.0185L30.1368 4.48187C28.8291 6.96447 27.5614 11.3461 29.3841 14.5091C28.4994 14.5879 27.6539 14.7375 27 15C22.8279 16.6743 18.25 21 16 30C15.3485 32.606 14.1759 33.854 12.7822 35.3372C11.4676 36.7364 9.95622 38.3448 8.5 41.5C5.5 48 13.5963 54.5 19.5 48.5963C22.8191 45.2772 25.7204 43.9069 28.1562 42.7566C31.662 41.1008 34.2037 39.9004 35.6393 34C36.3224 36.7523 36.0492 43.2477 29.4918 47.211C22.9344 51.1743 21.5683 59.5229 21.7049 61.9999H59C59 38.4832 55.8865 18.1648 39.1707 15.0185Z" fill="#34364C"/>
<circle cx="28" cy="27" r="3" fill="#F4F7FA"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["b"]["p"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1075 41.127C22.6303 41.7785 22.0608 42.4569 21.3971 43.1548C19.0545 45.6178 16.1816 47.6443 14.3274 48.7038L14.0154 48.8821C12.7691 49.5942 12 50.9196 12 52.355V62C12 64.2091 13.7909 66 16 66H55C57.2091 66 59 64.2091 59 62V52.355C59 50.9196 58.2309 49.5943 56.9846 48.8821L56.6727 48.7038C54.8185 47.6443 51.9455 45.6178 49.6029 43.1548C48.9392 42.4569 48.3697 41.7785 47.8925 41.127C49.648 40.7041 50.9524 39.1234 50.9524 37.2381V30.7269C50.9524 29.4272 50.3209 28.2085 49.2591 27.459L47.5602 26.2598C48.5405 24.3551 49.0952 22.1938 49.0952 19.9048C49.0952 12.2254 42.8699 6 35.1905 6C27.5111 6 21.2857 12.2254 21.2857 19.9048C21.2857 22.3225 21.9044 24.5972 22.9895 26.5776L21.7409 27.459C20.6791 28.2085 20.0476 29.4272 20.0476 30.7269V37.2381C20.0476 39.1234 21.352 40.7041 23.1075 41.127Z" fill="#F4F7FA"/>
<path d="M45.0952 19.9048C45.0952 22.7774 43.8723 25.3645 41.9187 27.1736L46.9524 30.7269V37.2381H42.0246C42.2622 40.2562 44.1987 43.2768 46.7045 45.9115C49.3638 48.7075 52.5633 50.9626 54.6881 52.1768L55 52.355V62H16V52.355L16.3119 52.1768C18.4367 50.9626 21.6362 48.7075 24.2955 45.9115C26.8013 43.2768 28.7378 40.2562 28.9754 37.2381H24.0476V30.7269L28.7357 27.4176C26.6234 25.6012 25.2857 22.9092 25.2857 19.9048C25.2857 14.4345 29.7202 10 35.1905 10C40.6607 10 45.0952 14.4345 45.0952 19.9048Z" fill="#34364C"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["w"]["k"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.0019 3.87506C30.0694 1.71562 31.8395 0 34 0H40C42.1605 0 43.9306 1.71562 43.998 3.87506L44.0332 5H46C48.2091 5 50 6.79086 50 9V11.4261C54.3602 10.4394 59.0663 11.0984 63.0607 14.4271C71.3589 21.3423 70.5954 35.8381 60.7472 43.7669C58.3706 45.6803 56.5035 47.2665 55.2178 48.901C54.9245 49.2739 54.6732 49.6347 54.4617 49.9878L58.5156 50.5361C60.4995 50.8044 61.9795 52.4981 61.9795 54.5V62C61.9795 64.2091 60.1886 66 57.9795 66H16.0205C13.8114 66 12.0205 64.2091 12.0205 62V54.5C12.0205 52.4981 13.5005 50.8044 15.4844 50.5361L19.5383 49.9878C19.3268 49.6347 19.0755 49.2739 18.7822 48.901C17.4965 47.2665 15.6294 45.6803 13.2528 43.7669C3.40462 35.8381 2.64109 21.3423 10.9393 14.4271C14.9337 11.0984 19.6398 10.4394 24 11.4261V9C24 6.79086 25.7909 5 28 5H29.9668L30.0019 3.87506Z" fill="#34364C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 4H40L40.1562 9H46V15H40.3437L40.6185 21.793C40.7282 21.6638 40.8411 21.5372 40.9574 21.4135C46.4206 15.6071 54.5207 12.5172 60.5 17.5C66.5 22.5 66.5 34 58.2387 40.6512C53.559 44.4188 49.3673 48.0509 49.5739 53.3632L57.9795 54.5V62H16.0205V54.5L24.4261 53.3632C24.6327 48.0509 20.441 44.4188 15.7613 40.6512C7.5 34 7.5 22.5 13.5 17.5C19.4793 12.5172 27.5794 15.6071 33.0426 21.4135C33.1589 21.5372 33.2718 21.6638 33.3815 21.793L33.6562 15H28V9H33.8437L34 4ZM28.348 26.9731C32.0147 32.9791 32.5 40 32.5 43.0532C30.6621 43.0565 23.7338 40.0085 20.0656 35.0046C17.4248 31.4022 16.7362 26.0575 19 23.9825C21.2638 21.9075 26.0563 23.2194 28.348 26.9731ZM45.652 26.9731C41.9853 32.9791 41.5 40 41.5 43.0532C43.3379 43.0565 50.2662 40.0085 53.9344 35.0046C56.5752 31.4022 57.2638 26.0575 55 23.9825C52.7362 21.9075 47.9436 23.2194 45.652 26.9731Z" fill="#F4F7FA"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["w"]["q"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10C18 10.9873 18.1588 11.9373 18.4523 12.8258L16.4779 13.752C14.841 12.0553 12.5438 11 10 11C5.02944 11 1 15.0294 1 20C1 24.4308 4.2018 28.1138 8.41791 28.8614L13.16 45.12C13.259 45.4594 13.4025 45.7842 13.5869 46.0858L16.32 50.5582L16.3032 50.5612C14.3925 50.8992 13 52.5597 13 54.5V62C13 64.2091 14.7909 66 17 66L55.0769 66C56.1378 66 57.1552 65.5786 57.9053 64.8284C58.6555 64.0783 59.0769 63.0609 59.0769 62V54.5C59.0769 52.5574 57.6813 50.8957 55.7679 50.5601L55.6875 50.546L58.4131 46.0858C58.5975 45.7842 58.741 45.4594 58.84 45.12L63.5821 28.8614C67.7982 28.1138 71 24.4308 71 20C71 15.0294 66.9706 11 62 11C59.453 11 57.1532 12.058 55.5159 13.7584L53.545 12.8339C53.8402 11.9431 54 10.9903 54 10C54 5.02944 49.9706 1 45 1C40.0294 1 36 5.02944 36 10C36 5.02944 31.9706 1 27 1C22.0294 1 18 5.02944 18 10Z" fill="#34364C"/>
<path d="M28.7948 14.6682C30.6696 13.947 32 12.1288 32 10C32 7.23858 29.7614 5 27 5C24.2386 5 22 7.23858 22 10C22 12.5519 23.9117 14.6572 26.3811 14.9621L24.1513 33L13.4022 23.6641C14.3851 22.751 15 21.4473 15 20C15 17.2386 12.7614 15 10 15C7.23858 15 5 17.2386 5 20C5 22.7614 7.23858 25 10 25C10.4861 25 10.956 24.9306 11.4004 24.8013L17 44L22.7906 53.4756L17 54.5V62L55.0769 62V54.5L49.2119 53.4714L55 44L60.5996 24.8013C61.044 24.9306 61.5139 25 62 25C64.7614 25 67 22.7614 67 20C67 17.2386 64.7614 15 62 15C59.2386 15 57 17.2386 57 20C57 21.4473 57.6149 22.751 58.5978 23.6641L47.8487 33L45.6189 14.9621C48.0883 14.6572 50 12.5519 50 10C50 7.23858 47.7614 5 45 5C42.2386 5 40 7.23858 40 10C40 12.1288 41.3304 13.947 43.2052 14.6682L36 31L28.7948 14.6682Z" fill="#F4F7FA"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["w"]["r"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 5C26.7286 5 27.4117 5.19479 28 5.53513C28.5883 5.19479 29.2714 5 30 5H41C41.7286 5 42.4117 5.19479 43 5.53513C43.5884 5.19479 44.2714 5 45 5H55C57.2091 5 59 6.79086 59 9V18C59 19.259 58.4072 20.4446 57.4 21.2L51.2279 25.8291L52.9755 41.5583C53.4382 45.7226 55.3765 47.8353 58.2 51.6C58.7193 52.2924 59 53.1345 59 54V62C59 64.2091 57.2091 66 55 66H16C13.7909 66 12 64.2091 12 62V54C12 53.1345 12.2807 52.2924 12.8 51.6C15.6235 47.8353 17.5618 45.7226 18.0245 41.5583L19.7722 25.8291L13.6 21.2C12.5928 20.4446 12 19.259 12 18V9C12 6.79086 13.7909 5 16 5H26Z" fill="#34364C"/>
<path d="M16 9H26V15H30V9H41V15H45V9H55V18L47 24L49 42H22L24 24L16 18V9Z" fill="#F4F7FA"/>
<path d="M22 46H49L55 54V62H16V54L22 46Z" fill="#F4F7FA"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["w"]["b"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.314 16.8839C25.9121 15.7797 25.6923 14.5878 25.6923 13.3462C25.6923 7.63212 30.3244 3 36.0385 3C41.7525 3 46.3846 7.63212 46.3846 13.3462C46.3846 15.0199 45.9846 16.6065 45.2755 18.0095C46.2959 18.0801 47.2874 18.5398 48.0103 19.366C51.9379 23.8547 55.375 30.2548 55.375 37.6731C55.375 42.9766 53.5491 46.9066 51.0819 49.7383L55.7679 50.5601C57.6813 50.8957 59.0769 52.5574 59.0769 54.5V62C59.0769 63.0609 58.6555 64.0783 57.9053 64.8284C57.1552 65.5786 56.1378 66 55.0769 66L17 66C14.7909 66 13 64.2091 13 62V54.5C13 52.5597 14.3925 50.8992 16.3032 50.5612L20.5303 49.8134C18.0294 46.9764 16.1731 43.0244 16.1731 37.6731C16.1731 31.8853 18.416 26.8449 21.0466 22.9821C22.7001 20.5541 24.5721 18.4927 26.314 16.8839Z" fill="#34364C"/>
<path d="M38 37.1442H34C34 29.7994 36.2277 22.4669 41.1561 17.0997C41.9284 16.0485 42.3846 14.7506 42.3846 13.3462C42.3846 9.84126 39.5434 7 36.0385 7C32.5336 7 29.6923 9.84126 29.6923 13.3462C29.6923 15.0754 30.384 16.6431 31.5056 17.7877C27.5414 20.6138 20.1731 28.1889 20.1731 37.6731C20.1731 47.2443 27.6772 51.1192 31.6139 51.9147L17 54.5V62L55.0769 62V54.5L40.1165 51.8762C44.0977 50.9999 51.375 47.0985 51.375 37.6731C51.375 31.5015 48.5 26 45 22C41.1561 25 38 32 38 37.1442Z" fill="#F4F7FA"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["w"]["n"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.6899 0.506964C31.0065 0.358909 32.3111 0.872458 33.1735 1.87833L41.3344 11.3968C50.7064 13.7128 56.1365 20.7698 59.1398 29.5796C62.2345 38.6575 63 50.182 63 62C63 64.2091 61.2091 66 59 66H21.7049C19.5814 66 17.8279 64.3406 17.711 62.2202C17.6066 60.3281 18.042 57.0449 19.3686 53.6914L19.393 53.63C15.6257 55.6522 11.4448 55.1678 8.34113 52.958C4.56927 50.2725 2.47202 45.0154 4.86816 39.8238C6.59604 36.08 8.45832 34.0976 9.86712 32.5982C11.1831 31.1977 11.7315 30.5817 12.1194 29.0299C14.4717 19.6209 19.3109 14.2007 24.5079 11.7271C24.4327 10.6552 24.4938 9.62248 24.6253 8.68489C24.9526 6.35108 25.7673 4.19438 26.5978 2.61775C27.2153 1.44546 28.3732 0.655018 29.6899 0.506964Z" fill="#34364C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.1707 15.0185L30.1368 4.48187C28.8291 6.96447 27.5614 11.3461 29.3841 14.5091C28.4994 14.5879 27.6539 14.7375 27 15C22.8279 16.6743 18.25 21 16 30C15.3485 32.606 14.1759 33.854 12.7822 35.3372C11.4676 36.7364 9.95622 38.3448 8.5 41.5C5.5 48 13.5963 54.5 19.5 48.5963C22.8191 45.2772 25.7204 43.9069 28.1562 42.7566C31.662 41.1008 34.2037 39.9004 35.6393 34C36.3224 36.7523 36.0492 43.2477 29.4918 47.211C22.9344 51.1743 21.5683 59.5229 21.7049 61.9999H59C59 38.4832 55.8865 18.1648 39.1707 15.0185Z" fill="#F4F7FA"/>
<circle cx="28" cy="27" r="3" fill="#34364C"/>
${capture ? captureBox : null}
</svg>`;
  PIECES_SVG["w"]["p"] = (capture) => `<svg width="72" height="72" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.1075 41.127C22.6303 41.7785 22.0608 42.4569 21.3971 43.1548C19.0545 45.6178 16.1816 47.6443 14.3274 48.7038L14.0154 48.8821C12.7691 49.5942 12 50.9196 12 52.355V62C12 64.2091 13.7909 66 16 66H55C57.2091 66 59 64.2091 59 62V52.355C59 50.9196 58.2309 49.5943 56.9846 48.8821L56.6727 48.7038C54.8185 47.6443 51.9455 45.6178 49.6029 43.1548C48.9392 42.4569 48.3697 41.7785 47.8925 41.127C49.648 40.7041 50.9524 39.1234 50.9524 37.2381V30.7269C50.9524 29.4272 50.3209 28.2085 49.2591 27.459L47.5602 26.2598C48.5405 24.3551 49.0952 22.1938 49.0952 19.9048C49.0952 12.2254 42.8699 6 35.1905 6C27.5111 6 21.2857 12.2254 21.2857 19.9048C21.2857 22.3225 21.9044 24.5972 22.9895 26.5776L21.7409 27.459C20.6791 28.2085 20.0476 29.4272 20.0476 30.7269V37.2381C20.0476 39.1234 21.352 40.7041 23.1075 41.127Z" fill="#34364C"/>
<path d="M45.0952 19.9048C45.0952 22.7774 43.8723 25.3645 41.9187 27.1736L46.9524 30.7269V37.2381H42.0246C42.2622 40.2562 44.1987 43.2768 46.7045 45.9115C49.3638 48.7075 52.5633 50.9626 54.6881 52.1768L55 52.355V62H16V52.355L16.3119 52.1768C18.4367 50.9626 21.6362 48.7075 24.2955 45.9115C26.8013 43.2768 28.7378 40.2562 28.9754 37.2381H24.0476V30.7269L28.7357 27.4176C26.6234 25.6012 25.2857 22.9092 25.2857 19.9048C25.2857 14.4345 29.7202 10 35.1905 10C40.6607 10 45.0952 14.4345 45.0952 19.9048Z" fill="#F4F7FA"/>
${capture ? captureBox : null}
</svg>`;

  // widget-src/code.tsx
  var { widget } = figma;
  var { Frame, AutoLayout, SVG, Text, useSyncedState, usePropertyMenu, useEffect, waitForTask, Image, Rectangle } = widget;
  function Chess3() {
    const [minigame, setMinigame] = widget.useSyncedState("minigame", true);
    const newBoardFen = () => {
      const board2 = play960 ? new chess960Lib.Chess() : new Chess({ minigame });
      return board2.fen();
    };
    const [play960, setPlay960] = widget.useSyncedState("play960", false);
    const [boardFen, setBoardFen] = widget.useSyncedState("boardFen", newBoardFen());
    const [selected, setSelected] = widget.useSyncedState("selected", null);
    const [availableMoves, setAvailableMoves] = widget.useSyncedState("availableMoves", null);
    const [showMoves, setShowMoves] = widget.useSyncedState("showMoves", true);
    const [computer, setComputer] = widget.useSyncedState("computer", false);
    const [promoMove, setPromoMove] = widget.useSyncedState("promoMove", null);
    const [playerWhite, setPlayerWhite] = useSyncedState("playerWhite", "waiting for player");
    const [playerBlack, setPlayerBlack] = useSyncedState("playerBlack", "waiting for player");
    const [playerPhotoWhite, setPlayerPhotoWhite] = useSyncedState("playerPhotoWhite", null);
    const [playerPhotoBlack, setPlayerPhotoBlack] = useSyncedState("playerPhotoBlack", null);
    const resetPlayers = () => {
      setPlayerWhite("waiting for player");
      setPlayerBlack("waiting for player");
      setPlayerPhotoWhite(null);
      setPlayerPhotoBlack(null);
    };
    const resetBoard = (m, fen, c) => {
      chess.setMinigame(m);
      setBoardFen(fen);
      setMinigame(m);
      setSelected(null);
      setAvailableMoves(null);
      resetPlayers();
      setPromoMove(null);
      setComputer(c);
    };
    let chess = new Chess({ fen: boardFen, minigame });
    let board = chess.board();
    const promoPieces = ["q", "r", "b", "n"];
    const propertyMenu = [
      {
        tooltip: "PvP",
        propertyName: "reset-pvp",
        itemType: "action"
      },
      {
        tooltip: "BvP",
        propertyName: "reset-pvb",
        itemType: "action"
      },
      {
        tooltip: "NvP",
        propertyName: "reset-pvn",
        itemType: "action"
      },
      {
        tooltip: "RvP",
        propertyName: "reset-pvr",
        itemType: "action"
      },
      {
        tooltip: "KvP",
        propertyName: "reset-pvk",
        itemType: "action"
      },
      {
        tooltip: "QvP",
        propertyName: "reset-pvq",
        itemType: "action"
      },
      {
        tooltip: "New Game (2 Players)",
        propertyName: "reset",
        itemType: "action"
      },
      {
        tooltip: "New Game (Against AI)",
        propertyName: "reset-computer",
        itemType: "action"
      },
      {
        tooltip: `${!showMoves ? "Show" : "Hide"} Moves`,
        propertyName: "toggle",
        itemType: "action"
      }
    ];
    usePropertyMenu(propertyMenu, (_0) => __async(this, [_0], function* ({ propertyName }) {
      if (propertyName === "reset-pvp") {
        resetBoard(true, "8/pppppppp/8/8/8/8/PPPPPPPP/8 w - - 0 1", false);
      } else if (propertyName === "reset-pvb") {
        resetBoard(true, "2b2b2/8/8/8/8/8/PPPPPPPP/8 w - - 0 1", false);
      } else if (propertyName === "reset-pvr") {
        resetBoard(true, "r6r/8/8/8/8/8/PPPPPPPP/8 w - - 0 1", false);
      } else if (propertyName === "reset-pvn") {
        resetBoard(true, "1n4n1/8/8/8/8/8/PPPPPPPP/8 w - - 0 1", false);
      } else if (propertyName === "reset-pvk") {
        resetBoard(true, "4k3/8/8/8/8/8/PPPPPPPP/8 w - - 0 1", false);
      } else if (propertyName === "reset-pvq") {
        resetBoard(true, "3q4/8/8/8/8/8/PPPPPPPP/8 w - - 0 1", false);
      } else if (propertyName === "reset") {
        resetBoard(false, newBoardFen(), false);
      } else if (propertyName === "reset960") {
        chess = chess960Lib.Chess(generate960StartFen());
        board = chess.board();
        resetBoard(false, chess.fen(), false);
      } else if (propertyName === "reset-computer") {
        resetBoard(false, newBoardFen(), true);
      } else if (propertyName === "toggle") {
        selected && !showMoves ? setAvailableMoves(chess.moves({ returnSquares: true, square: selected })) : setAvailableMoves(null);
        setShowMoves(!showMoves);
      }
    }));
    const generate960StartFen = () => {
      var rank2 = new Array(8);
      const d = (num) => {
        return Math.floor(Math.random() * ++num);
      };
      const emptySquares = () => {
        let arr = [];
        for (let i = 0; i < 8; i++)
          if (rank2[i] == void 0)
            arr.push(i);
        return arr;
      };
      rank2[d(2) * 2] = "b";
      rank2[d(2) * 2 + 1] = "b";
      rank2[emptySquares()[d(5)]] = "q";
      rank2[emptySquares()[d(4)]] = "n";
      rank2[emptySquares()[d(3)]] = "n";
      for (var x = 1; x <= 3; x++)
        rank2[emptySquares()[0]] = x == 2 ? "k" : "r";
      let fen = "";
      for (let i = 0; i < rank2.length; i++) {
        fen += rank2[i];
      }
      fen += "/pppppppp/8/8/8/8/PPPPPPPP/";
      for (let i = 0; i < rank2.length; i++) {
        fen += rank2[i].toUpperCase();
      }
      fen += " w KQkq - 0 1";
      return fen;
    };
    const endGameCondition = (() => {
      if (minigame) {
        if (chess.isInsufficientMaterial()) {
          return `${chess.turn() == "w" ? "Black" : "White"} wins.`;
        } else {
          return "";
        }
      } else {
        if (chess.isCheckmate()) {
          return `Checkmate! ${chess.turn() == "w" ? "Black" : "White"} wins.`;
        } else if (chess.isDraw()) {
          return "The game is a draw.";
        } else if (chess.isStalemate()) {
          return "The game is a stalemate.";
        } else if (chess.isThreefoldRepetition()) {
          return "The game is a draw by repetition.";
        } else {
          return "";
        }
      }
    })();
    const promoMenu = (color) => {
      const active = promoMove !== null && chess.turn() === color;
      return /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        key: `promo:${color}`
      }, promoPieces.map((piece) => {
        return /* @__PURE__ */ figma.widget.h(AutoLayout, {
          opacity: active ? 1 : 0,
          onClick: active ? () => {
            applyMove({ from: promoMove.from, to: promoMove.to, promotion: piece });
            setPromoMove(null);
          } : null,
          key: `promo:${color}:${piece}`
        }, /* @__PURE__ */ figma.widget.h(SVG, {
          src: PIECES_SVG[color][piece](),
          height: 50,
          width: 50
        }));
      }));
    };
    const applyMove = (move) => {
      try {
        chess.move(move, { strict: false });
        setBoardFen(chess.fen());
        setSelected(null);
        setAvailableMoves(null);
        if (computer) {
          const notification = figma.notify("Computing move...");
          waitForTask(new Promise((resolve) => {
            setTimeout(() => {
              const move2 = getBestMove(chess, chess.turn(), 0)[0];
              if (chess.move(move2)) {
                setBoardFen(chess.fen());
                setSelected(null);
                setAvailableMoves(null);
                notification.cancel();
              } else {
              }
              resolve();
            }, 50);
          }));
        }
      } catch (e) {
        if (e.message === "No moves") {
          figma.notify(`No legal moves available to ${chess.turn() === "w" ? "black" : "white"} \u{1F631}`, { timeout: 3e3 });
          setBoardFen(chess.fen());
        } else if (chess.inCheck()) {
          figma.notify("You're in check! \u{1F62C}", { timeout: 2e3 });
        } else {
          figma.notify("Legal moves only, please! \u{1F60A}", { timeout: 2e3 });
        }
        setSelected(null);
        setAvailableMoves(null);
      }
    };
    const isPromoMove = (move) => {
      const piece = chess.get(move.from);
      if (piece === null || (piece == null ? void 0 : piece.type) !== "p" || (piece == null ? void 0 : piece.color) !== chess.turn()) {
        return false;
      } else if ((piece == null ? void 0 : piece.color) === "w") {
        return move.to.charAt(1) === "8";
      } else {
        return move.to.charAt(1) === "1";
      }
    };
    const select = ({ row, column }) => {
      if (endGameCondition.length > 0) {
        return;
      }
      const position = indexToPositionString(row, column);
      if (selected && selected === position) {
        setSelected(null);
        setAvailableMoves(null);
      } else if (selected) {
        const move = { from: selected, to: position };
        if (isPromoMove(move)) {
          setPromoMove(move);
          figma.notify("Promote your pawn!", { timeout: 2e3 });
        } else {
          applyMove(move);
        }
      } else {
        if (board[row][column] && board[row][column].color === chess.turn()) {
          setSelected(position);
          const moves = chess.moves({ returnSquares: true, square: position });
          if (!moves.length) {
            figma.notify(`This piece is currently blocked`, { timeout: 2e3 });
          }
          if (showMoves) {
            setAvailableMoves(moves);
          }
          if (figma.currentUser) {
            if (chess.turn() === "w") {
              setPlayerWhite(figma.currentUser.name);
              setPlayerPhotoWhite(figma.currentUser.photoUrl);
            } else {
              setPlayerBlack(figma.currentUser.name);
              setPlayerPhotoBlack(figma.currentUser.photoUrl);
            }
          } else {
            figma.notify("Please login to figma");
          }
        } else if (board[row][column]) {
          const color = chess.turn();
          figma.notify(`It's currently ${color === "b" ? "black" : "white"}'s turn`, { timeout: 2e3 });
        }
      }
    };
    const indexToPositionString = (row, column) => {
      return String.fromCharCode(97 + column) + (8 - row);
    };
    const boards = (computer ? ["w"] : ["w", "b"]).map((color) => {
      const flipped = color === "b";
      let flippedBoard;
      if (flipped) {
        flippedBoard = board.slice().reverse();
      } else {
        flippedBoard = board;
      }
      const photo = color === "b" ? playerPhotoBlack : playerPhotoWhite;
      const name = color === "b" ? playerBlack : playerWhite;
      return /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "vertical",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        key: `wrapper:${color}`
      }, promoMenu(color), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "vertical",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        key: `color:${color}`,
        stroke: "#000000",
        strokeWidth: chess.turn() === color ? 5 : 0
      }, flippedBoard.map((row, rowIndex) => {
        if (flipped) {
          rowIndex = 7 - rowIndex;
        }
        return /* @__PURE__ */ figma.widget.h(AutoLayout, {
          direction: "horizontal",
          horizontalAlignItems: "center",
          verticalAlignItems: "center",
          height: "hug-contents",
          width: "hug-contents",
          key: `row:${rowIndex}`
        }, row.map((cell, columnIndex) => /* @__PURE__ */ figma.widget.h(AutoLayout, {
          fill: selected && selected === indexToPositionString(rowIndex, columnIndex) ? "#9890EC" : (rowIndex + columnIndex) % 2 == 0 ? "#E8EDF9" : "#B7C0D8",
          onClick: cell || selected ? () => {
            select({
              row: rowIndex,
              column: columnIndex
            });
          } : null,
          key: `row:${rowIndex},col:${columnIndex}`
        }, cell ? /* @__PURE__ */ figma.widget.h(SVG, {
          src: PIECES_SVG[cell.color][cell.type](availableMoves && availableMoves.indexOf(indexToPositionString(rowIndex, columnIndex)) !== -1),
          height: 100,
          width: 100
        }) : availableMoves && availableMoves.indexOf(indexToPositionString(rowIndex, columnIndex)) !== -1 ? /* @__PURE__ */ figma.widget.h(SVG, {
          src: AVAILABLE_MOVE,
          height: 100,
          width: 100
        }) : /* @__PURE__ */ figma.widget.h(Frame, {
          width: 100,
          height: 100
        }))));
      })), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "start",
        verticalAlignItems: "center",
        height: "hug-contents",
        padding: 10
      }, photo ? /* @__PURE__ */ figma.widget.h(Image, {
        cornerRadius: 60,
        width: 60,
        height: 60,
        src: photo
      }) : /* @__PURE__ */ figma.widget.h(Rectangle, {
        cornerRadius: 60,
        width: 60,
        height: 60,
        fill: "#B7C0D8"
      }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        height: "hug-contents",
        padding: 10
      }, /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 30
      }, name))));
    });
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 10
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      cornerRadius: 0,
      spacing: 120
    }, boards), endGameCondition.length > 0 && /* @__PURE__ */ figma.widget.h(AutoLayout, {
      width: "fill-parent",
      height: 200,
      verticalAlignItems: "end"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      width: "fill-parent",
      padding: 40,
      cornerRadius: 30,
      spacing: 120,
      fill: "#4ECB71"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 70,
      fill: "#FFFFFF"
    }, endGameCondition))));
  }
  widget.register(Chess3);
})();
/* @license
 * Copyright (c) 2017, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */
/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
