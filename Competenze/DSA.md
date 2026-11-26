---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["Digital Signature Algorithm", "DSS", "Digital Signature Standard", "firma DSA", "firma digitale DSA", "canale subliminale", "subliminal channel"]
tags: [competenza, area/informatica]
---

# DSA

> È lo standard di firma digitale del NIST (1991), variante efficiente di ElGamal. Usa due gruppi ciclici, $\mathbb Z_p^*$ da 1024 bit e un sottogruppo di ordine primo $q$ da 160 bit, e produce firme di 320 bit.

## Definizione / enunciato
**Generazione delle chiavi** (versione a 1024 bit, `Critto10.pdf` p. 18):
1. un primo $p$ con $2^{1023}<p<2^{1024}$;
2. un primo $q\mid p-1$ con $2^{159}<q<2^{160}$;
3. $\alpha$ di ordine $q$, che genera un sottogruppo di $\mathbb Z_p^*$ con $q$ elementi;
4. $d$ casuale con $0<d<q$ e $\beta=\alpha^d \bmod p$.

Chiave pubblica $k_{pub}=(p,q,\alpha,\beta)$, chiave privata $k_{priv}=d$. In pratica si fissa prima $q$, poi si cerca $p$ della forma $qk+1$ con test di primalità ripetuti, per esempio Miller-Rabin (p. 19).

**Firma** di $M$ (p. 20): si sceglie $k$ casuale con $0<k<q$ e si calcolano
$$r\equiv(\alpha^k \bmod p)\bmod q,\qquad s\equiv(h(M)+d\cdot r)\,k^{-1}\bmod q.$$
La firma è la coppia $(r,s)$.

**Verifica** (p. 21): $w=s^{-1}\bmod q$, $u_1=w\,h(M)\bmod q$, $u_2=w\,r\bmod q$ e
$$v=(\alpha^{u_1}\beta^{u_2}\bmod p)\bmod q.$$
La firma è autentica se $v=r$.

## Formule chiave
$$u_1+d\,u_2=\frac{k\,h(M)}{h(M)+dr}+\frac{k\,dr}{h(M)+dr}=k\ \Rightarrow\ v=(\alpha^k\bmod p)\bmod q=r$$

## Intuizione
Gli esponenti vivono modulo $q$ (160 bit), mentre la difficoltà del logaritmo discreto si appoggia a $p$ (1024 bit). Così la firma è corta, $2\times160=320$ bit, e la sicurezza è di circa 80 bit (`Crypto10.pdf` nota 10.3.5). I parametri $p$, $q$, $\alpha$ possono essere condivisi da tutta una rete di utenti (nota 10.3.2).

## Come si usa
- **Esercizio in `Crypto10.pdf` (10.3.6):** $p=59$, $q=29$, $\alpha=3$, $d=7$, $\mathrm{SHA}(x)=26$; si chiede la firma $(r,s)$.
- **Effimera prevedibile:** se un crittanalista prevede $k_E$, DSA è rotto. Nel 2010 un PRNG non sicuro ha permesso l'attacco alla Sony PS3 (10.3.7).
- **Senza hash** (10.3.8): la variante $s=(m+dr)k_E^{-1}$ con $m\in\mathbb Z_q$ va discussa per la sicurezza.
- **Canale subliminale** (Simmons, §10.5.1): Alice e Bob condividono $d$. Alice firma un messaggio innocuo usando come effimera il segreto $k$, e Bob lo recupera con $k=(\mathrm{SHA}(x)+d\cdot r)s^{-1}$ sotto gli occhi del guardiano Walter.

## Nei corsi
- **Crittografia** (magistrale): week 10 (Di Scala, le formule della dispensa inglese sono immagini) e protocolli di base di Bazzanella, da cui sono prese le formule. Fonti:
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto10.pdf` (pp. 17-21);
  - `magistrale/Crittografia/Slide/slides week 1-14/week10/Crypto10.pdf` (§10.3, pp. 6-8; §10.5.1, pp. 9-10).

## Prerequisiti
- [[Firma ElGamal]]: DSA ne è la variante efficiente
- [[Gruppo ciclico]]: sottogruppo di ordine $q$ generato da $\alpha$
- [[Funzione hash crittografica]]: si firma $h(M)$
- [[Test di primalità]]: generazione di $p$ e $q$

## Porta a
- [[ECDSA]]: stessa struttura sul gruppo dei punti di una curva ellittica

## Collegati
- [[Firma di Schnorr]]: altra firma su un sottogruppo di ordine primo
- [[Problema del logaritmo discreto]]: fondamento della sicurezza
- [[Firma digitale]]: standard DSS
- [[Numeri pseudo-casuali]]: un'effimera prevedibile rompe lo schema
