---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [AVL tree, AVL, albero 1-bilanciato, albero bilanciato, nodo critico, rotazioni, alberi di Fibonacci, global rebuilding]
tags: [competenza, area/informatica]
---

# Albero AVL

> Albero binario di ricerca 1-bilanciato (le altezze dei due sottoalberi di ogni nodo differiscono al più di 1): l'altezza è $O(\log n)$ e le operazioni costano $O(\log n)$ al caso pessimo.

## Definizione / enunciato
Con $h(u)$ altezza di $T(u)$ e $h(\texttt{null})=-1$, un nodo è **1-bilanciato** se $|h(u.sx)-h(u.dx)|\le 1$; un albero è 1-bilanciato se lo sono tutti i suoi nodi. Un **AVL** è un albero binario di ricerca 1-bilanciato in cui ogni nodo memorizza la propria altezza in `u.altezza`.
**Teorema**: un albero 1-bilanciato con $n$ nodi ha altezza $h=O(\log n)$.
**Inserimento**: come nell'albero di ricerca fino alla creazione della foglia $f$; poi si risale (con la ricorsione) aggiornando le altezze e si trova il **nodo critico**, il minimo antenato di $f$ non più 1-bilanciato, che si ribilancia con rotazioni (casi SS, SD, DS, DD; SD e DS richiedono due rotazioni).

## Formule chiave
Dimostrazione con gli **alberi di Fibonacci** $F_h$, gli alberi 1-bilanciati di altezza $h$ con il minimo numero $n_h$ di nodi:
$$n_h=n_{h-1}+n_{h-2}+1,\qquad n_h=F_{h+3}-1,\qquad F_h=\frac{\varphi^h-(1-\varphi)^h}{\sqrt5},\ \ \varphi=\frac{1+\sqrt5}{2}\approx1{,}618$$
Quindi $n_h\ge c^h$ per una costante $c>1$, e ogni albero 1-bilanciato di altezza $h$ con $n$ nodi ha $n\ge n_h\ge c^h$, da cui $h=O(\log n)$. Valori: $n_h=1,2,4,7,12,20,33,54,\dots$ per $h=0,1,2,\dots$
Ribilanciamento nel ramo sinistro:
```text
if (Altezza(u.sx) - Altezza(u.dx) == 2) {
    if (e.chiave > u.sx.dato.chiave) u.sx = RAO(u.sx);
    u = RO( u );
}
```
(simmetrico nel ramo destro con `RO` e `RAO` scambiate; i nomi indicano le due rotazioni, il cui codice non è nei lucidi).

## Intuizione
Togliendo un nodo a un albero di Fibonacci lo si rende di altezza $h-1$ oppure non più 1-bilanciato: è il caso estremo. Poiché anche il caso estremo cresce esponenzialmente con $h$, l'altezza è logaritmica.

## Come si usa
Inserimento in $O(h)=O(\log n)$; cancellazione in $O(\log n)$ con più casi. Idea pratica di **global rebuilding**: si marcano i nodi come cancellati logicamente e, quando i marcati sono circa metà dell'albero, lo si ricostruisce: costo $O(\log n)$ ammortizzato.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 4, dizionari. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo04.pdf` (p. 23-35).

## Prerequisiti
- [[Albero binario di ricerca]]: l'AVL ne aggiunge il bilanciamento
- [[Numeri di Fibonacci]]: contano i nodi degli alberi di Fibonacci

## Porta a
- Nessuno nel corso.

## Collegati
- [[Skip list]]: alternativa randomizzata con costo logaritmico in media
- [[Analisi ammortizzata]]: costo ammortizzato del global rebuilding
