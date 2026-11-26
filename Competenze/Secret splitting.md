---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [secret splitting, suddivisione di un segreto, condivisione di un segreto con XOR, secret broadcasting, trasmissione selettiva di un segreto]
tags: [competenza, area/informatica]
---

# Secret splitting

> Protocollo che divide un segreto $M$ fra $n$ persone in modo che solo **tutte insieme** lo ricostruiscano, mentre ogni sottoinsieme proprio non ne sa nulla.

## Definizione / enunciato
**Due parti.** $A$ genera una stringa casuale $R$ lunga quanto $M$ e calcola $S=M\oplus R$. Poi invia $R$ a $B$ e $S$ a $C$. Insieme, $B$ e $C$ ricostruiscono $M$.

**$n$ parti.** Si generano $n-1$ stringhe casuali $R_i$ e si dà alla persona restante $S=M\oplus\bigoplus_{i=1}^{n-1}R_i$.

## Formule chiave
$$R\oplus S=R\oplus(M\oplus R)=M,\qquad \bigoplus_{i=1}^{n-1}R_i\oplus S=M.$$

## Intuizione
Ogni parte presa da sola, o anche un sottogruppo che non le comprenda tutte, è una stringa uniformemente casuale. È lo stesso principio del [[One-time pad]]: $R$ fa da chiave usata una sola volta. Le slide lo definiscono "assolutamente sicuro".

## Come si usa
- **Esempi delle slide:** il codice di una cassaforte o la password di un conto, utilizzabili solo con tutti presenti.
- **Limite:** basta l'assenza di una persona per bloccare tutto. Da qui gli schemi a soglia ([[Schema a soglia di Shamir]], [[Schema di Blakley]]).
- **Secret broadcasting** (stesse slide). $A$ condivide una chiave con ogni utente e vuole raggiungere solo $D_1,\dots,D_m$. Genera una chiave $k$ e invia a tutti
$$(f_{D_1}(k),\dots,f_{D_m}(k),f_k(M)).$$
  Solo i destinatari ottengono un $M$ sensato.
  - Difetto: si conosce il numero di destinatari.
  - Correzione: uno schema a soglia $(m+a+1,\,2m+a+1)$ in cui le chiavi degli autorizzati sono ombre.

## Nei corsi
- **Crittografia** (magistrale): slide di Bazzanella "Protocolli di base 2". Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto11.pdf` (pp. 3-5 secret splitting, pp. 19-22 secret broadcasting).

## Prerequisiti
- [[One-time pad]]: stesso uso dello XOR con stringa casuale

## Porta a
- [[Schema a soglia di Shamir]]: ricostruzione con $m<n$ parti
- [[Schema di Blakley]]: versione geometrica

## Collegati
- [[Numeri pseudo-casuali]]: serve una sorgente casuale per $R$
