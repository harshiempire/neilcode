import { Problem } from "../types/problems";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sums";
import { validParentheses } from "./valid-parentheses";

interface ProblemMap{
    [key:string]:Problem;
}

export const problems:ProblemMap ={
    "two-sum":twoSum,
    "jump-game":jumpGame,
    "reverse-linked-list":reverseLinkedList,
    "search-2-2d-matrix":search2DMatrix,
    "valid-parentheses":validParentheses,
}