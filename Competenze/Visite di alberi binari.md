---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [tree traversal, visita anticipata, preorder, visita simmetrica, inorder, visita posticipata, postorder, problema decomponibile, albero completamente bilanciato, nodi cardine]
tags: [competenza, area/informatica]
---

# Visite di alberi binari

> Attraversamento sistematico di tutti i nodi di un albero binario in $O(n)$, con ordine anticipato, simmetrico o posticipato; schema dei "problemi decomponibili" sugli alberi.

## Definizione / enunciato
- **Anticipata** (preorder): elabora($u$), visita($u.sx$), visita($u.dx$);
- **simmetrica** (inorder): visita($u.sx$), elabora($u$), visita($u.dx$);
- **posticipata** (postorder): visita($u.sx$), visita($u.dx$), elabora($u$).

**Problema decomponibile**: caso base per $u=\texttt{null}$ o foglia; decomposizione sui sottoalberi di $u.sx$ e $u.dx$; ricombinazione dei due risultati con `Ricombina`. Se `Ricombina` costa $R$, l'algoritmo costa $O(R\cdot n)$ su $n$ nodi.

## Formule chiave
```text
Anticipata( u ):                 CompletamenteBilanciato( u ):
    if (u != null) {                 if (u == null) return <true, -1>;
        print u.dato;                <bilSX,altSX> = CompletamenteBilanciato( u.sx );
        Anticipata( u.sx );          <bilDX,altDX> = CompletamenteBilanciato( u.dx );
        Anticipata( u.dx );          bil = bilSX && bilDX && (altSX == altDX);
    }                                altezza = max(altSX, altDX) + 1;
                                     return <bil, altezza>;
```
Un albero è **completo** se ogni nodo interno ha due figli non vuoti, **completamente bilanciato** se è completo e tutte le foglie hanno la stessa profondità.

## Intuizione
L'informazione può viaggiare in due direzioni: **dalle foglie alla radice** (postorder: la soluzione per $T(u)$ usa quelle di $T(u.sx)$ e $T(u.dx)$) oppure **dalla radice alle foglie** con il passaggio dei parametri (per esempio `Profondita(u, p)` che chiama i figli con $p+1$). Per il controllo di bilanciamento si risolve un problema più generale, restituendo anche l'altezza.

## Come si usa
Esercizio "giocattolo" dei lucidi: un nodo $u$ è **cardine** se profondità($u$) = altezza($T(u)$). `Cardine(u, p)` passa la profondità verso il basso e restituisce l'altezza verso l'alto, così tutto costa $O(n)$; ricalcolare profondità o altezza con un'ulteriore chiamata ricorsiva in ogni nodo costerebbe di più.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, divide et impera sugli alberi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 47-55).

## Prerequisiti
- [[Albero binario]]: struttura da attraversare
- [[Divide et impera]]: la visita è un problema decomponibile

## Porta a
- [[Albero binario di ricerca]]: la visita simmetrica dà le chiavi in ordine

## Collegati
- [[Visita in profondità]]: la stessa idea estesa ai grafi
