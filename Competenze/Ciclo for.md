---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [for in, for loop, range, enumerate, contenitore, limiti asimmetrici, range-based for, for(;;)]
tags: [competenza, area/informatica]
---

# Ciclo for

> Ciclo che itera su tutti gli elementi di un contenitore (stringa, lista, file, range), assegnandoli a turno alla variabile del ciclo.

## Definizione / enunciato
`for elemento in contenitore:` assegna alla variabile, a ogni iterazione, l'elemento successivo del **contenitore**: una stringa (caratteri), una lista (valori), un file (righe), un `range`.

`range(i, j, k)` genera gli interi da `i` (compreso, default 0) a `j` (escluso) con passo `k` (default 1); `range(N)` dà 0, ..., N−1. Un `for` con `range` equivale a un while controllato da contatore, con l'aggiornamento automatico. `for i in range(a, b)` esegue `b-a` iterazioni.

`enumerate(cont)` restituisce coppie (indice, valore): `for (i, lettera) in enumerate(nome):` dà indice e valore insieme.

## Formule chiave
```python
for letter in "Virginia" :
    print(letter)
for i in range(1, 10) :              # 1..9
    print(i)
for year in range(1, numYears + 1) : # il +1 per includere numYears
    ...
for (pos, mese) in enumerate(mesi) :
    print(f'Il mese {pos+1} è {mese}')
```

## Intuizione
Il while cicla sull'**indice**, il for sul **valore**, enumerate su entrambi. Ricalcolare l'indice con `mesi.index(mese)` dentro il ciclo è un errore (P6 p. 70): è inefficiente e con duplicati restituisce sempre la prima posizione.

## Come si usa
Si usa il for per scorrere un contenitore o per un numero noto di iterazioni; il while quando il numero di iterazioni dipende da un evento. Esempi: stampa dei caratteri con il loro indice, saldo anno per anno di un investimento, scorrere `for i in range(len(values))` quando serve l'indice.

## Nei corsi
- **Informatica** (triennale): unità P4 sezione 4.6; cicli sulle liste in P6. Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 50-67), `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 15-16, 70-72), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 1).
- **Programmazione e calcolo scientifico** (triennale): in C++ (lezione 4 di M. Cicuttin) `for ( <inizializzazione>; <condizione>; <incremento> ) { ... }`, con tre parti tutte facoltative (`for(;;)` è un ciclo infinito); esempio `for (int i = 1; i <= 1024; i *= 2)` stampa potenze di 2. Le slide notano che il C++ non ha un'iterazione limitata (bounded): anche il `for` è un ciclo con condizione, come il while. Con la STL (lezione 7) il **range-based for** `for (auto& val : vals)` scorre un container come il `for ... in` di Python, equivalente al ciclo con iteratori `begin()`/`end()`. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione4.pdf` (p. 24, 28); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione7.pdf` (p. 6).

## Prerequisiti
- [[Ciclo while]]: equivale a un while con contatore
- [[Stringa in Python]]: primo contenitore su cui iterare

## Porta a
- [[Cicli annidati]]: un ciclo nel corpo di un altro
- [[Ricerca del massimo e del minimo]]: scorre tutti gli elementi una volta
- [[Metodo Monte Carlo]]: ripete le prove un numero fissato di volte
- [[List comprehension]]: riscrive in forma compatta un ciclo for

## Collegati
- [[Lettura di file di testo]]: il file è un contenitore di righe
- [[Standard Template Library]]: il range-based for del C++ scorre i container STL (Programmazione e calcolo scientifico)
