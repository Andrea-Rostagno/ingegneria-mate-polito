---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Blakley scheme, Blakley secret sharing, schema geometrico di condivisione del segreto]
tags: [competenza, area/informatica]
---

# Schema di Blakley

> Schema di condivisione del segreto **geometrico**: il segreto è un punto di $\mathbb R^m$ e ogni informazione parziale è un iperpiano che passa per quel punto.

## Definizione / enunciato
Due rette complanari non parallele si incontrano in un punto, e lo stesso vale per tre piani non paralleli. In generale, $m$ iperspazi $(m-1)$-dimensionali non paralleli di $\mathbb R^m$ si intersecano in un punto.

**Protocollo:**
- il segreto è codificato come punto di $\mathbb R^m$;
- ognuna delle $m$ parti riceve un iperspazio passante per esso;
- se ne manca anche solo uno, il segreto non si ricava.

**Versione a soglia:** si definiscono $n>m$ iperspazi che si intersecano in un solo punto e si distribuiscono fra gli utenti. Chi ne riceve di più ha una gerarchia maggiore.

## Formule chiave
Ricostruire il segreto significa risolvere il sistema lineare formato dalle equazioni degli iperpiani posseduti.

## Intuizione
Ogni iperpiano restringe le posizioni possibili del segreto di una dimensione. Servono $m$ vincoli indipendenti per arrivare a un solo punto.

## Come si usa
Esempi dalle slide:
- **due persone**, segreto $(1,2)$: una riceve la retta $y=2x$, l'altra $y=x+1$. Una sola retta non basta; con entrambe si risolve il sistema e si trova l'intersezione $(1,2)$ (`Critto11.pdf` pp. 7-8);
- **schema gerarchico con tre persone**, segreto $(1,2)$: $A$ riceve $y=2x$ e $y=x+1$ e quindi conosce il segreto da sola; $B$ riceve $y=2$ e $C$ riceve $y=3-x$, e servono entrambi (p. 18).

## Nei corsi
- **Crittografia** (magistrale): slide di Bazzanella "Protocolli di base 2". Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto11.pdf` (pp. 6-8, 17-18).

## Prerequisiti
- [[Secret splitting]]: stesso obiettivo, versione "tutti o nessuno"
- [[Soluzioni di un sistema lineare]]: il segreto è l'unica soluzione del sistema

## Porta a
- Nessuno.

## Collegati
- [[Schema a soglia di Shamir]]: analogo algebrico (polinomi su $\mathbb Z_p$)
- [[Teorema di Rouché-Capelli]]: quando l'intersezione è un solo punto
