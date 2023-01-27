import React, {useEffect, useState} from 'react';
import {fetchCatValue} from "./catFactsSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

export function CatFacts() {

  return (
    <div>
      <button>Show me the cat facts</button>
      <div>

      </div>
    </div>
  );
}

// Exercice 1 : Fetch suite au clique du bouton
// Exercice 2 : Fetch quand le component est mount
