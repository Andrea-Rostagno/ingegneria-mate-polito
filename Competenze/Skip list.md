---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [lista a salti, liste a salti, lista randomizzata, liste randomizzate, ScansioneSkipList, InserimentoSkipList]
tags: [competenza, area/informatica]
---

# Skip list

> Lista ordinata a più livelli, ciascuno sottoinsieme del precedente, che permette ricerche simili alla ricerca binaria; con l'inserimento randomizzato ricerca e inserimento costano $O(\log n)$ in media.

## Definizione / enunciato
**Livello 0**: lista ordinata $L_0=e_0,e_1,\dots,e_{n+1}$ con sentinelle $e_0=-\infty$ ed $e_{n+1}=+\infty$. Versione perfettamente bilanciata: per $1\le i\le n$ sia $r_i$ l'esponente della massima potenza di 2 che divide $i$; si mettono copie di $e_i$ ai livelli $\ell=1,\dots,r_i$; il livello $\ell$ è la lista ordinata delle copie con $r_i\ge\ell$, e ogni copia punta (`inf`) alla copia del livello inferiore. L'altezza $h$ è il massimo $r_i$ più 1, quindi $h=O(\log n)$, e $L_\ell\subseteq L_{\ell-1}\subseteq\dots\subseteq L_0$.
**Predecessore** di $x$ in una lista ordinata: il massimo elemento minore o uguale a $x$, ben definito grazie alle sentinelle.

## Formule chiave
$L_\ell$ contiene al più $2+n/2^\ell$ elementi, quindi il numero totale di copie è
$$\sum_{\ell=0}^{h}\left(2+\frac{n}{2^\ell}\right)=2(h+1)+n\sum_{\ell=0}^{h}\frac{1}{2^\ell}<2(h+1)+2n=O(n).$$
```text
ScansioneSkipList( k ):      // pre: -inf e +inf fanno da sentinelle
    p = L[h];
    while (p != null) {
        while (p.succ.key <= k) p = p.succ;
        predecessore = p;
        p = p.inf;
    }
    return predecessore;
```

## Intuizione
Ai livelli alti si fanno "salti" lunghi, poi si scende e si raffina, come nella ricerca binaria su un array. Mantenere la struttura perfetta durante gli inserimenti sarebbe troppo costoso (potrebbe cambiare le copie di tutti gli elementi successivi): si rinuncia al bilanciamento perfetto e si usa la casualità.

## Come si usa
**Inserimento randomizzato** di $k$: si trovano e si salvano in `pred` i predecessori $p_0,\dots,p_h$ di $k$; si lancia una moneta equa (`random() < 0.5`) fermandosi al primo insuccesso o dopo $h$ lanci, e $r$ è il numero di lanci; se $r=h+1$ si crea un nuovo livello $\{-\infty,k,+\infty\}$; si inseriscono copie di $k$ nei livelli $0,\dots,r$ dopo i rispettivi predecessori. Con alta probabilità l'altezza resta logaritmica e ricerca e inserimento costano $O(\log n)$ in media. Esempio delle slide: inserimento di 35 nella lista 5, 10, 16, 18, 30, 41, 80.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 5, "Casualità e ammortamento". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo05.pdf` (p. 10-19).

## Prerequisiti
- [[Lista concatenata]]: ogni livello è una lista ordinata
- [[Ricerca binaria]]: la scansione dall'alto ne imita i dimezzamenti

## Porta a
- Nessuno nel corso.

## Collegati
- [[Albero AVL]]: dizionario deterministico con O(log n) al caso pessimo
- [[Quicksort]]: altro uso della casualità nello stesso capitolo
- [[Numeri pseudo-casuali]]: random() genera i lanci di moneta
