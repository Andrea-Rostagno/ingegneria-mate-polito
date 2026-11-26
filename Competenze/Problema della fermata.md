---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: [halting problem, problema della terminazione, indecidibilità, problema indecidibile, undecidable problem, Turing 1937, Paradosso]
tags: [competenza, area/informatica]
---

# Problema della fermata

> Non esiste un algoritmo che, dato un generico programma $A$ e un input $D$, stabilisca in tempo finito se $A$ termina su $D$: il problema è indecidibile.

## Definizione / enunciato
Non tutti i problemi computazionali ammettono un algoritmo di risoluzione. **Problema della fermata** (Turing, 1937): dato un generico algoritmo $A$ in ingresso, termina o va in ciclo? **Teorema**: non esiste un algoritmo per stabilire la terminazione di un generico algoritmo $A$. Un problema senza alcun algoritmo di risoluzione si dice **indecidibile**. È indecidibile anche l'equivalenza tra due programmi (stesso output per ogni input).

## Formule chiave
Dimostrazione per assurdo:
1. una sequenza di simboli può essere interpretata come dato o come programma;
2. un programma può essere dato in input a un altro programma;
3. si suppone che esista `Termina(A, D)` che in tempo finito risponde SI se $A$ termina con input $D$ e NO se va in ciclo;
4. per 1 e 2 è lecito invocare `Termina(A, A)`;
5. si considera
```text
Paradosso( A ):
    while (Termina( A, A ))
        ;
```
6. `Paradosso(Paradosso)` termina se e solo se `Termina(Paradosso, Paradosso)` risponde NO, cioè se e solo se non termina: **contraddizione**.

## Intuizione
L'argomento è diagonale: un programma che "fa il contrario" di quanto il decisore prevede su se stesso. Che la terminazione sia difficile si vede già su esempi concreti: `Primo(numero)` termina sempre (il fattore cresce fino a dividere il numero), mentre un programma che cerca un controesempio alla congettura di Goldbach termina se e solo se la confuta, e la congettura è un problema aperto.

## Come si usa
Domanda tipica: enunciare e dimostrare l'indecidibilità della fermata, e distinguere **decidibilità** (esiste un algoritmo) da **trattabilità** (esiste un algoritmo polinomiale): la Torre di Hanoi è decidibile ma richiede tempo esponenziale.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi introduttivi Crescenzi, "Computabilità e complessità"; nella scheda "Cenni sulla teoria della complessità computazionale". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Introduzione.pdf` (p. 3-7).
- **Blockchain e criptoeconomia** (magistrale): la EVM di Ethereum è Turing completa, quindi uno smart contract potrebbe finire in un loop infinito e bloccare la rete. Il problema non si risolve decidendo la terminazione, ma con il **gas**: l'esecuzione continua solo finché c'è gas, comprato in ETH e con un massimo fissato a priori. Bitcoin invece evita i loop limitando il linguaggio di script. Il collegamento con l'indecidibilità non è nominato nelle slide. Fonti: `magistrale/Blockchain e criptoeconomia/05-Blockchain2.pdf` (p. 7); `03-Bitcoin.pdf` (p. 106).

## Prerequisiti
- [[Algoritmo]]: si ragiona su algoritmi dati come input

## Porta a
- [[Classi P e NP]]: tra i problemi decidibili si distinguono quelli trattabili
- [[Ethereum Virtual Machine]]: con un linguaggio Turing completo la terminazione si garantisce con il gas (Blockchain e criptoeconomia)

## Collegati
- Nessuno.
