---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["Schnorr signature", "firma Schnorr", "schema di Schnorr", "gruppo di Schnorr", "Schnorr group", "multifirma Schnorr"]
tags: [competenza, area/informatica]
---

# Firma di Schnorr

> È una firma digitale basata sul logaritmo discreto in un gruppo di ordine primo $q$. È semplice ed efficiente, produce firme corte, e le firme di più firmatari si possono aggregare: per questo è proposta per Bitcoin.

## Definizione / enunciato
Nelle dispense del docente (`Crypto10.pdf` §10.4) Schnorr compare solo come rimando a due pagine web, Wikipedia e Bitcoin wiki. Lo schema qui sotto viene dagli appunti 2021 degli studenti (`CryptoNotes2021/2021-05-13`), che riprendono quelle pagine: **fonte secondaria**. Nelle formule i simboli di concatenazione sono andati persi nel testo e vanno verificati sul PDF.

**Parametri.** Un gruppo $G$ di ordine primo $q$ con generatore $g$, tipicamente un gruppo di Schnorr: sottogruppo di ordine $q$ di $\mathbb Z_p^*$ con $p=qr+1$, $g=h^r \bmod p\ne1$. Serve anche una funzione hash $H:\{0,1\}^*\to\mathbb Z_q$.

- **Chiavi:** privata $x$, pubblica $y=g^x$.
- **Firma:** si sceglie $k$ casuale e si calcolano $r=g^k$, $e=H(r\,\|\,M)$, $s=k-xe$. La firma è $(s,e)$.
- **Verifica:** $r_v=g^s y^e$, $e_v=H(r_v\,\|\,M)$; si accetta se $e_v=e$.

## Formule chiave
$$r_v=g^s y^e=g^{k-xe}g^{xe}=g^k=r\ \Rightarrow\ e_v=e$$
**Riuso del nonce:** con lo stesso $k$ e due messaggi, $s-s'=-x(e-e')$, quindi $x$ si isola subito.

## Intuizione
È la versione non interattiva del protocollo di identificazione di Schnorr, uno zero-knowledge sul logaritmo discreto (`Critto12.pdf` p. 17): l'hash $H(r\|M)$ prende il posto della sfida del verificatore. Essendo lineare in $k$ e $x$, la firma si somma: questo permette le multifirme.

## Come si usa
**Aggregazione** (appunti 2021, §1.2.9, in notazione additiva su curva):
- due firmatari pubblicano $R_i=k_iG$;
- ciascuno calcola $s_i=k_i-f(h\|R\|P)\,x_i$, con $R=R_1+R_2$;
- la firma unica è $(R,s_1+s_2)$, e si verifica che $sG+f(h\|R\|P)(P_1+P_2)=R$.

Livello di sicurezza: $t$ bit con firme di $4t$ bit, riducibili a $3t$ (appunti, §1.2.8).

## Nei corsi
- **Crittografia** (magistrale): week 10, solo citata nelle dispense; protocollo di autenticazione di Schnorr nominato da Bazzanella. Fonti:
  - `magistrale/Crittografia/Slide/slides week 1-14/week10/Crypto10.pdf` (§10.4, p. 9);
  - `magistrale/Crittografia/Repository GitHub/CryptoNotes2021/2021-05-13/13_05_20.pdf` (pp. 1-4, appunti degli studenti);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto12.pdf` (p. 17).

## Prerequisiti
- [[Firma ElGamal]]: Schnorr è una variante più compatta
- [[Problema del logaritmo discreto]]: fondamento della sicurezza
- [[Funzione hash crittografica]]: $e=H(r\|M)$

## Porta a
- [[Prova a conoscenza nulla]]: versione interattiva come identificazione

## Collegati
- [[DSA]]: stessa idea di sottogruppo di ordine primo
- [[ECDSA]]: firma usata oggi da Bitcoin, che Schnorr dovrebbe affiancare
- [[Firma digitale]]: istanza dello schema generale
