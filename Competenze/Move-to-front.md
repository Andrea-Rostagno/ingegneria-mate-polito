---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [MTF, liste ad auto-organizzazione, self-organizing list, algoritmo on-line, algoritmo in linea, analisi competitiva, OPT, inversioni]
tags: [competenza, area/informatica]
---

# Move-to-front

> Strategia di auto-organizzazione di una lista: l'elemento cercato viene spostato in testa. Senza conoscere le richieste future costa al più il doppio dell'algoritmo ottimo che le conosce tutte.

## Definizione / enunciato
In una lista non ordinata per chiave si sfrutta il **principio di località temporale**: un elemento appena acceduto sarà probabilmente richiesto di nuovo a breve. **Move-to-front (MTF)**: dopo ogni ricerca l'elemento trovato va in prima posizione. MTF è un algoritmo **on-line**: decide senza conoscere le richieste future. Termine di paragone: **OPT**, algoritmo off-line che esamina prima tutte le richieste, permuta la lista per minimizzare il costo e poi accede senza modificarla. Costo di un accesso = posizione dell'elemento (numero di elementi attraversati).

## Formule chiave
Con $n$ ricerche su $m$ elementi, liste di partenza uguali, $c_j$ e $c'_j$ costi della $j$-esima operazione per MTF e OPT:
$$\sum_{j=0}^{n-1}c_j\ \le\ 2\sum_{j=0}^{n-1}c'_j .$$
Dimostrazione con il potenziale $\Phi_j$ = numero di **inversioni** (coppie in ordine diverso nelle due liste) dopo l'operazione $j$, $0\le\Phi_j\le\frac{m(m-1)}{2}$. Se $f$ elementi che precedono $k$ in MTF danno inversioni e $g=c_j-f$ no, lo spostamento in testa dà $\Phi_j=\Phi_{j-1}-f+g$, quindi $c_j+\Phi_j-\Phi_{j-1}=2g$; in OPT almeno $g$ elementi precedono $k$, cioè $c'_j\ge g$. Sommando con $\Phi_{-1}=0$:
$$\sum_j c_j\le 2\sum_j c'_j-\Phi_{n-1}\le 2\sum_j c'_j .$$

## Intuizione
Ogni volta che MTF paga un elemento "inutile" davanti a $k$ (uno che OPT ha dietro), crea un'inversione in meno; quelli che anche OPT ha davanti li paga anche OPT. Il potenziale contabilizza questo scambio.

## Come si usa
```text
MoveToFront( a, k ):
    p = a;
    if (p == null || p.dato == k) return p;
    while (p.succ != null && p.succ.dato != k) p = p.succ;
    if (p.succ == null) return null;
    tmp = p.succ;  p.succ = p.succ.succ;
    tmp.succ = a;  a = tmp;
    return a;
```

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 5, "Casualità e ammortamento". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo05.pdf` (p. 28-37).

## Prerequisiti
- [[Lista concatenata]]: lo spostamento in testa cambia pochi riferimenti
- [[Ricerca lineare]]: la ricerca è una scansione sequenziale

## Porta a
- Nessuno nel corso.

## Collegati
- [[Analisi ammortizzata]]: la dimostrazione usa il metodo del potenziale
