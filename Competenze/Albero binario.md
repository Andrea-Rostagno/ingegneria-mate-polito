---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: [binary tree, albero binario radicato, radice, foglia, nodo interno, figlio sinistro, figlio destro, altezza di un albero, profondità di un nodo, alberi cardinali, alberi ordinali, memorizzazione binarizzata]
tags: [competenza, area/informatica]
---

# Albero binario

> Struttura di dati gerarchica in cui ogni nodo ha un figlio sinistro e uno destro (eventualmente vuoti): generalizza la lista ammettendo più successori.

## Definizione / enunciato
Un **albero** generalizza le liste con più successori: elementi = **nodi**, collegamenti = **archi**; ci sono la **radice**, le **foglie** e i nodi interni, con le relazioni padre, figlio, fratello, antenato, discendente; ogni nodo è radice di un sottoalbero. In un **albero binario** ogni nodo ha due figli (`null` = vuoto), sinistro e destro.
**Definizione ricorsiva**: si sceglie un elemento come radice $r$, si dividono i rimanenti in due gruppi etichettati sinistro e destro, si organizza ricorsivamente ciascun gruppo in un sottoalbero (anche vuoto), e $r$ è padre delle radici dei due sottoalberi.
In memoria un nodo $u$ ha i campi `u.dato`, `u.sx`, `u.dx`, `u.padre`. Alberi $k$-ari: **cardinali** (array di $k$ riferimenti, anche `null`) o **ordinali** (solo la lista ordinata dei figli non vuoti); la **memorizzazione binarizzata** li rappresenta con nodi a due riferimenti.

## Formule chiave
```text
Dimensione( u ):                 Altezza( u ):
    if (u == null) return 0;         if (u == null) return -1;
    dimensioneSX = Dimensione(u.sx);  altezzaSX = Altezza( u.sx );
    dimensioneDX = Dimensione(u.dx);  altezzaDX = Altezza( u.dx );
    return dimensioneSX + dimensioneDX + 1;
                                     return max(altezzaSX, altezzaDX) + 1;
```
**Profondità**: la radice ha profondità 0 e i figli di un nodo a profondità $p$ hanno profondità $p+1$. **Altezza**: massima profondità delle foglie (con la convenzione $h(\texttt{null})=-1$).

## Intuizione
La convenzione $h(\texttt{null})=-1$ fa funzionare la ricorsione senza trattare a parte le foglie: una foglia ha due figli vuoti e altezza $\max(-1,-1)+1=0$.

## Come si usa
Calcolare dimensione e altezza ricorsivamente in $O(n)$; calcolare la profondità risalendo i padri (`while (u.padre != null) { p = p+1; u = u.padre; }`). L'esempio dei lucidi è l'albero genealogico dei Baggins.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 1 (alberi) e cap. "divide et impera" (algoritmi ricorsivi su alberi). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo01.pdf` (p. 20-25); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 43-46).
- **Blockchain e criptoeconomia** (magistrale): il Merkle tree delle transazioni di un blocco Bitcoin è un albero binario di hash. Le foglie sono gli hash delle transazioni, ogni nodo interno è l'hash dei due figli e la radice va nell'header. Il cammino foglia-radice ha lunghezza $\log_2 n$: è la prova di inclusione SPV. Fonte: `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 8-10).

## Prerequisiti
- [[Lista concatenata]]: un albero è una lista con più successori
- [[Puntatore]]: i nodi sono legati da riferimenti

## Porta a
- [[Visite di alberi binari]]: attraversamento sistematico dei nodi
- [[Heap binario]]: albero binario completo a sinistra
- [[Albero binario di ricerca]]: albero binario con le chiavi ordinate
- [[Merkle tree]]: albero binario di hash che riassume le transazioni (Blockchain e criptoeconomia)

## Collegati
- [[Albero (teoria dei grafi)]]: l'albero radicato visto come grafo aciclico connesso
