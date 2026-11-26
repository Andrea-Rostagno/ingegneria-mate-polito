---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [timestamping, marca temporale, trusted timestamping, marcatura temporale collegata, linked timestamping]
tags: [competenza, area/informatica]
---

# Marcatura temporale

> Protocollo che associa a un documento data e ora in modo unico e non alterabile, combinando una funzione hash con la firma digitale di un arbitro.

## Definizione / enunciato
Requisiti di un protocollo di marcatura temporale:
- marcare i dati indipendentemente dal supporto fisico su cui sono conservati;
- rendere individuabile ogni modifica al documento;
- rendere impossibile marcare con una data e un'ora diverse da quelle effettive.

**Protocollo con arbitro:**
1. $A$ invia all'arbitro l'impronta hash del documento;
2. l'arbitro vi appende data e ora e firma digitalmente il risultato;
3. l'arbitro rinvia ad $A$ l'impronta firmata.

Vantaggi:
- $A$ non rivela il contenuto;
- l'arbitro non deve conservare i documenti;
- la marca è certificata dalla firma;
- $A$ controlla subito eventuali errori di trasmissione.

**Difetto:** l'arbitro potrebbe essere in combutta con $A$.

## Formule chiave
**Marcatura collegata.** $A$ invia $(H_n,A)$, con $H_n=h(D_n)$, e riceve
$$T_n=f^{-1}(n,A,H_n,t_n,I_{n-1},H_{n-1},t_{n-1},L_n),\qquad L_n=h(I_{n-1},H_{n-1},t_{n-1},L_{n-1}),$$
dove:
- $t_n$ è la data e l'ora;
- $I_{n-1}$, $H_{n-1}$, $t_{n-1}$ sono utente, impronta e marca precedenti.

Dopo la marcatura successiva, l'arbitro comunica ad $A$ l'identità $I_{n+1}$ del proprietario del documento seguente.

## Intuizione
Ogni marca dipende dalle precedenti attraverso $L_n$. Per provare la data, $A$ coinvolge $I_{n-1}$ e $I_{n+1}$: il suo documento è stato marcato dopo il precedente e prima del successivo.

Resta una frode possibile: marcare più documenti consecutivi con la complicità dell'arbitro. La si evita legando molti documenti consecutivi, o tutti, fino a eliminare l'arbitro: è l'idea della [[Blockchain]].

## Come si usa
Si usa per certificare la data di brevetti, contratti e transazioni. In un esame tipico si chiede di spiegare perché basta inviare l'hash e perché serve il collegamento $L_n$.

## Nei corsi
- **Crittografia** (magistrale): slide di Bazzanella "Protocolli avanzati 2". Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto13.pdf` (pp. 3-8).

## Prerequisiti
- [[Funzione hash crittografica]]: impronta $H_n=h(D_n)$ e collegamento $L_n$
- [[Firma digitale]]: l'arbitro certifica la marca con $f^{-1}$

## Porta a
- [[Blockchain]]: catena di blocchi senza autorità centrale, ciascuno con un timestamp

## Collegati
- [[Bitcoin]]: registro pubblico delle transazioni marcate e concatenate
- [[Merkle tree]]: le transazioni di un blocco riassunte nella Merkle root
- [[Proof of Work]]: sostituisce l'arbitro nella validazione dei blocchi
